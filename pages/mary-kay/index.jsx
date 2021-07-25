import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

import {
  MainStyled,
  WrapperStyled,
  MainTitleStyled,
} from "../../styles/MaryKay.styles";
import {
  ContainerArticlesStyled,
  ArticleStyled,
  ImageContainerStyled,
  ImageStyled,
  InfoArticleStyled,
  TitleStyled,
  PriceStyled,
  ParagraphStyled,
} from "../../styles/MaryKay.styles";
import {
  ModalStyled,
  ButtonModalStyled,
  ImageModalStyled,
} from "../../styles/MaryKay.styles";

export default function MaryKay({ articles }) {
  const [imageModalUrl, setImageModalUrl] = useState(null);
  const [imageModalAlt, setImageModalAlt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const modalDOM = useRef();

  const handleImageClick = (article) => {
    setImageModalUrl(article.imageUrl);
    setImageModalAlt(article.title);
    setShowModal(true);
  };

  const handleModalClick = (e) => {
    if (e.target === modalDOM.current) {
      setShowModal(false);
    }
  };

  return (
    <Layout title="Mary Kay">
      <MainStyled>
        <WrapperStyled>
          <MainTitleStyled>Catalogo Mary Kay</MainTitleStyled>
          <ContainerArticlesStyled>
            {articles.map((article, i) => (
              <ArticleStyled key={i}>
                <ImageContainerStyled>
                  <ImageStyled
                    src={`/images/${article.imageUrl}`}
                    alt={article.title}
                    onClick={() => handleImageClick(article)}
                  />
                </ImageContainerStyled>
                <InfoArticleStyled>
                  <TitleStyled>{article.title}</TitleStyled>
                  <PriceStyled>{article.price}</PriceStyled>
                  <ParagraphStyled>{article.description}</ParagraphStyled>
                  <Button>Agregar al Carrito</Button>
                </InfoArticleStyled>
              </ArticleStyled>
            ))}
          </ContainerArticlesStyled>
        </WrapperStyled>
      </MainStyled>
      {imageModalUrl && (
        <ModalStyled show={showModal} ref={modalDOM} onClick={handleModalClick}>
          <ButtonModalStyled onClick={() => setShowModal(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </ButtonModalStyled>
          <ImageModalStyled
            src={`/images/${imageModalUrl}`}
            alt={imageModalAlt}
          />
        </ModalStyled>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let articles = [];

  try {
    const res = await fetch(`${process.env.baseUrl}/api/articles`);
    articles = await res.json();
  } catch (error) {
    console.log(error);
  }

  return { props: { articles } };
}

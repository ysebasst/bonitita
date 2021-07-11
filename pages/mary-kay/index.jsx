import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

import { MainStyled, WrapperStyled, MainTitleStyled } from "./MaryKay.styles";
import {
  ContainerArticlesStyled,
  ArticleStyled,
  ImageContainerStyled,
  ImageStyled,
  InfoArticleStyled,
  TitleStyled,
  PriceStyled,
  ParagraphStyled,
} from "./MaryKay.styles";
import {
  ModalStyled,
  ButtonModalStyled,
  ImageModalStyled,
} from "./MaryKay.styles";

import { articles } from "./articles";

export default function MaryKay() {
  const [imageModalUrl, setImageModalUrl] = useState("");
  const [imageModalAlt, setImageModalAlt] = useState("");
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
      <ModalStyled show={showModal} ref={modalDOM} onClick={handleModalClick}>
        <ButtonModalStyled onClick={() => setShowModal(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </ButtonModalStyled>
        <ImageModalStyled
          src={`/images/${imageModalUrl}`}
          alt={imageModalAlt}
        />
      </ModalStyled>
    </Layout>
  );
}

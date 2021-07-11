import styled from "styled-components";

import colors from "../config/colors";
import variables from "../config/variables";

import Wrapper from "../components/Wrapper";

// Main
export const MainStyled = styled.main`
  padding: 0.5rem;
`;

// Wrapper
export const WrapperStyled = styled(Wrapper)`
  overflow: hidden;
`;

// Main Title
export const MainTitleStyled = styled.h1`
  text-align: center;
`;

// Articles Container
export const ContainerArticlesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -0.75rem;
  @media screen and (max-width: 767px) {
    /* flex-direction: column; */
  }
`;

// Article
export const ArticleStyled = styled.article`
  width: 100%;
  max-width: 354px;
  padding: 1rem;
  margin: 0.75rem;
  text-align: center;
  background-color: ${colors.white};
`;

// Article Image Container
export const ImageContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  background-color: #000000c0;
`;

// Article Image
export const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

// Article Info
export const InfoArticleStyled = styled.div`
  text-align: left;
  border-top: 1px solid #000;
`;

// Article Title
export const TitleStyled = styled.h3`
  margin: 0.5rem 0;
`;

// Article Price
export const PriceStyled = styled.p`
  margin: 0.25rem 0;
  font-weight: bold;
  color: #555;
  &::before {
    content: "$";
  }
`;

// Article Paragraph
export const ParagraphStyled = styled.p`
  margin: 0.25rem 0 1rem;
`;

// Article Modal
export const ModalStyled = styled.div`
  position: fixed;
  top: ${variables.navbarHeight};
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${variables.navbarHeight});
  background-color: #000000c0;
  transition: transform 0.3s;
  transform: ${(props) => (props.show ? "scale(1)" : "scale(0)")};
`;

// Article Modal Close Button
export const ButtonModalStyled = styled.span`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  color: ${colors.white};
  background-color: ${colors.black}A0;
  cursor: pointer;
`;

// Article Modal Image
export const ImageModalStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

import styled from "styled-components";

// Main
export const MainStyled = styled.main`
  padding: 0.5rem;
`;

// Main Title
export const TitleMainStyled = styled.title`
  display: none;
`;

// Mary Kay
export const MaryKayStyled = styled.section`
  display: flex;
  background-color: #eee;
  width: minmax(max-content, 100%);
  max-width: 720px;
  margin: 0 auto;
  border: 1px solid #00000020;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    max-width: 375px;
  }
`;

// Mary Kay Image
export const ImageMaryKayStyled = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
`;

// Mary Kay Info
export const InfoMaryKayStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }
`;

// Mary Kay Title
export const TitleMaryKayStyled = styled.h2`
  margin: 0.5rem 0;
`;

// Mary Kay Description
export const DescriptionMaryKayStyled = styled.p`
  margin: 0.25rem 0 1rem;
`;

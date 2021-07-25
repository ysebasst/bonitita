import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

import { MainStyled, TitleMainStyled } from "../styles/index.styles";
import {
  MaryKayStyled,
  ImageMaryKayStyled,
  InfoMaryKayStyled,
  TitleMaryKayStyled,
  DescriptionMaryKayStyled,
} from "../styles/index.styles";

export default function Inicio() {
  const router = useRouter();
  return (
    <Layout title="Inicio">
      <MainStyled>
        <Wrapper>
          <TitleMainStyled>Bonitita Express</TitleMainStyled>
          <MaryKayStyled>
            <ImageMaryKayStyled
              src="/images/consultora.jpeg"
              alt="consultora Mary Kay"
            />
            <InfoMaryKayStyled>
              <TitleMaryKayStyled>Catalogo Mary Kay</TitleMaryKayStyled>
              <DescriptionMaryKayStyled>
                Consultora oficial de Mary Kay
              </DescriptionMaryKayStyled>
              <Button onClick={() => router.push("/mary-kay")}>
                Ver Catalogo
              </Button>
            </InfoMaryKayStyled>
          </MaryKayStyled>
        </Wrapper>
      </MainStyled>
    </Layout>
  );
}

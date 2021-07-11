import Link from "next/link";

import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

import { MainStyled, TitleMainStyled } from "./index.styles";
import {
  MaryKayStyled,
  ImageMaryKayStyled,
  InfoMaryKayStyled,
  TitleMaryKayStyled,
  DescriptionMaryKayStyled,
} from "./index.styles";

export default function Inicio() {
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
              <Link href="/mary-kay">
                <Button>Ver Catalogo</Button>
              </Link>
            </InfoMaryKayStyled>
          </MaryKayStyled>
        </Wrapper>
      </MainStyled>
    </Layout>
  );
}

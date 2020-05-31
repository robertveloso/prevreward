import React from 'react';

import { FaShoppingBag, FaChartBar } from 'react-icons/fa';

import {
  AboutContainer,
  AboutBanner,
  AboutImage,
  AboutItems,
  AboutItem,
  AboutItemIcon,
  AboutItemInfos,
  AboutItemTitle,
  AboutItemDescriptionList,
  AboutItemDescription,
} from './styles';
import {
  Container,
  Section,
  Subsection,
  Title,
  Subtitle,
  Text,
} from '../../styles/dstyles';

export default function About() {
  return (
    <Container>
      <AboutContainer>
        <Section>
          <div className="row">
            <div className="col-lg-6 col-12 text-lg-left text-center">
              <Title>
                Seu investimento <span>agora</span> pode garantir um{' '}
                <span>futuro</span> tranquilo, tenha o <span>retorno</span> que
                você merece!
              </Title>
            </div>
            <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
              <AboutBanner />
            </div>
          </div>
        </Section>
      </AboutContainer>
      <Section>
        <Subsection>
          <Subtitle>Sobre o Prev Reward</Subtitle>
          <Text>
            Concentre suas compras no seu cartão de crédito e tenha
            tranquilidade no futuro
          </Text>
        </Subsection>
        <div className="row mt-5">
          <div className="col-lg-6 col-12">
            <Text>
              Plataforma que nasceu para reeducaçaão financeira, O número de
              pessoas que aplicam em ações no Brasil representa menos de 0,5% da
              população, de mais de 200 milhões de pessoas. Podemos não ser a
              bolsa de valores, mas vamos deixar seu dinheiro seguro. Vamos
              transformar os pontos do seu cartão em dinheiro para sua
              previdência.
            </Text>
            <AboutItems>
              <AboutItem>
                <AboutItemIcon>
                  <FaShoppingBag />
                </AboutItemIcon>
                <AboutItemInfos>
                  <AboutItemTitle>Para você:</AboutItemTitle>
                  <AboutItemDescriptionList>
                    <AboutItemDescription>...</AboutItemDescription>
                    <AboutItemDescription>...</AboutItemDescription>
                    <AboutItemDescription>...</AboutItemDescription>
                  </AboutItemDescriptionList>
                </AboutItemInfos>
              </AboutItem>
              <AboutItem>
                <AboutItemIcon>
                  <FaChartBar />
                </AboutItemIcon>
                <AboutItemInfos>
                  <AboutItemTitle>Para nós:</AboutItemTitle>
                  <AboutItemDescriptionList>
                    <AboutItemDescription>...</AboutItemDescription>
                  </AboutItemDescriptionList>
                </AboutItemInfos>
              </AboutItem>
            </AboutItems>
          </div>
          <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
            <AboutImage />
          </div>
        </div>
      </Section>
    </Container>
  );
}

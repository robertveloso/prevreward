import React from 'react';

import { toast } from 'react-toastify';

import CompaniesBoard from '../../components/CompaniesBoard';

import {
  HomeContainer,
  HomeTitleContainer,
  HomeBannerContainer,
  HomeBanner,
} from './styles';
import {
  Container,
  Section,
  Subsection,
  Title,
  Subtitle,
  Text,
  Button,
} from '../../styles/dstyles';

function Home() {
  return (
    <>
      <Container>
        <HomeContainer>
          <Section>
            <div className="row">
              <HomeTitleContainer className="col-lg-6 col-12">
                <Title>
                  <span>Pense</span> milhas à frente,{' '}
                  <span>invista no seu futuro</span>
                </Title>
                <span style={{ fontSize: '18px', color: '#fff' }}>
                  Troque seus pontos por dinheiro na previdência
                </span>
                <Button onClick={() => toast.info('Em breve...')}>
                  Compartilhar com meus amigos
                </Button>
              </HomeTitleContainer>
              <HomeBannerContainer className="col-lg-6">
                <HomeBanner />
              </HomeBannerContainer>
            </div>
          </Section>
        </HomeContainer>
        <Section id="companies">
          <Subsection>
            <Subtitle>O que faremos por você</Subtitle>
            <Text>
              Somos o programa de pontos que aporta na previdência,{'\n'}
              vincule seus programas de fidelidade
            </Text>
          </Subsection>
          <CompaniesBoard />
        </Section>
      </Container>
    </>
  );
}

export default Home;

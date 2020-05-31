import React from 'react';

import { FooterText } from './styles';
import { Container, Section } from '../../styles/dstyles';

function Footer() {
  return (
    <Container>
      <Section>
        <FooterText>
          © Copyright 2020 - HackaPrev - Todos os direitos reservados.
        </FooterText>
      </Section>
    </Container>
  );
}

export default Footer;

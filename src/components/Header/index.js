import React from 'react';
import { Link } from 'react-router-dom';

import { MdMonetizationOn } from 'react-icons/md';

import * as S from './styles';

import logo from '../../assets/images/logo-light.svg';

export default function Header() {
  return (
    <>
      <S.Container>
        <Link to="/">
          <img src={logo} width={180} alt="Mercado Futuro" />
        </Link>
        <header>
          <S.Links to="/">
            <div>
              <strong>Início</strong>
            </div>
          </S.Links>
          <S.Links to="/precos">
            <div>
              <strong>Tabela de Preços</strong>
            </div>
          </S.Links>
          <S.Links to="/sobre">
            <div>
              <strong>Sobre nós</strong>
            </div>
          </S.Links>

          <S.Cart to="/trocar-pontos">
            <div>
              <strong>Investir em mim</strong>
            </div>

            <MdMonetizationOn size={36} color="#fff" />
          </S.Cart>
        </header>
      </S.Container>
    </>
  );
}

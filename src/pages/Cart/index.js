import React from 'react';
import { toast } from 'react-toastify';

import { MdDelete } from 'react-icons/md';

// import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const total = 0;
  const cart = [];

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Vou receber</th>
            <th>Pontos usados</th>
            <th>Programa de Fidelidade</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map(points => (
            <tr>
              <td />

              <td />

              <td />
              <td />

              <td>
                <button type="button" onClick={() => null}>
                  <MdDelete size={20} color="#1d4fc3" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button" onClick={() => toast.info('Em breve...')}>
          Investir agora
        </button>

        <Total>
          <span>Total: </span>
          <strong style={{ fontSize: '18px' }}>Você vai receber, </strong>
          <strong>R$ {total},00 </strong>
          <strong style={{ fontSize: '18px' }}>trocando 0 pontos.</strong>
        </Total>
      </footer>
    </Container>
  );
}

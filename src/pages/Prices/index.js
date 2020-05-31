import React from 'react';
import { toast } from 'react-toastify';

import { MdMonetizationOn } from 'react-icons/md';

import products from '../../server.json';
// import history from '../../services/history';

import { ProductList } from './styles';

export default function Prices() {
  function handleAddProduct(id) {
    toast.info('Em breve...');
    // history.push(`/empresas/${id}`);
  }

  return (
    <ProductList style={{ textAlign: 'center' }}>
      {products.points.map(product => (
        <li key={product.id}>
          <MdMonetizationOn
            size={100}
            color="#1d4fc3"
            style={{ margin: '0 auto' }}
          />
          <span>
            R$ {product.price} - {product.points} pontos
          </span>
          <button type="button" onClick={() => handleAddProduct(product.slug)}>
            <span>Trocar meus pontos</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

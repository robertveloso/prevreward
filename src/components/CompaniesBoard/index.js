import React from 'react';
// import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  CompaniesBoard,
  CompaniesBoardItem,
  CompaniesBoardItemImage,
} from './styles';

export default function CompaniesBoardComponent(props) {
  // const history = useHistory();
  const companies = [
    { id: 1, name: 'livelo', avatar: 'parcerias/livelo.png' },
    { id: 1, name: 'dotz', avatar: 'parcerias/dotz.png' },
    { id: 1, name: 'latam', avatar: 'parcerias/latam.png' },
  ];

  const handleClick = (event, route, itemLink) => {
    toast.info('Em breve...');
    // history.push(route);
  };

  return (
    <CompaniesBoard>
      {companies.map((company, index) => {
        return (
          <CompaniesBoardItem
            onClick={ev =>
              handleClick(ev, `/empresas/${company?.slug}`, 'companies')
            }
            key={company.id}
          >
            <CompaniesBoardItemImage
              src={company.avatar}
              alt={company.name}
              title={company.name}
            />
          </CompaniesBoardItem>
        );
      })}
    </CompaniesBoard>
  );
}

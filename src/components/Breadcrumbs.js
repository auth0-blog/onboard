import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ContentArea from './ContentArea';
import routes from '../services/Routes';

const BreadcrumbsArea = ContentArea.extend`
  margin-bottom: -15px;
`;

const BreadcrumbsList = styled.ul`
  list-style: none;
  font-size: 13px;
  padding-left: 0;
  text-align: center;
  max-width: 770px;
  overflow-x: auto;
  margin: 15px 0 15px 0;
  
  > li {
    display: inline;
    margin-left: 5px;
  }
`;

function Breadcrumbs() {
  return (
    <BreadcrumbsArea>
      <BreadcrumbsList>
        {
          routes.map((route, idx) => (
            <Fragment key={idx}>
              <li>
                <Link to={route.path}>
                  {route.label}
                </Link>
              </li>
              { idx < routes.length - 1 && <li>></li> }
            </Fragment>
          ))
        }
      </BreadcrumbsList>
    </BreadcrumbsArea>
  );
}

export default Breadcrumbs;

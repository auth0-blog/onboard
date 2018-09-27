import React from 'react';
import styled from 'styled-components';
import ContentArea from './ContentArea';

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
        <li>
          <a href="/">
            Introduction
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/authorship">
            Authorship
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/copyright">
            Copyright
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/plagiarism">
            Plagiarism
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/agreement">
            Agreement
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/payment">
            Payment
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/deadline">
            Deadline
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/process">
            Process
          </a>
        </li>
        <li>></li>
        <li>
          <a href="/application">
            Application
          </a>
        </li>
      </BreadcrumbsList>
    </BreadcrumbsArea>
  );
}

export default Breadcrumbs;

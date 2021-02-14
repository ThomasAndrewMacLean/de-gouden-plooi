import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { T } from '.';
import Link from 'next/link';
// import { prefix } from '../utils';
// import { pages } from '../constants/pages';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  console.log(page);
  return (
    <Main>
      <Header>
        <h1>
          <Link href="/" passHref>
            <a>
              <T translationKey="title"></T>
            </a>
          </Link>
        </h1>
      </Header>
      {children}
      <Footer>
        <div className="footerWrap">
          <a href="https://www.facebook.com/degoudenplooi" target="blank">
            facebook
          </a>
          <a href="https://www.instagram.com/degoudenplooi" target="blank">
            instagram
          </a>
          <a href="mailto:info@agizzles.be" target="blank">
            email
          </a>
        </div>
      </Footer>
    </Main>
  );
};

const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 900px;
`;
const Header = styled.header`
  h1 {
    font-family: 'Homemade Apple';
    text-shadow: 0px 1px 3px white;
    font-weight: 100;
    strong {
      font-weight: 100;
      color: var(--colour-highlight);
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  img {
    width: 100%;

    //height: 600px;
    object-fit: cover;
  }
`;

const Footer = styled.footer`
  .footerWrap {
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
  }

  width: 100vw;
  background: var(--background-light);
  left: 0;
  margin-left: calc(450px - 50vw);

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
    .footerWrap {
      padding: 3rem;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image, T } from '.';
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
        <div className="headerWrap">
          <Image imageKey="heroImage"></Image>
        </div>
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
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  nav {
  }
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
    }
  }

  .headerWrap {
    width: 900px;
    margin: auto;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    right: 0;
    z-index: -1;
    height: 600px;
    object-fit: cover;
  }
  width: 100vw;

  left: 0;
  margin-left: calc(450px - 50vw);

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
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

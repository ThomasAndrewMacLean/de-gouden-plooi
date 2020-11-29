import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { T, Image, Layout, SEO } from '../components';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { TranslationsType, ImagesType, SEOType } from '../types';

const IndexPage = ({ translations, pics, seo }: IndexPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="home">
            <Main>
              <SEO seo={seo}></SEO>
              <div className="uitlegWrap">
                <T translationKey="uitleg"></T>
              </div>

              {Array.from(Array(7)).map((_, i) => {
                if (!translations.find((x) => x.id === 'plooi' + i)) return;
                return (
                  <Plooi even={i % 2 === 0} key={i}>
                    <div className="textWrap">
                      <T translationKey={'plooi' + i}></T>
                    </div>
                    <Image
                      style={{ width: '40%', objectFit: 'cover' }}
                      imageKey={'plooi' + i}
                    ></Image>
                  </Plooi>
                );
              })}
              {/* <Image style={{ width: '100%' }} imageKey="hero-image"></Image> */}
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  .uitlegWrap {
    margin-bottom: 7rem;
    padding: 3rem;
    background: var(--background-light);
  }
  line-height: 1.6rem;
  h2,
  h1,
  h3 {
    margin-bottom: 1rem;
  }

  a {
    color: var(--colour-highlight);
  }
`;
const Plooi = styled.div<{ even: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.even ? 'row' : 'row-reverse')};
  margin-bottom: 5rem;
  p + p {
    margin-top: 1.5rem;
  }
  h1,
  h2,
  h3 {
    font-family: 'Homemade Apple';
  }

  .textWrap {
    margin-right: ${(props) => (props.even ? '2rem' : '0')};
    margin-left: ${(props) => (props.even ? '0' : '2rem')};
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 100% !important;
    }
    flex-direction: column;
    .textWrap {
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 2rem;
    }
  }
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return {
    props: {
      translations: data.translations.filter((x) => x.id),
      pics: data.pics.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
    },
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};

export default IndexPage;

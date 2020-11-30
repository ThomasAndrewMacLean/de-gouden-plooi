import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { T, Contact, Layout, SEO, Ateliers, Doodgewoon } from '../components';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
  DoodgewoonContext,
  AtelierContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  DoodgewoonType,
  AterlierType,
} from '../types';

const IndexPage = ({
  translations,
  pics,
  seo,
  doodgewoon,
  ateliers,
}: IndexPageProps) => {
  return (
    <AtelierContext.Provider value={ateliers}>
      <PictureContext.Provider value={pics}>
        <DoodgewoonContext.Provider value={doodgewoon}>
          <SEOContext.Provider value={seo}>
            <TranslationContext.Provider value={translations}>
              <Layout page="home">
                <Main>
                  <SEO seo={seo}></SEO>
                  <div className="uitlegWrap">
                    <h1>
                      <T translationKey="title"></T>
                    </h1>
                    <div className="uitleg">
                      <T translationKey="uitleg"></T>
                    </div>
                  </div>

                  <Ateliers />
                  <Doodgewoon />
                  <Contact />
                </Main>
              </Layout>
            </TranslationContext.Provider>
          </SEOContext.Provider>
        </DoodgewoonContext.Provider>
      </PictureContext.Provider>
    </AtelierContext.Provider>
  );
};

const Main = styled.main`
  h1 {
    font-family: 'Homemade Apple';
    text-shadow: 0px 1px 3px white;
    font-weight: 100;
    strong {
      font-weight: 100;
      color: var(--colour-highlight);
    }
    margin-bottom: 5rem;
  }
  .uitlegWrap {
    margin-bottom: 7rem;
    padding: 3rem;
    background: #ffffffd9;

    .uitleg {
      width: 60%;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      text-align: right;
    }
    @media only screen and (max-width: 800px) {
      .uitleg {
        width: 100%;
        text-align: left;
      }
    }
  }
  line-height: 1.6rem;
  h2,
  h3,
  h4 {
    margin-bottom: 1rem;
  }

  a {
    color: var(--colour-highlight);
  }
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return {
    props: {
      translations: data.translations.filter((x) => x.id),
      pics: data.pics.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
      doodgewoon: data.Doodgewoon.filter((x) => x.Titel),
      ateliers: data.Ateliers.filter((x) => x.Titel),
    },
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  doodgewoon: DoodgewoonType[];
  ateliers: AterlierType[];
};

export default IndexPage;

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import {
  T,
  Contact,
  Layout,
  SEO,
  Ateliers,
  Doodgewoon,
  Image,
} from '../components';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
  DoodgewoonContext,
  AtelierContext,
} from '../utils/contexts';
import { getDataFromAirtable, getImageUrl } from '../utils';
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
  const backgroundUrl = getImageUrl(pics, 'heroImage', true);
  return (
    <AtelierContext.Provider value={ateliers}>
      <PictureContext.Provider value={pics}>
        <DoodgewoonContext.Provider value={doodgewoon}>
          <SEOContext.Provider value={seo}>
            <TranslationContext.Provider value={translations}>
              <Layout page="home">
                <Main backgroundUrl={backgroundUrl}>
                  <SEO seo={seo}></SEO>
                  <div className="uitlegWrap">
                    <div className="uitleg border">
                      <T translationKey="uitleg"></T>
                    </div>
                  </div>

                  <Image
                    imageKey="headerImage"
                    style={{
                      width: '100%',
                      marginBottom: '5rem',
                      objectFit: 'cover',
                      height: 'auto',
                    }}
                  ></Image>
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

const Main = styled.main<{ backgroundUrl: string }>`
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
    margin-bottom: 5rem;

    .uitleg {
      position: relative;
      background: white;
      width: 60%;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      /* transform: translateY(-170px); */
    }
    .uitleg.border::before {
      content: '';
      width: 100%;
      position: absolute;
      background: ${(props) =>
        `url(${props.backgroundUrl}) no-repeat center center`};
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      height: 100%;
      left: -40%;
      z-index: -1;
      top: -50px;
    }
    @media only screen and (max-width: 800px) {
      .uitleg {
        width: 100%;
        text-align: left;
      }
      .uitleg.border::before {
        display: none;
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

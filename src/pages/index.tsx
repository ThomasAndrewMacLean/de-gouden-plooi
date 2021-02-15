import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import {
  T,
  Contact,
  Layout,
  SEO,
  Ateliers,
  Slideshow,
  Wie,
  Partners,
} from '../components';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
  AtelierContext,
  WieContext,
  PartnerContext,
} from '../utils/contexts';
import { getDataFromAirtable, getImageUrl } from '../utils';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  AterlierType,
  PartnerType,
  WieType,
} from '../types';

const IndexPage = ({
  translations,
  pics,
  seo,
  ateliers,
  wie,
  partners,
}: IndexPageProps) => {
  const backgroundUrl = getImageUrl(pics, 'heroImage', true);
  return (
    <WieContext.Provider value={wie}>
      <PartnerContext.Provider value={partners}>
        <AtelierContext.Provider value={ateliers}>
          <PictureContext.Provider value={pics}>
            <SEOContext.Provider value={seo}>
              <TranslationContext.Provider value={translations}>
                <Layout seo={seo} page="home">
                  <Main backgroundUrl={backgroundUrl}>
                    <SEO page="Home" seo={seo}></SEO>
                    <div className="uitlegWrap">
                      <div className="uitleg border">
                        <T translationKey="uitleg"></T>
                      </div>
                    </div>
                    <Slideshow images={pics}></Slideshow>
                    {/* <Image
                      imageKey="headerImage"
                      style={{
                        width: '100%',
                        marginBottom: '5rem',
                        objectFit: 'cover',
                        height: 'auto',
                      }}
                    ></Image> */}
                    <Ateliers />
                    <Contact />
                    <Wie />
                    <Partners></Partners>
                  </Main>
                </Layout>
              </TranslationContext.Provider>
            </SEOContext.Provider>
          </PictureContext.Provider>
        </AtelierContext.Provider>
      </PartnerContext.Provider>
    </WieContext.Provider>
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
      ateliers: data.Ateliers.filter((x) => x.Titel),
      partners: data.Partner.filter((x) => x.Link),
      wie: data.Wie.filter((x) => x.Naam),
    },
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  ateliers: AterlierType[];
  partners: PartnerType[];
  wie: WieType[];
};

export default IndexPage;

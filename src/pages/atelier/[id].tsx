import React, { useContext } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Layout, T, SEO } from '../../components';

import { getDataFromAirtable } from '../../utils';
import {
  AterlierType,
  TranslationsType,
  SEOType,
  ImagesType,
} from '../../types';
import {
  TranslationContext,
  SEOContext,
  PictureContext,
} from '../../utils/contexts';
import marked from 'marked';

const AtelierPage = ({
  postData,
  translations,
  seo,
  pics,
}: AtelierPageProps) => {
  const translationsFromContext = useContext(TranslationContext) || [];

  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout seo={seo} page={postData.Titel}>
            <Main>
              <SEO seo={seo} page={postData.Titel}></SEO>

              <div className="wrapper">
                <div className="textWrap">
                  <h1>{postData.Titel}</h1>

                  <span className="badge">{postData.Type}</span>
                  <div className="mb-1">
                    <span>
                      {new Date(postData.Datum).toLocaleDateString('nl-BE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}{' '}
                      -{' '}
                      {new Date(postData.Datum).toLocaleTimeString('nl-BE', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                    <span className="prijs">{postData.Prijs}</span>
                  </div>

                  <span
                    dangerouslySetInnerHTML={{
                      __html: marked(postData.Omschrijving),
                    }}
                  ></span>
                </div>
                <img
                  src={postData.Afbeelding[0].url}
                  style={{
                    width: '50%',
                    marginBottom: '5rem',
                    objectFit: 'cover',
                    height: 'auto',
                  }}
                ></img>
              </div>

              <a
                className="btn mb-4"
                href={
                  'mailto:info@agizzles.be?subject=Registratie: ' +
                  postData.Titel +
                  '&body=' +
                  translations.find((x) => x.id === 'bodyMail')?.[
                    'NL zonder opmaak'
                  ]
                }
              >
                <T translationKey="registreer" />
              </a>
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  .prijs {
    font-weight: bolder;
    margin-left: 2rem;
  }
  .wrapper {
    display: flex;
  }
  .textWrap {
    padding-right: 1rem;
    h1 {
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 800px) {
    .wrapper {
      flex-direction: column;
    }
    .textWrap {
      padding-right: 0rem;
      padding-bottom: 2rem;
    }
    img {
      width: 100% !important;
    }
  }
`;

export async function getStaticPaths() {
  // Return a list of possible value for id
  const data = await getDataFromAirtable();
  const paths = data.Ateliers.filter((x) => x.Titel).map((x) => {
    return { params: { id: slugify(x.Titel) } };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // Fetch necessary data for the blog post using params.id
  const data = await getDataFromAirtable();
  const postData = data.Ateliers.find((x) => slugify(x.Titel) === params.id);
  return {
    props: {
      postData,
      pics: data.pics.filter((x) => x.id),

      translations: data.translations.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
    },
  };
}
type AtelierPageProps = {
  postData: AterlierType;
  translations: TranslationsType[];
  seo: SEOType[];
  pics: ImagesType[];
};

export default AtelierPage;

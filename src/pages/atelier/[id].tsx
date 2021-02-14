import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Layout } from '../../components';

import { getDataFromAirtable } from '../../utils';
import { AterlierType } from '../../types';

const AtelierPage = ({ postData }: AtelierPageProps) => {
  return (
    <Layout page="home">
      <Main>
        <h1>{postData.Titel}</h1>
        <p>{postData.Omschrijving}</p>
        {postData.Type}
      </Main>
    </Layout>
  );
};

const Main = styled.main``;

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
    },
  };
}
type AtelierPageProps = {
  postData: AterlierType;
};

export default AtelierPage;

import {
  SEOType,
  TranslationsType,
  ImagesType,
  AterlierType,
  PartnerType,
  WieType,
} from '../types';

export const add = (a: number, b: number): number => {
  return a + b;
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? process.env.ASSET_PREFIX : '';

export const getImageUrl = (context: any, id: string, full: boolean) => {
  const foundPic = context.find((p: any) => p.id == id);

  if (!foundPic) {
    console.error('Picture not found!', id);
  }
  return full ? foundPic?.pic[0].url : foundPic?.pic[0].thumbnails.large.url;
};

export const getImageHeight = (context: any, id: string) => {
  const foundPic = context.find((p: any) => p.id == id);

  if (!foundPic) {
    console.error('Picture not found!', id);
  }
  return foundPic?.pic[0].thumbnails.large.height;
};
export const getImageWidth = (context: any, id: string) => {
  const foundPic = context.find((p: any) => p.id == id);

  if (!foundPic) {
    console.error('Picture not found!', id);
  }
  return foundPic?.pic[0].thumbnails.large.width;
};

export const getImageFileName = (context: any, id: string) => {
  const foundPic = context.find((p: any) => p.id == id);

  if (!foundPic) {
    console.error('Picture not found!', id);
  }
  return foundPic?.pic[0].filename.split('.')[0];
};

export const getSEO = (context: SEOType[], id: string) => {
  const foundSEO = context.find((p) => p.id == id);

  if (!foundSEO) {
    console.error('SEO not found!', id);
    return '';
  }

  if (!foundSEO.text && !foundSEO.pic) {
    console.error('SEO not found!', id);
    return '';
  }
  return foundSEO.text ? foundSEO.text : foundSEO.pic[0].url;
};

export const getDataFromAirtable = async (): Promise<{
  seo: SEOType[];
  translations: TranslationsType[];
  pics: ImagesType[];
  Partner: PartnerType[];
  Wie: WieType[];
  Ateliers: AterlierType[];
}> => {
  const url =
    'https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable';
  const dataFromAirtableJson = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      airtableApp: process.env.AIRTABLE_APP,
      extraCols: ['Ateliers', 'Partner', 'Wie'],
    }),
  });
  const dataFromAirtable = await dataFromAirtableJson.json();
  return {
    ...dataFromAirtable,
  };
};

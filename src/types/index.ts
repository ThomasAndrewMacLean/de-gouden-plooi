export type TranslationsType = {
  id: string;
  NL?: string;
  'NL zonder opmaak'?: string;
};

export type ImagesType = {
  id: string;
  pic: {
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
};

export type SEOType = {
  id: string;
  text?: string;
  pic: {
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
};

export type DoodgewoonType = {
  Foto:{
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
  Titel: string;
  link: string;
  Omschrijving: string;
}

export type AterlierType ={

  Titel: string;
  Omschrijving: string;
  Type: string;
}
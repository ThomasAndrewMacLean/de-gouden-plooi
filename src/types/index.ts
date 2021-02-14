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

export type AterlierType = {
  Titel: string;
  Omschrijving: string;
  Type: string;
  Kleur: string;
  CopywriteLink: string;
  Focus: boolean;
  Prijs: string;
  Datum: Date;
  Afbeelding: {
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
};

export type WieType = {
  Naam: string;
  Info: string;
  Email: string;
  Foto: {
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
};

export type PartnerType = {
  Link: string;
  Naam: string;
  Logo: {
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
};

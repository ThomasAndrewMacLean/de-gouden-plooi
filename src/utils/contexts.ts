import { createContext } from 'react';
import {
  WieType,
  PartnerType,
  TranslationsType,
  SEOType,
  ImagesType,
  AterlierType,
} from '../types';

export const TranslationContext = createContext<TranslationsType[]>([]);
export const PictureContext = createContext<ImagesType[]>([]);
export const SEOContext = createContext<SEOType[]>([]);
export const AtelierContext = createContext<AterlierType[]>([]);
export const WieContext = createContext<WieType[]>([]);
export const PartnerContext = createContext<PartnerType[]>([]);

import { createContext } from 'react';
import { TranslationsType, SEOType, ImagesType, DoodgewoonType, AterlierType } from '../types';

export const TranslationContext = createContext<TranslationsType[]>([]);
export const PictureContext = createContext<ImagesType[]>([]);
export const SEOContext = createContext<SEOType[]>([]);
export const DoodgewoonContext = createContext<DoodgewoonType[]>([]);
export const AtelierContext = createContext<AterlierType[]>([]);

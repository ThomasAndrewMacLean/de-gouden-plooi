import React, { useContext } from 'react';
import * as Styles from './Ateliers.styles';
import Link from 'next/link';
import { AtelierContext, TranslationContext } from '../utils/contexts';
import { T } from '.';
import slugify from 'slugify';

type PropsType = {};
const Ateliers = ({}: PropsType) => {
  const ateliersFromContext = useContext(AtelierContext) || [];
  const translationsFromContext = useContext(TranslationContext) || [];

  return (
    <>
      <h2>
        <T translationKey="ateliersHeader"></T>
      </h2>

      <Styles.AteliersWrapper>
        {ateliersFromContext.map((x, i) => {
          return (
            <Styles.Atelier className="border" key={i}>
              <div className="textwrap">
                <h4>{x.Type}</h4>
                <h2>{x.Titel}</h2>

                <p>{x.Omschrijving}</p>
              </div>
              <Link passHref href={'/atelier/' + slugify(x.Titel)}>
                <a>
                  <T translationKey="meerInfo"></T>
                </a>
              </Link>
            </Styles.Atelier>
          );
        })}
      </Styles.AteliersWrapper>
    </>
  );
};

export default Ateliers;

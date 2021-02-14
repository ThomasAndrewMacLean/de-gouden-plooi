import React, { useContext } from 'react';
import * as Styles from './Ateliers.styles';
import Link from 'next/link';
import { AtelierContext, TranslationContext } from '../utils/contexts';
import { T } from '.';
import slugify from 'slugify';

type PropsType = {};
const Ateliers = ({}: PropsType) => {
  const ateliersFromContext = useContext(AtelierContext) || [];

  return (
    <>
      <h2>
        <T translationKey="ateliersHeader"></T>
      </h2>

      <Styles.AteliersWrapper>
        {ateliersFromContext
          .filter((x) => !x.Focus)
          .map((x, i) => {
            return (
              <Styles.Atelier kleur={x.Kleur} className="border" key={i}>
                <div className="textwrap">
                  <div className="datawrap">
                    <h4>{x.Type}</h4>
                    <h4>
                      {new Date(x.Datum).toLocaleDateString('nl-BE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </h4>
                  </div>
                  <h2>{x.Titel}</h2>

                  <p>{x.Omschrijving}</p>
                </div>
                <Link passHref href={'/atelier/' + slugify(x.Titel)}>
                  <a className="btn">
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

import React, { useContext } from 'react';
import * as Styles from './Ateliers.styles';
import Link from 'next/link';
import { AtelierContext } from '../utils/contexts';
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
        {ateliersFromContext.map((x, i) => {
          return (
            <Styles.Atelier kleur={x.Kleur} className="border" key={i}>
              <div className="textwrap">
                <div className="datawrap">
                  <span className="info">{x.Type}</span>
                  <span className="info">
                    {new Date(x.Datum).toLocaleDateString('nl-BE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
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

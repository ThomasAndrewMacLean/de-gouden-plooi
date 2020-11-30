import React, { useContext } from 'react';
import * as Styles from './Ateliers.styles';
import { AtelierContext } from '../utils/contexts';
import { T } from '.';

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
            <Styles.Atelier key={i}>
              <h4>{x.Type}</h4>
              <h2>{x.Titel}</h2>

              <p>{x.Omschrijving}</p>
            </Styles.Atelier>
          );
        })}
      </Styles.AteliersWrapper>
    </>
  );
};

export default Ateliers;

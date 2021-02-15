import React, { useContext } from 'react';
import { PartnerContext } from '../utils/contexts';
import * as Styles from './Partners.styles';
//import { T } from './';

type PropsType = {};
const Partners = ({}: PropsType) => {
  const partnersFromContext = useContext(PartnerContext) || [];

  if (partnersFromContext.length === 0) return null;
  return (
    <Styles.PartnersWrapper>
      {/* <h2>
        <T translationKey="partnersHeader"></T>
      </h2> */}

      <ul>
        {partnersFromContext.map((x, i) => {
          return (
            <li key={i}>
              <a href={x.Link} target="_blank">
                <img src={x.Logo[0].url}></img>
                <span>{x.Naam}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Styles.PartnersWrapper>
  );
};

export default Partners;

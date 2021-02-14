import React, { useContext } from 'react';
import * as Styles from './Wie.styles';
import { T } from './';
import { WieContext } from '../utils/contexts';
import marked from 'marked';
type PropsType = {};
const Wie = ({}: PropsType) => {
  const wieFromContext = useContext(WieContext) || [];

  if (wieFromContext.length === 0) return null;

  return (
    <Styles.WieWrapper>
      <h2>
        <T translationKey="wieHeader"></T>
      </h2>
      <ul>
        {wieFromContext.map((x, i) => {
          return (
            <li className="border" key={i}>
              <h3>{x.Naam}</h3>
              <img src={x.Foto[0].url} alt="" />
              <span dangerouslySetInnerHTML={{ __html: marked(x.Info) }}></span>
            </li>
          );
        })}
      </ul>
    </Styles.WieWrapper>
  );
};

export default Wie;

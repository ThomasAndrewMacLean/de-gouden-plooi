import React, { useContext, useState } from 'react';
import * as Styles from './Doodgewoon.styles';
import { DoodgewoonContext } from '../utils/contexts';
import { T } from '.';

type PropsType = {};
const Doodgewoon = ({}: PropsType) => {
  const [page, setPage] = useState(0);
  const doodgewoonFromContext = useContext(DoodgewoonContext) || [];
  const goLeft = () => {
    if (page === 0) {
      setPage(doodgewoonFromContext.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  const goRight = () => {
    if (page === doodgewoonFromContext.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  return (
    <Styles.DoodgewoonWrapper>
      <h2>
        <T translationKey="doodgewoonHeader" />
      </h2>
      <div className="imgWrap">
        <img src={doodgewoonFromContext[page].Foto[0].url}></img>
        <div className="buttonWrap">
          <button className="navigate-btn" onClick={goLeft}>
            &#8592;
          </button>
          <button className="navigate-btn" onClick={goRight}>
            &#8594;
          </button>
        </div>
      </div>
      <div className="textWrap border">
        <h4>{doodgewoonFromContext[page].Titel}</h4>
        <p>{doodgewoonFromContext[page].Omschrijving}</p>

        <a href={doodgewoonFromContext[page].link} target="_blank">
          <sub>bron</sub>
        </a>

        <div className="push-right">
          <button className="btn" onClick={goRight}>
            <T translationKey="volgende"></T>
          </button>
        </div>
      </div>
    </Styles.DoodgewoonWrapper>
  );
};

export default Doodgewoon;

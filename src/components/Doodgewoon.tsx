import React, { useContext } from 'react';
import * as Styles from './Doodgewoon.styles';
import { AtelierContext } from '../utils/contexts';
import { T } from '.';
import slugify from 'slugify';
import Link from 'next/link';

type PropsType = {};
const Doodgewoon = ({}: PropsType) => {
  const doodgewoonFromContext = useContext(AtelierContext) || [];
  const focus = doodgewoonFromContext.find((x) => x.Focus);

  return focus ? (
    <Styles.DoodgewoonWrapper>
      <h2>
        <T translationKey="doodgewoonHeader" />
      </h2>
      <div className="imgWrap">
        <img src={focus.Afbeelding[0].url}></img>
      </div>
      <div className="textWrap border">
        <h4>{focus.Titel}</h4>
        <p>{focus.Omschrijving}</p>

        <a href={focus.CopywriteLink} target="_blank">
          <sub>bron</sub>
        </a>
        <div className="push-right">
          <Link passHref href={'/atelier/' + slugify(focus.Titel)}>
            <a className="btn">
              <T translationKey="meerInfo"></T>
            </a>
          </Link>
        </div>
      </div>
    </Styles.DoodgewoonWrapper>
  ) : null;
};

export default Doodgewoon;

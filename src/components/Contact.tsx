import React from 'react';
import { Image, T } from '.';
import * as Styles from './Contact.styles';

type PropsType = {};
const Contact = ({}: PropsType) => {
  return (
    <Styles.ContactWrapper>
      <Image imageKey="contactImage"></Image>

      <div className="textWrap">
        <T translationKey="contactText" />
      </div>
    </Styles.ContactWrapper>
  );
};

export default Contact;

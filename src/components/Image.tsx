import React, { useContext } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import {
  getImageUrl,
  getImageFileName,
  getImageHeight,
  getImageWidth,
} from '../utils';

const Image = ({ imageKey, style }: { imageKey: string; style?: object }) => {
  const pics = useContext(PictureContext);

  return (
    <img
      loading="lazy"
      style={style && { ...style }}
      height={getImageHeight(pics, imageKey)}
      width={getImageWidth(pics, imageKey)}
      src={getImageUrl(pics, imageKey, true)}
      alt={getImageFileName(pics, imageKey)}
    ></img>
  );
};

Image.propTypes = {
  imageKey: PropTypes.string.isRequired,
};

export default Image;

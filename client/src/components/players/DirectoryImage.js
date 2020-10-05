import React from 'react';
import { seriesSymbols } from '../SeriesSymbols';

function DirectoryImage(props) {
  return seriesSymbols.map(({ src, characters }) => {
    if(characters.includes(props.main)) {
      return <img width="100%" src={src} alt="series symbol" />
    };
  });
};

export default DirectoryImage;
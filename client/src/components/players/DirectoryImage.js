import React from 'react';
import seriesSymbols from '../SeriesSymbols';

function DirectoryImage(props) {
  return seriesSymbols.map(({ src, name }) => {
    if(name === props.main) {
      return <img width="100%" src={src} name={name} alt="series symbol" />
    };
  });
};

export default DirectoryImage;
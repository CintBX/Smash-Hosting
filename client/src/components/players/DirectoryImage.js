import React from 'react';
import seriesSymbols from '../SeriesSymbols';

function DirectoryImage(props) {
  return seriesSymbols.map(({ id, src, name }) => {
    if(name === props.name) {
      return <img width="100%" id={id} src={src} name={name} alt="series symbol" />
    };
  });
};

export default DirectoryImage;
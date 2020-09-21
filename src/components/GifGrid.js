import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=ziEV2A2BvcXCc1VZ4lqDci1W1Kb5CTY2';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>

      {images.map((image) => (
        <GifGridItem key={image.id} {...image} />
      ))}
    </>
  );
};

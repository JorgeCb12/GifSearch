// Componente que muestra una cuadrícula de GIFs basada en una categoría
// import { useState } from 'react';
// import { useEffect, useState } from 'react';
// import getGifs from '../helpers/getGifs'
import useFetchGifs from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GitGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="category-container">
      <h3 className="category-title">{category}</h3>
      
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando GIFs...</p>
        </div>
      ) : (
        <div className="gif-grid">
          {images.map(img => (
            <GifItem 
              key={img.id}
              {...img}
            />
          ))}
        </div>
      )}
    </div>
  );
}

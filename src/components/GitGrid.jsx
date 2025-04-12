// Componente que muestra una cuadrícula de GIFs basada en una categoría
// import { useState } from 'react';
import { useEffect, useState } from 'react';
import GifItem from './GifItem';
import getGifs from '../helpers/getGifs'

const GitGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }
  // Llamada a la función que obtiene los GIFs de la API
  useEffect(() => {
    getImages();

  }, [])

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      <div className='card-grid'>
        {images.map(( image , index) => (
          <GifItem
            key={image.d}
            index={index}
            {...image}
             />

        ))}
      </div>
    </>

  )
}
export default GitGrid

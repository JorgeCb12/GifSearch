import {useState , useEffect} from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }
    // Llamada a la función que obtiene los GIFs de la API
    useEffect(() => {
        getImages();

    }, [])
    return {
        images,
        isLoading
    }
}
export default useFetchGifs


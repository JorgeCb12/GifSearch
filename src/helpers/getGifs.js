// Función que obtiene GIFs de la API de Giphy
const getGifs = async ( category ) => {
    // Construcción de la URL con la API key y la categoría
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9GSzpF6xR4rm3umukygbDXs14jEJ4K7u&q=${category}&limit=10`;
    
    // Realización de la petición HTTP
    const resp = await fetch(url);
    const { data } = await resp.json();
 
    // Transformación de los datos para obtener solo la información necesaria
    const gifs = data.map(img =>
    ({
        id: img.id,
        title: img.title.toUpperCase(),
        url: img.images.downsized_medium.url
    }))
    return gifs
     
     
}
export default getGifs
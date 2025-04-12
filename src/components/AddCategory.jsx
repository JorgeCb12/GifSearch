// Componente para agregar nuevas categorías de búsqueda
import { useState } from 'react'

// Recibe la función onNewCategory del componente padre para agregar nuevas categorías
const AddCategory = ({onNewCategory}) => {
  // Estado para controlar el valor del input
  const [inputValue, setInputValue] = useState('');

  // Maneja los cambios en el input, actualizando el estado
  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  // Maneja el envío del formulario:
  // - Previene el comportamiento por defecto
  // - Valida que el input tenga más de 1 carácter
  // - Llama a onNewCategory con el valor del input
  // - Limpia el input después de enviar
  const onsubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length <=1) return;
      onNewCategory(inputValue)
      setInputValue('')
  }

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange} />
    </form>
  )
}

export default AddCategory

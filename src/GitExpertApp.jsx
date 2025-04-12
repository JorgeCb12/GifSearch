// import React from 'react';
import { useState } from 'react';
import AddCategory from './components/AddCategory'
import GitGrid from './components/GitGrid';

// Componente principal de la aplicación
const GitExpertApp = () => {
  // Estado inicial con una categoría por defecto
  const [categories, setCategories] = useState(['Dragon ball']);

  // Función para agregar nuevas categorías:
  // - Evita duplicados
  // - Agrega la nueva categoría al principio del array
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GitExpertApp</h1>
      
      {/* Componente para agregar nuevas categorías */}
      <AddCategory onNewCategory={onAddCategory} />
      
      {/* Renderiza una cuadrícula de GIFs para cada categoría */}
      {categories.map(category => (
        <GitGrid
          key={category}
          category={category}
        />
      ))}
    </>
  );
}

export default GitExpertApp;

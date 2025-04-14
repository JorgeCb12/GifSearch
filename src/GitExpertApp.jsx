// import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';
import './styles.css';

// Componente principal de la aplicación
const GitExpertApp = () => {
  // Estado inicial con una categoría por defecto
  const [categories, setCategories] = useState(['Dragon ball' , 'Naruto', 'One piece']);

  // Función para agregar nuevas categorías:
  // - Evita duplicados
  // - Agrega la nueva categoría al principio del array
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">GIF Explorer</h1>
        <p className="app-subtitle">Buscador de GIFs animados con la API de Giphy</p>
      </header>
      
      <main className="app-main">
        <AddCategory onNewCategory={onAddCategory} />
        
        <div className="grid-container">
          {categories.map(category => (
            <GitGrid
              key={category}
              category={category}
            />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>Desarrollado con ❤️ Por JorgeCb</p>
      </footer>
    </div>
  );
}

export default GitExpertApp;

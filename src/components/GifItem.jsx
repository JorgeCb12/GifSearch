import { useState } from 'react';

export const GifItem = ({ title, url }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="gif-card" onClick={() => setShowModal(true)}>
        <div className="gif-image-container">
          <img 
            src={url} 
            alt={title}
            className="gif-image"
            loading="lazy"
          />
        </div>
        <div className="gif-info">
          <p className="gif-title">{title}</p>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <img src={url} alt={title} className="modal-image" />
            <h3 className="modal-title">{title}</h3>
          </div>
        </div>
      )}
    </>
  );
}



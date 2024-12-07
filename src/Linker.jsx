import './styles/linker.css';
import CopyIcon from './icons/CopyIcon';
import { useState } from 'react';

function Linker({ children, link }) {
  const [isClick, setIsClick] = useState(false);
  const [copyError, setCopyError] = useState(null);

  const viewLink = () => {
    setIsClick(true);
  };

  const copy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopyError(null);
      })
      .catch(err => {
        setCopyError('No se pudo copiar al portapapeles. Intenta nuevamente.');
      });
    setIsClick(false);
  };

  return (
    <>
      {!isClick ? (
        <button onClick={viewLink} className="link-button">
          {children}
        </button>
      ) : (
        <div className="container-copy-links">
          <p>{link}</p>
          <button 
            className="button-copy-link" 
            onClick={copy}
            aria-label="Copiar enlace al portapapeles"
          >
            <CopyIcon />
          </button>
          {copyError && <p className="error-message">{copyError}</p>}
        </div>
      )}
    </>
  );
}

export default Linker;
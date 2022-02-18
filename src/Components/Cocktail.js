import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Cocktail = ({ image, id, name, glass, type }) => {
  // PARAMS
  const { theme } = useGlobalContext();

  // HOOKS
  const navigate = useNavigate();

  return (
    <div className='cocktail-container'>
      <div
        className={theme === 'dark' ? 'img-wrapper dark-mode' : 'img-wrapper'}
      >
        <img src={image} alt={name} />
      </div>
      <div className='more-info'>
        <h2 className='name'>{name}</h2>
        <p className='glass'>{glass}</p>
        <p className='type'>{type}</p>
        <button
          className='details-btn'
          onClick={() => navigate(`/cocktail/${id}`)}
        >
          details
        </button>
      </div>
    </div>
  );
};

export default Cocktail;

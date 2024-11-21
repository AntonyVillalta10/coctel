import React from 'react';
import { Link } from 'react-router-dom';

const CocktailCard = ({ cocktail }) => {
    return (
        <div className="cocktail-card">
            <img src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
            <Link to={`/cocktail/${cocktail.idDrink}`}>Ver detalles</Link>
        </div>
    );
};

export default CocktailCard;

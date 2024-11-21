import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailCard from '../components/CocktailCard';

const HomePage = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then(response => setCocktails(response.data.drinks))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="cocktail-list">
            {cocktails.map(cocktail => (
                <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))}
        </div>
    );
};

export default HomePage;

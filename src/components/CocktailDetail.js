import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CocktailDetail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => setCocktail(response.data.drinks[0]))
            .catch(error => console.error(error));
    }, [id]);

    if (!cocktail) return <p>Cargando...</p>;

    return (
        <div>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p><strong>Categoría:</strong> {cocktail.strCategory}</p>
            <p><strong>Tipo de vaso:</strong> {cocktail.strGlass}</p>
            <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
            {/* Muestra ingredientes */}
            <ul>
                {[...Array(15)].map((_, i) => {
                    const ingredient = cocktail[`strIngredient${i + 1}`];
                    const measure = cocktail[`strMeasure${i + 1}`];
                    return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
                })}
            </ul>
        </div>
    );
};

export default CocktailDetail;

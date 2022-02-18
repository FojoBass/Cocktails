import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Loading from '../Components/Loading';

// PARAMS
const idUrl = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktailPage = () => {
  // HOOKS
  const { theme, setEmpty } = useGlobalContext();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(null);
  // useEffect for fetch
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!item) setEmpty(true);
    else setEmpty(false);
  }, []);
  // FUNCTION
  // fetch function
  const getData = async () => {
    let isCancel = false;
    setIsLoading(true);
    setEmpty(true);
    try {
      const res = await fetch(idUrl + id);
      const { drinks } = await res.json();
      const modDrinks = drinks
        ? drinks.map((drink) => {
            const {
              idDrink: id,
              strDrink: name,
              strCategory: category,
              strAlcoholic: type,
              strGlass: glass,
              strInstructions: instructions,
              strDrinkThumb: image,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = drink;
            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            ];
            return {
              id,
              name,
              category,
              type,
              glass,
              instructions,
              image,
              ingredients,
            };
          })
        : [null];
      if (!isCancel) {
        setItem(modDrinks[0]);
        setIsLoading(false);
        setEmpty(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }

    return () => {
      isCancel = true;
    };
  };

  if (isLoading) return <Loading />;

  if (!item) {
    return (
      <section id='single-cocktail'>
        <h1 className='section-heading'>cocktail not found</h1>
      </section>
    );
  }

  const { image, name, type, category, instructions, ingredients, glass } =
    item;

  return (
    <section id='single-cocktail'>
      <Link to='/'>back home</Link>

      <article className='center'>
        <h2>name</h2>
        <div className='item-container'>
          <div
            className={
              theme === 'dark' ? 'img-wrapper dark-mode' : 'img-wrapper'
            }
          >
            <img src={image} alt='' />
          </div>
          <div className='more-info'>
            <p className='i-name'>
              <span className='title'>name: </span> <span>{name}</span>
            </p>

            <p className='i-category'>
              <span className='title'>category: </span> <span>{category}</span>
            </p>

            <p className='i-info'>
              <span className='title'>info: </span> <span>{type}</span>
            </p>

            <p className='i-glass'>
              <span className='title'>glass: </span> <span>{glass}</span>
            </p>

            <p className='i-instructions'>
              <span className='title'>instructions: </span>
              <span>{instructions}</span>
            </p>

            <p className='ingredients'>
              <span className='title'>ingredients: </span>
              <span className='span-con'>
                {ingredients
                  ? ingredients.map((ingre, ind) => {
                      if (ingre)
                        return (
                          <span className='no-style' key={ind}>
                            {ingre}
                          </span>
                        );
                    })
                  : ''}
              </span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleCocktailPage;

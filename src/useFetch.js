import React, { useEffect, useState } from 'react';
import { useGlobalContext } from './context';

export const useFetch = (url) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCancel = false;
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const { drinks } = await response.json();
        const modDrinks = drinks
          ? drinks.map((drink) => {
              const {
                idDrink: id,
                strDrink: name,
                strAlcoholic: type,
                strGlass: glass,
                strDrinkThumb: image,
              } = drink;
              return {
                id,
                name,
                type,
                glass,
                image,
              };
            })
          : [];
        if (!isCancel) {
          setItems(modDrinks);
          setIsLoading(false);
        }
      } catch (e) {
        console.log(e.message);
        setIsLoading(false);
      }
    };
    getData();

    return () => {
      isCancel = true;
    };
  }, [url]);

  return { items, isLoading };
};

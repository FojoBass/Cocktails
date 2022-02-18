import React, { useEffect } from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';

function Cocktails() {
  const { items, setEmpty, empty } = useGlobalContext();

  useEffect(() => {
    if (!items.length) setEmpty(true);
    else setEmpty(false);
  }, [empty]);

  if (!items.length) {
    return (
      <section id='cocktails'>
        <h1 className='section-heading'>
          no cocktail matched your search criteria
        </h1>
      </section>
    );
  }

  return (
    <section id='cocktails'>
      <article className='center'>
        <h1 className='section-heading'>cocktails</h1>

        <div className='cocktails-container'>
          {items.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </div>
      </article>
    </section>
  );
}

export default Cocktails;

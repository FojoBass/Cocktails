import React from 'react';
import errImage from '../error.jpg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Error() {
  const { setIsError, theme } = useGlobalContext();

  React.useEffect(() => {
    setIsError(true);
  }, []);
  return (
    <section id='error'>
      <div
        className={theme === 'dark' ? 'img-wrapper dark-mode' : 'img-wrapper'}
      >
        <img src={errImage} alt='error' />
      </div>

      <Link to='/'>Back Home</Link>
    </section>
  );
}

export default Error;

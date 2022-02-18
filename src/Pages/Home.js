import React from 'react';
import Search from '../Components/Search';
import Cocktails from '../Components/Cocktails';
import Loading from '../Components/Loading';
import { useGlobalContext } from '../context';

const Home = () => {
  const { isLoading, setIsError } = useGlobalContext();

  React.useEffect(() => {
    setIsError(false);
  }, []);

  return (
    <section id='home'>
      <Search />
      {isLoading ? <Loading /> : <Cocktails />}
    </section>
  );
};

export default Home;

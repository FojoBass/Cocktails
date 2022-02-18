import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './context';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCocktailPage from './Pages/SingleCocktail';
import Error from './Pages/Error';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCocktailPage />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

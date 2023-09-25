import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Header from './components/Header';
import './App.css';
import { useContext } from 'react';
import { Themecontext } from './context/Themecontext';
import Footer from './components/Footer';


function App() {

  const {mode} = useContext(Themecontext)
  return (
    <div className={mode}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

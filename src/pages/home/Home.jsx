import { useContext } from 'react';
import Hero from '../../components/Hero';
import RecipeList from '../../components/RecipeList';
import { Themecontext } from '../../context/Themecontext';
import Usefetch from '../../hooks/Usefetch';
import './Home.css';

function Home() {
  const { data, loading, error } = Usefetch('http://localhost:3000/recipes');
  const { changeColor, mode } = useContext(Themecontext);
  const themeColor = ["#58249c", "#249c6b", "#b70333"];
  return (
   <>
      <Hero/>
      <div className='ThemeSelectors'>
        <div className="theme-buttons">
        {themeColor.map((theme) => {
          return (
            <div key={theme}onClick={() => changeColor(theme)}style={{ backgroundColor: theme }}></div>
          );
        })}
        </div>
      </div>
      {error && <div className={`text-center mb-2 mt-5 error fw-semibold ${mode}`}>{error}</div>}
      {loading && <div className={`text-center mb-5 error fw-semibold ${mode} `}>Loading...</div>}
      {data && <RecipeList recipe={data}/>}
    </>
  );
}

export default Home;

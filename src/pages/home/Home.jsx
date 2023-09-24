import { useContext } from 'react';
import Hero from '../../components/Hero';
import RecipeList from '../../components/RecipeList';
import { Themecontext } from '../../context/Themecontext';
import Usefetch from '../../hooks/Usefetch';
import './Home.css';

function Home() {
  const { data, loading, error } = Usefetch('http://localhost:3000/recipes');
  const { changeColor } = useContext(Themecontext);
  const themeColor = ["#58249c", "#249c6b", "#b70333"];
  return (
   <>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
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
      {data && <RecipeList recipe={data}/>}
    </>
  );
}

export default Home;

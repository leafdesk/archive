import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = 'c36f93ac62d42e110425fd7987353e63';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();

      setMovies(results);
    })();
  }, []);

  return (
    <>
      <Seo title='Home' />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
};

export default Home;

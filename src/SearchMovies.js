import React, {useState} from "react";
import MovieCard from "./MovieCard";

function SearchMovies(){
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  
  const searchMovies = async (e) => {
      e.preventDefault();
              
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
      
      try {
          const res = await fetch(url);
          const data  = await res.json();
          setMovies(data.results);
      }catch(err){
          console.error(err);
      }
  }

    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="siteTitle" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <MovieCard movies={movies}/>
        </div>
    )

}

export default SearchMovies
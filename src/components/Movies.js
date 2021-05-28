import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

 function Movies() {
    const [movies, updateMovies] = useState([]);  
    useEffect(() => {
        axios
          .get('https://api.themoviedb.org/3/movie/now_playing?api_key=ca497f1d532a56872d2c2035b57c24dc&language=en-US&page=1')
          .then((result) => {
            updateMovies(result.data.results);
          })
          .catch(() => {
            console.log('Error');
          });
      }, []); 
      console.log(movies)
      //still to do add link to each movie...display in grid with bootstrap
      return (
        <div>
           { movies.map((movie, i)=>{
                return (
                    <div key= {i}>
                     
                 <img src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}></img>   
                    </div>
                )
            })}
        </div>
    )
}

export default Movies;

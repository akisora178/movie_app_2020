import React from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import "./Movie.css";


function Movie ({ id,year,title,summary,poster,genres}){
    return  (
    
        <Link to={
            {
                pathname:`./movie/${id}`,
                state:{
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }
        }>
        <div className="movie">
                <img src={poster} alt="{title}" title="{title}" />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="genres_list">{genres.map((genre,index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
                    <p className="movie_summary">{summary.slice(0,300)}...</p>

                </div>
            </div>
            </Link>)
                
    }
Movie.prototype = {
    id: PropType.number.isRequired,
    year:PropType.number,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres : PropType.arrayOf(PropType.string).isRequired
}
export default Movie;
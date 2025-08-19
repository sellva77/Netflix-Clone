import React, { useState, useRef, useEffect } from 'react';
import './TittleCard.css'
import { Link } from 'react-router-dom';
// import cards_data from '../../assets/cards/Cards_data'


const TittleCard = ({tittle,category}) => {
const [apidata, setApidata] = useState([]);
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzRlZjRkYmVjNmViNDVlYmIzMjY2NGRmM2Q2NjI2MiIsIm5iZiI6MTc1NTQ0MDM5MC40NzMsInN1YiI6IjY4YTFlNTA2YThlMDFjN2M4YTg2ZmQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SguPVER4QsrnqMhqxAYVRQPySTD-vSuVVgJDRHt-mjA'
  }
};



const handleWheel = (e) => {
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
};  

useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApidata(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
}, []);


  return (
    <div className="tittle-cards">
        <h2>{tittle ? tittle : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apidata.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
                <p>{card.original_title}</p>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

export default TittleCard
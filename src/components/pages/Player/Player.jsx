import React, { useEffect, useState, } from 'react'
import './Player.css'
import { useParams, useNavigate } from 'react-router-dom';
import back_arrow from '../../../assets/back_arrow_icon.png'
const Player = () => {

const { id } = useParams();

const navigate = useNavigate();

const [apiData, setApiData] = useState(
  {
    name: '',
    key: '',
    published_at: '',
    type: ''
  }
);




const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzRlZjRkYmVjNmViNDVlYmIzMjY2NGRmM2Q2NjI2MiIsIm5iZiI6MTc1NTQ0MDM5MC40NzMsInN1YiI6IjY4YTFlNTA2YThlMDFjN2M4YTg2ZmQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SguPVER4QsrnqMhqxAYVRQPySTD-vSuVVgJDRHt-mjA'
  }
};
useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

}, []);








  return (
    <div className="player">
      <img src={back_arrow} alt="Back" className='back-btn' onClick={() => navigate(-2)} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" width="90%" height="90%"
      title='Song' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
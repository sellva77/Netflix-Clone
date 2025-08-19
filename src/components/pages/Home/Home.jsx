import React from 'react'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import hero_baner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from '../../../assets/play_icon.png'
import info_icon from '../../../assets/info_icon.png'
import TittleCards from '../../TittleCard/TittleCard'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_baner} alt="Hero Banner" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young
            man living in modern Istanbul embarks on a quest to save the
            city from an immortal enemy.</p>
            <div className="hero-btns">
              <Link to={`/player/80dqOwAOhbo?rel=0&modestbranding=1&autoplay=1&vq=hd1080`} className="card" >
              <button className='btn'><img src={play_icon} alt="" />
                Play
              </button> </Link>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TittleCards />
        </div>
      </div>
      <div className="more-cards">
        <TittleCards tittle={"Blockbusters Movies"} category={"top_rated"}/>
        <TittleCards tittle={"Only on Netflix"} category={"popular"}/>
        <TittleCards tittle={"Upcoming"} category={"upcoming"}/>
        <TittleCards tittle={"Top Pick for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home

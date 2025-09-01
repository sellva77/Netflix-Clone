import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import tweeter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'   
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook Icon" />
        <img src={instagram_icon} alt="Instagram Icon" />
        <img src={tweeter_icon} alt="Twitter Icon" />
        <img src={youtube_icon} alt="YouTube Icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Gift Cards</li>
        <li>Help Center</li>
        <li>Terms of Use</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Legal Notices</li>
        <li>Contact Us</li>
      </ul>
      <p className='Copyright-text'>© 2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
"use client";
import axios from 'axios';
import { useState, useEffect } from "react";
import './Suggestions.css'; // Import the custom CSS file

const Suggestions = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {

    // creating api url
    const apiUrl = `${process.env.API_LINK}?per_page=3&client_id=${process.env.CLIENT_ID}`;


    // calling API and fethching data
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

        // setting responses
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (

    // whole suggestion container for storing suggestions for new friends
    <div className="suggestions-container">
      <div className="suggestions-header">
        <h3>Suggestions for you</h3>
        <button className="see-all-btn">See All</button>
      </div>
      {/* mapping different people in suggestions */}
      {photos.map(profile => (
        <div key={profile.id} className="suggestion-item">
          <img className="suggestion-avatar" src={profile.urls.small} alt="Avatar" />
          <div className="suggestion-details">
            <h2 className="suggestion-username">{profile.user.username}</h2>
            <h3 className="suggestion-company">Followed by <strong>{profile.user.instagram_username}</strong></h3>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions

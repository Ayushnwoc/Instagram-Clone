"use client";
import axios from 'axios';
import { useState, useEffect } from "react";
import './Suggestions.css'; // Import the custom CSS file

const Suggestions = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const clientId = 'wM3ynOseuNwAlISTJw9iTRl-jjxJGiv0DjMwINZhwu4';
    const apiUrl = `https://api.unsplash.com/photos/?per_page=3&client_id=${clientId}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="suggestions-container">
      <div className="suggestions-header">
        <h3>Suggestions for you</h3>
        <button className="see-all-btn">See All</button>
      </div>
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

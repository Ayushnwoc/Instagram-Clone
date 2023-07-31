"use client";
import "./Stories.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import Story from "./Story";

const Stories = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const clientId = 'wM3ynOseuNwAlISTJw9iTRl-jjxJGiv0DjMwINZhwu4';
    const apiUrl = `https://api.unsplash.com/photos/?per_page=30&client_id=${clientId}`;

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
    <div className="stories">
      {photos.map(profile =>
        <Story
          key={profile.id}
          img={profile.urls.small}
          username={profile.user.username}
        />
      )
      }
    </div>
  )
}

export default Stories

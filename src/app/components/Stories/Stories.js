"use client";
import "./Stories.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import Story from "./Story";

const Stories = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {

    // setting api utl
    const apiUrl = `${process.env.API_LINK}?per_page=30&client_id=${process.env.CLIENT_ID}`;

    const fetchData = async () => {
      try {
        // calling the api using axios
        const response = await axios.get(apiUrl);

        // set response in photos
        setPhotos(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="stories">

      {/* mapping the stories and sending data to them */}
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

"use client";
import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import "./Profile.css";
import { ChatIcon, HeartIcon } from '@heroicons/react/outline';
import { FaCog } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const clientId = 'wM3ynOseuNwAlISTJw9iTRl-jjxJGiv0DjMwINZhwu4';
        const apiUrl = `https://api.unsplash.com/photos/?page=1&client_id=${clientId}`;

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
    console.log(photos);
    return (
        <div >
            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">ayush__kumar73</h1>
                            <button className="btn profile-edit-btn">Edit Profile</button>
                            <button className="btn profile-settings-btn" ><FaCog /></button>
                        </div>
                        <div className="profile-stats">
                            <ul>
                                <li><span className="profile-stat-count">164</span> posts</li>
                                <li><span className="profile-stat-count">188</span> followers</li>
                                <li><span className="profile-stat-count">206</span> following</li>
                            </ul>
                        </div>
                        <div className="profile-bio">
                            <p><span className="profile-real-name">Ayush Kumar</span> </p>
                            <p>IITP 2024</p>
                        </div>
                    </div>
                </div>
            </header>

            <div>
                <div className="container">
                    <div className="gallery">
                        {photos.map((profile,index) =>
                            <div className="gallery-item" tabindex="0" key={index}>
                                <img src={profile.urls.full} className="gallery-image" alt="" />
                                <div className="gallery-item-info">
                                    <ul>
                                        <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><HeartIcon /> 56</li>
                                        <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><ChatIcon /> 40</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* <div className="loader"></div> */}

                </div>

            </div>
        </div>
    )
}

export default Profile

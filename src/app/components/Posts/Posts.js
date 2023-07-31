"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Posts.css";

function Posts() {

  // variables for setting page and posts
  const [page, setPage] = useState(1);
  const [postses, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // loadData function to fetch data from api
  const loadData = async () => {

    try {

      // Number of items to load per API call
      const perPage = 10; 

      // calling the api
      const apiUrl = `${process.env.API_LINK}?page=${page}&per_page=${perPage}&client_id=${process.env.CLIENT_ID}`;
      // console.log('apiUrl',apiUrl);
      const response = await axios.get(apiUrl);

      setPage(page + 1); // Increment page for the next API call

      // checking that responses if less than demanded per page
      if (response.data.length < perPage) {
        setHasMore(false); // No more data available
      } 
      else {
        // set new responses last of the previous responses
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
      }


    } catch (error) {
      setHasMore(false);
      console.error('Error fetching data:', error);
    }

  };

  useEffect(() => {

    //calling the function loadData for first time
    loadData();

  }, []);

  return (
    <div className="posts">

      {/* using InfiniteScroll for infinite scrolling  */}
      <InfiniteScroll
        dataLength={postses.length}

        // next function to load new data
        next={() => loadData()}
        hasMore={hasMore}

        // loader for loading the new data
        loader={<div className="loader-container"><div className="loader"></div></div>}

        // if no more data is available
        endMessage={<div className="custom-footer">No more posts to show</div>}
      >
        {/* mapping the posts */}
        {postses.map((post) => (
          <Post
            key={post.id}
            username={post.user.instagram_username}
            profileImageUrl={post.user.profile_image.small}
            imageUrl={post.urls.raw}
            likes={post.likes}
            likedByUser={post.liked_by_user}
            comments={post.comments}
            location={post.user.location}
            description={post.alt_description}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Posts;

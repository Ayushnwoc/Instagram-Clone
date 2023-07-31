"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Posts.css";

function Posts() {
  const [page, setPage] = useState(1);
  const [postses, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadData = async () => {
    try {
      const clientId = 'wM3ynOseuNwAlISTJw9iTRl-jjxJGiv0DjMwINZhwu4';
      const perPage = 10; // Number of items to load per API call
      const apiUrl = `https://api.unsplash.com/photos/?page=${page}&per_page=${perPage}&client_id=${clientId}`;
      const response = await axios.get(apiUrl);
      // console.log(response);
      setPage(page + 1); // Increment page for the next API call
      if (response.data.length < perPage) {
        setHasMore(false); // No more data available
      } else {
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
      }
    } catch (error) {
      setHasMore(false);
      // console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="posts">
      <InfiniteScroll
        dataLength={postses.length}
        next={() => loadData()}
        hasMore={hasMore}
        loader={<div className="loader-container"><div className="loader"></div></div>}
        endMessage={<div className="custom-footer">No more posts to show</div>}
      >
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

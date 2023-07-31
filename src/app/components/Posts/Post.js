"use client";
import React from 'react';
import { useState } from 'react';
import {
    HeartIcon,
    HeartIconFilled,
    ChatIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
    EmojiHappyIcon,
    DotsHorizontalIcon,
} from '@heroicons/react/outline';
import "./Post.css";


const Post = ({ username,profileImageUrl , imageUrl, likes,likedByUser, comments ,location , description}) => {
    const [comment, setComment] = useState("");
    const [hasLiked, setHasLiked] = useState(false);

    return (
        <div className="card">
            <div className="top">
                <div className="userDetails ">
                    <div className="profilepic">
                        <div className="profile_img">
                            <div className="image">
                                <img src={profileImageUrl} alt="img" />
                            </div>
                        </div>
                    </div>
                    <h3>{username}
                        <br />
                        <span>{location}</span>
                    </h3>
                </div>
                <div >
                    <span className="heart">
                        <DotsHorizontalIcon  className='btn'/>
                    </span>
                </div>
            </div>
            <div className="imgBx">
                <img src={imageUrl} alt="post-1" className="cover" />
            </div>
            <div className="bottom">
                <div className="actionBtns">
                    <div className="left">
                        <span className="heart">
                            <span>
                                <HeartIcon className="btn text-red-500" />
                            </span>
                        </span>
                        <span className="heart">
                            <span>
                                <ChatIcon className="btn text-red-500" />
                            </span>
                        </span>
                        <span className="heart">
                            <span>
                                <PaperAirplaneIcon className="paperAirplane btn" />
                            </span>
                        </span>
                    </div>
                    <div className="right">
                        <span className="heart">
                            <span>
                                <BookmarkIcon className="btn" />
                            </span>
                        </span>
                    </div>
                </div>
                <div >
                    <p className="likes">{likes} likes</p>
                </div>
                <div >
                    <p className='des'><strong>{username}</strong>{" "}{description!=null? description.slice(0,35):""}{description && description.length>35?"...":""}</p>
                </div>
                
                <div className='btn'>
                    <h4 className="comments">View all 32 comments</h4>
                </div>
                <div >
                    <h4 className="comments">Add a comment ...</h4>
                </div>
            </div>
            <div className="hrr" ></div>
        </div>
    );
};

export default Post;

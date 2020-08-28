import React from 'react'
import "./Post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShareIcon from '@material-ui/icons/Share';
function Post({profilePic,image,username,timestamp,message}) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h3>{username}</h3>
        <p>Timestap....</p>
        </div>

      </div>
      <div className="post__bottom">
            <p>{message}</p>
      </div>
      <div className="post__image">
          <img src={image} alt="" />
      </div>
      <div className="post__options">
            <div className="post__option">
              <ThumbUpIcon />
              <p>Like</p>
            </div>
            <div className="post__option">
              <ChatBubbleOutlinedIcon />
              <p>Comment</p>
            </div>
            <div className="post__option">
              <ShareIcon />
              <p>Share</p>
            </div>
            <div className="post__option">
              <AccountCircleIcon />
              <ExpandMoreOutlinedIcon />
          
            </div>

      </div>
    </div>
  )
}

export default Post

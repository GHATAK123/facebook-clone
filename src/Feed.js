import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEiym80vVymKA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Nfyxzv30PHwdyWZaX57XY_tAEcCTJxjJsyvs-pHnHXc" message="Paige " timestamp="This is timestamp" 
      username="GHATAK123"
      image="https://www.wrestling-world.com/imgb/4927/paige-to-return-to-wrestling.jpg"
      />

<Post profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEiym80vVymKA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Nfyxzv30PHwdyWZaX57XY_tAEcCTJxjJsyvs-pHnHXc" message="Paige " timestamp="This is timestamp" 
      username="GHATAK123"
      image="https://www.wrestling-world.com/imgb/4927/paige-to-return-to-wrestling.jpg"
      />
      

      
    </div>
  )
}

export default Feed

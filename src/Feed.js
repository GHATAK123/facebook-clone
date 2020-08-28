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
      <Post profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEiym80vVymKA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Nfyxzv30PHwdyWZaX57XY_tAEcCTJxjJsyvs-pHnHXc" message=" WWE Divas Championship Paige " timestamp=" 28 August at 21:37" 
      username="Prakash"
      image="https://www.wrestling-world.com/imgb/4927/paige-to-return-to-wrestling.jpg"
      />

<Post profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEiym80vVymKA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Nfyxzv30PHwdyWZaX57XY_tAEcCTJxjJsyvs-pHnHXc" message="I’m meaner than my demons: Charlotte Flair
 " timestamp="28 August at 23:37" 
      username="Prakash"
      image="https://pbs.twimg.com/media/EfAzOSUX0AME_KK?format=jpg&name=900x900"
      />

<Post profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEiym80vVymKA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=Nfyxzv30PHwdyWZaX57XY_tAEcCTJxjJsyvs-pHnHXc" message="WWE Raw Women's Championship 2020
 " timestamp="29 August at 2:37" 
      username="Prakash"
      image="https://pbs.twimg.com/media/EUzR1eNX0AA_PI6?format=jpg&name=large"
      />
      

      
    </div>
  )
}

export default Feed

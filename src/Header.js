import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar,IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt=""/>
        <div className="header__input">
        <SearchIcon />
         <input type="text" />
        </div>
       

      
      
      </div>
      <div className="header__center">
        <div className="header__option header__option--active ">
           <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
           <FlagIcon fontSize="large" />
        </div>
        
        <div className="header__option">
           <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        
          
        <div className="header__option">
           <StorefrontOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
           <SupervisedUserCircleIcon fontSize="large" />
        </div>
      
      
    </div>
    <div className="header__right">
      <div className="header__info">
        <Avatar/>
        <h4>Prakash</h4>
      </div>
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>
      
      
    </div>

      
    </div>
  )
}

export default Header

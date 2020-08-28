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
import { useStateValue } from './StateProvider';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt=""/>
        <div className="header__input">
        <SearchIcon />
         <input type="text" placeholder="Search Facebook" />
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
        <Avatar src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/97357756_110706443984484_8720296783692955648_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=S7I0ocelrjcAX8lyDBs&_nc_ht=scontent.fpat3-1.fna&oh=635a14440741a557670974664e95259c&oe=5F6F908B"/>
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

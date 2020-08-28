import React from 'react'
import './Sidebar.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import SidebarRow from './SidebarRow';
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/97357756_110706443984484_8720296783692955648_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=S7I0ocelrjcAX8lyDBs&_nc_ht=scontent.fpat3-1.fna&oh=635a14440741a557670974664e95259c&oe=5F6F908B" title='Prakash Anand'/>
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>
  )
}

export default Sidebar;

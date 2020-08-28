import React from 'react'
import './Login.css';
import {Button} from "@material-ui/core"
function Login() {
  const signIn = () => {

  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""  />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In

      </Button>
      
    </div>
  )
}

export default Login

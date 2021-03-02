import React from 'react';
import '../App.css'
import Button from './Button'

export default function NavBar(props) {
  return (
    <div className="navbar">
      <div className="Stadia-logo"><svg class="xduoyf" width="127" height="24" viewBox="0 0 127 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.9 9a27.8 27.8 0 0 1 24 .4c.4.3 1 0 1.1-.4l1.4-4.3c.2-.4 0-1-.5-1.2A34 34 0 0 0 .4 6.9a1 1 0 0 0-.3 1.3l3.3 7.3c.2.5.8.8 1.3.6 3.7-1.4 9.4-2.8 15.2-2-4 .7-7.1 2.1-9.6 3.6A1 1 0 0 0 10 19l2 4.6c.2.4.7.5 1 .2.8-.8 1.6-1.4 2.3-1.8 3.2-1.8 7.6-3.2 13.5-2.9a1 1 0 0 0 1-.7l1.5-4.5c.2-.4 0-1-.4-1.2A30.5 30.5 0 0 0 9.8 9z" fill="url(#i2)"></path><path d="M66.7 20h-2a.6.6 0 0 1-.6-.7V7.5h-5a.6.6 0 0 1-.6-.6V5.1c0-.4.3-.6.6-.6h13.2c.3 0 .6.2.6.6v1.8c0 .3-.3.6-.6.6h-5v11.8c0 .4-.3.6-.6.6zM53.5 20h-9.2a.6.6 0 0 1-.5-.7v-1.8c0-.3.2-.6.5-.6h9.8c.5 0 1-.4 1-1v-1.3c0-.5-.5-1-1-1h-6.5c-1.8 0-2.8-.3-3.6-1-.8-.8-1-1.8-1-3.4V9c0-1.6.2-2.5 1-3.3.8-.8 1.8-1.1 3.6-1.1h8.7c.4 0 .6.2.6.6v1.8c0 .3-.2.6-.6.6h-9.2a1 1 0 0 0-1 1v1.2c0 .5.4 1 1 1h6.4c1.8 0 2.9.3 3.7 1.1.7.7 1 1.7 1 3.3v.4c0 1.6-.3 2.5-1 3.3-.8.8-1.9 1.1-3.7 1.1zM101.6 6.3c-1.2-1.2-3-1.8-5.4-1.8h-7c-.4 0-.6.2-.6.6v14.3c0 .3.2.5.5.5h7.1c2.4 0 4.2-.6 5.4-1.8 1.4-1.3 1.8-2.9 1.8-5.8v-.1c0-3-.4-4.5-1.8-5.9zm-1.4 6c0 2 0 2.9-.9 3.7-.6.6-1.6 1-3 1h-4.5V7.4h4.4c1.5 0 2.5.3 3.1 1 .8.7 1 1.7 1 3.7zM108 20h-2a.6.6 0 0 1-.6-.7V5.1c0-.4.3-.6.6-.6h2c.4 0 .6.2.6.6v14.2c0 .4-.2.6-.5.6zM87.2 19L80.6 5.5a2 2 0 0 0-1.8-1.2A2 2 0 0 0 77 5.4L70.4 19c-.2.4 0 .8.5.8h2.2c.3 0 .6-.2.7-.4l1-2.2h8l1 2.2c.1.2.4.4.7.4h2.2c.4 0 .7-.4.5-.8zM78.8 8.4l2.7 6.1h-5.4l2.7-6.1zM127 19l-6.6-13.6a2 2 0 0 0-1.9-1.2 2 2 0 0 0-1.8 1.2L110.1 19c-.2.4.1.8.6.8h2.1c.3 0 .6-.2.7-.4l1-2.2h8l1 2.2c.2.2.4.4.8.4h2.1c.4 0 .7-.4.5-.8zm-8.5-10.7l2.7 6.1h-5.4l2.7-6.1z" fill="#3C4043"></path><defs><linearGradient id="i2" x1="13.1" y1="-1.1" x2="26.7" y2="20.6" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#FF4C1D"></stop><stop offset=".3" stop-color="#F64523"></stop><stop offset=".5" stop-color="#DE3334"></stop><stop offset=".8" stop-color="#B61550"></stop><stop offset="1" stop-color="#9B0063"></stop></linearGradient></defs></svg>
      </div>

      <div className="navListPair navListPairResp"> <div className="about">About Stadia</div><div className="redNavItem">Games</div>
      </div>

      <div className="navListPair signInResp"> <div className="redNavItem signIn">Sign in</div><div className="try"><Button text="Try Now" /></div>
      </div>

    </div>
  )
}
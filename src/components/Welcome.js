//THIS CONTAINS THE WELOCME MESSAGE WITH DESK GRADIENT OF FRONTEND;
import React from 'react'
import '../css/Welcome.css'
import desk from '../Assets/Group 25.png'
import {BrowserRouter, Link} from 'react-router-dom';
import Getintouch from './Getintouch'
function Welcome() {
    return (
       
      <div  className="welcome">
            <div className="desk">
            <img src={desk} alt="INPROSPECT" style={{width:'45%', marginLeft:'50%',marginTop:'-8%'}}/>
            </div>

            <div className="text" style={{marginTop:'-25%',marginLeft:'20%'}}>
                <h5>Welcome To</h5>
                <h1>INPROSPECT SERVICES</h1>
                <h3>Functional, Custom - build, ingenious softwares<br/> At your fingertips</h3>
              <BrowserRouter> <Link  to={<Getintouch/>} > <button id="btn">Contact Us</button> </Link></BrowserRouter>
            </div>
            
            
            
            
        </div>  



         
         
    )
}

export default Welcome

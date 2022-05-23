import React from 'react'
// import { Link } from 'react-router-dom'
import message from "./images/message.svg"
import user from "./images/user.svg"
import apple from "./images/apple.svg"
import twitter from "./images/twitter.png"
import google from "./images/google.svg"
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
  } from "react-router-dom";


import './Registration2.css'
const Registration2 = () => {
  return (
    <>
      <div className='Nav-div'>
        <h3 className='Nav-div-h3'>VIRTUAL PERSON</h3>
        <a className='Nav-div-a' href="/">Login</a>
      </div>

      {/* section 2 */}

      <div className='Main_div_section'>
        <div className='Main_text_section col-6'>
          <h3 className='Main_text_section_h3'>a digital asset platform to VIRTUALize your Data.</h3>
          <div className='text_section'>
            <img src={message} alt="Girl in a jacket" />
            <h3 className='text_section_h3'>A legit pseudonym</h3>
            <p className='text_section_p'>don't offer up your real name when don't have to</p>
          </div>
          <div className='text_section'>
            <img src={message} alt="Girl in a jacket" />
            <h3 className='text_section_h3'>An autofill-ready virtual</h3>
            <p className='text_section_p'>profile when the situation calls for a person's info</p>
          </div>
          <div className='text_section'>
            <img src={message} alt="Girl in a jacket" />
            <h3 className='text_section_h3'>Alternate, and disposable,</h3>
            <p className='text_section_p'>email account with auto forward</p>
          </div>
        </div>
        {/* Foam */}
        <div className='form_section col-66'>
          <h3 className='form_section_h3'>Create a Virtual Person and Account</h3>
          <p className='form_section_p'>Fill out the form below.</p>
          <form className='Foam-inner-section'>
            <label>
              <p className='Label-p'><img className='registration-icon' src={user} alt="Girl in a jacket" /> Name</p>
              <input className='form-input' type="text" name="name" />
            </label><br></br>
            <Link className='form-submit' to="/Registration/foam">Register Now!</Link>

            {/* <input className='form-submit' type="submit" value="Register Now!" /> */}
          </form>
          <hr className='Hr-style' data-content="or"/>
          <div className='sign-up_section'>
          <button className='padding-section2 google-sign-up' type="button"  ><img className='icons-size' src={google} alt="Girl in a jacket" />Sign Up with google</button>
          <button className='padding-section2 Apple-sign-up' type="button"  ><img className='icons-size' src={apple} alt="Girl in a jacket" />Sign Up with Apple</button>
          <button className='padding-section2 twitter-sign-up' type="button"  ><img className='icons-size' src={twitter} alt="Girl in a jacket" />Sign Up with Twitter</button>

          </div>
          <div className='form-second-text'>
          <p className='form-second-text-p1'>By clicking Contact Us you agree to our <span className='span-style'>Privacy Policy.</span></p>
          <p className='form-second-text-p2'>You also agree to receive marketing communication from halaltable about news,events,promotions and monthly newsletters. You can unsubscribe from Virtual Person emails at any time.</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Registration2
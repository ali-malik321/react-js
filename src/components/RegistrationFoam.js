import React from 'react'
import message from "./images/message.svg"
import user from "./images/user.svg"
import "./RegistrationFoam.css"
import mail from "./images/mail.svg"
import phone from "./images/cell-phone.svg"
import photo from "./images/photo.svg"

const RegistrationFoam = () => {
  console.log("iam RegistrationFoam")
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
          <h3 className='form_section_h3'>Create Virtual Person</h3>
          <p className='form-content2'>Fill out the form below and a member of our team will reach out to you.</p>
          <form className='Foam-inner-section'>
            <label>
              <p className='Label-p'><img className='registration-icon' src={user} alt="Girl in a jacket" /> First Name*</p>
              <input className='First-name-input' type="text" name="name" />
            </label>

            <label>
              <p className='Label-p'><img className='registration-icon' src={user} alt="Girl in a jacket" /> Last Name*</p>
              <input className='First-name-input' type="text" name="name" />
            </label>
            <label>
              <p className='Label-p'><img className='Email-icon' src={mail} alt="Girl in a jacket" /> Email Address*</p>
              <input className='First-name-input' type="email" name="name" />
            </label>
            <label>
              <p className='Label-p'><img className='phone-icon' src={phone} alt="Girl in a jacket" /> Phone Number*</p>
              <input className='First-name-input' type="email" name="name" />
            </label>
            <p className='Label-p'><img className='photo-icon' src={photo} alt="Girl in a jacket" />Add Picture</p>
            <label className="img_Lable"> choose file to upload
              <input className='img-input' type="file" />
            </label>
            <p className='note-p'>Note<span className='note-span'>*</span>:</p>
            <div className='foam-section'>
              <p className='foam-content'>Do not enter real person private info</p>
              <label>
                <input className='submit-button' type="submit" value="Create Profile" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegistrationFoam
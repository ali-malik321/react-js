import React from 'react'
import './Footer.css'
import VirtualPerson from './images/logo-virtual-person.png'
import linkedin from './images/linkedin.svg'
import location from './images/location.svg'
import message2 from './images/message2.svg'
import telephone from './images/telephone.svg'
import sms from './images/sms.svg'



const Footer = () => {
    return (
        <>
            <div className='Main-footer-div '>
                <div className='flex'>
                <div className='img-content-section'>
                    <img className='icon-section' src={VirtualPerson} alt="Girl in a jacket" />
                    <p className='content-section'>A Virtual Person is an online person that's not your real name.<br></br> While the internet may promise you trust and privacy and security,<br></br> we think you'd be wise to not give up any secrets or personal data at<br></br> all.</p>
                    <p className='content-section-block'>A Virtual Person is an online person that's not your real name. While the internet may promise you trust and privacy and security, we think you'd be wise to not give up any secrets or personal data at all.</p>
                </div>
                <div className='Div-Links1'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a className='' href="/">Home</a></li>
                        <li><a className='' href="/">Our Story</a></li>
                        <li><a className='' href="/">FAQ</a></li>
                    </ul>
                </div>
                <div className='Div-Links2'>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a className='Font-link' href="/"><img className='footer-icon' src={linkedin} alt="Girl in a jacket" />LinkedIn</a></li>
                        <li><a className='Font-link1' href="/"><img className='footer-icon' src={message2} alt="Girl in a jacket" /> marcosthecuban@virtualperson.com</a></li>
                        <li><a className='Font-link' href="/"><img className='footer-icon' src={telephone} alt="Girl in a jacket" />(972) 560-4822</a></li>
                        <li><a className='Font-link' href="/"><img className='footer-icon' src={sms} alt="Girl in a jacket" />(972) 560-4822</a></li>
                        <li><a className='Font-link' href="/"><img className='footer-icon' src={location} alt="Girl in a jacket" /> 2001 N Lamar St, Suite 302 Dallas, TX 75202</a></li>
                    </ul>
                </div>
                </div>
                <div className='end-footer-div'>
                    <p>Copyright &copy; 2022 Virtual Person Management, LLC. All Rights Reserved.</p>
                    <ul className='end-footer-div-ul'>
                        <li><a className='' href="/">Privacy Policy</a></li>
                        <li><a className='' href="/">Terms of Use</a></li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
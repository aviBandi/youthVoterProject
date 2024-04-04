import React from 'react';
import Logo from "../images/logo.png"
export default function Footer() {
  return (
    <div className='bg-gray-800 overflow-auto pb-24'>
      <div className='max-w-5xl mx-auto px-8'>
        <footer className="footer pt-28 text-base-content">
          <aside>
            {/* <img src={Logo} className='h-12 pt-2' /> */}
            <p>
              <span className='font-bold text-3xl text-white'>The Youth Voter Project</span>
              <br />
              <span className='font-semibold text-lg text-white'>Connecting Youth to Democracy!</span>
            </p>
          </aside>


          <nav>
            <h6 className="footer-title text-white">Pages</h6>
            <a href='/home' className="link link-hover text-white">Home</a>
            <a href='/resources' className="link link-hover text-white">Resources</a>
            <a href='/team' className="link link-hover text-white">Team</a>
            <a href='/contact' className="link link-hover text-white">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Socials</h6>
            <a target="_blank" className="link link-hover text-white">Instagram</a>
            <a href="https://www.linkedin.com/company/youthvoterproject/" target='_blank' className="link link-hover text-white">Linkedin</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Legal</h6>
            <a className="link link-hover text-white">Terms of use</a>
            <a className="link link-hover text-white">Privacy policy</a>
            <a className="link link-hover text-white">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
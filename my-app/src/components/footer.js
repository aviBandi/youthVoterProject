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
              <span className='font-bold text-3xl'>The Youth Voter Project</span>
              <br />
              <span className='font-semibold text-lg'>Connecting Youth to Democracy!</span>
            </p>
          </aside>


          <nav>
            <h6 className="footer-title">Pages</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Resources</a>
            <a className="link link-hover">Team</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Socials</h6>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Linkedin</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
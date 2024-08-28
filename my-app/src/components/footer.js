import React from 'react';
import Logo from "../images/logo.png"
export default function Footer() {
  return (
    <div className='bg-gray-800 overflow-auto pb-24'>
      <div className='max-w-5xl mx-auto px-8'>
        <footer className="footer pt-28 text-base-content">
          <aside>
            {/* <img src={Logo} className='h-12 pt-2' /> */}
            <div>
              <p className='font-bold text-3xl text-white'>The Youth Voter Project</p>

              <p className='font-semibold text-lg text-white mt-2'>Fiscally sponsored by the 
                {" "}
                <span  className="underline underline-offset-4 hover:text-blue-500 transition-all">
                  <a href='https://www.ymcanorth.org/locations/center_for_youth_voice' target='_blank'>
                    YMCA Center for Youth Voice
                  </a>
                </span>


              </p>
            </div>
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
            <a href='https://www.instagram.com/youthvoterproject?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank" className="link link-hover text-white">Instagram</a>
            <a href="https://www.linkedin.com/company/youthvoterproject/" target='_blank' className="link link-hover text-white">Linkedin</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white">Legal</h6>
            <a className="link link-hover text-white">Terms of use</a>
            <a className="link link-hover text-white">Privacy policy</a>
            <a className="link link-hover text-white">Cookie policy</a>
          </nav>

        </footer>
        <div className="flex justify-center">
          <p className='text-sm mt-10 -mb-7 text-center'>Website built with ❤️ by <a className='hover:text-white hover:transition-all underline underline-offset-2 text-blue-300' href='https://www.avibandi.com/'>Avi Bandi</a></p>
          </div>
      </div>
    </div>
  );
}
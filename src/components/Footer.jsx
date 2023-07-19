import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return <>
        <div>
        <footer className="footer text-white py-5 p-10 ">
          <div className="md:container md:mx-7">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h5 className="text-uppercase mb-4">ABOUT COSMIC COASTERS</h5>
                <p className="text-justify">We are a student union focused on the field of rocketry. Our mission is to explore the universe and master the art of rocketry, engaging students in exciting projects and events.</p>
              </div>
              <div>
                <h5 className="text-uppercase mb-4">QUICK LINKS</h5>
                <ul className="list-none">
                  <li><a className="text-gray-500 hover:text-white" href="#about">About</a></li>
                  <li><a className="text-gray-500 hover:text-white" href="#events">Events</a></li>
                  <li><a className="text-gray-500 hover:text-white" href="#work">Projects</a></li>
                  {/*<li><a class="text-gray-500 hover:text-white" href="#sponsors">Sponsors</a></li>*/}
                  <li><a className="text-gray-500 hover:text-white" href="mailto:software@cosmic-coasters.at">Contact</a> {/*data-target="#contactModal" data-toggle="modal"*/}
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-uppercase mb-4" id="contact">Connect With Us</h5>
                <ul className="list-none flex space-x-4">
                  {/*<li class="list-inline-item"><a class="text-white-50" href="#"><i class="fab fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a class="text-white-50" href="#"><i class="fab fa-twitter"></i></a></li>*/}
                  <li className="list-inline-item"><a className="text-white-50" href="https://www.instagram.com/_cosmic_coasters_"><i className="fab fa-instagram" /></a></li>
                  <li className="list-inline-item"><a className="text-white-50" href="https://www.linkedin.com/company/cosmic-coasters/"><i className="fab fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white-50 text-sm text-">© 2023 Cosmic Coasters. All rights reserved.</p>
            </div>
          </div>
        </footer>
      
      



        </div></>
    ;
}

export default Footer;

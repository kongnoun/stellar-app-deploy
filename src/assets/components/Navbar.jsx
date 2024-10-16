import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const formRef = useRef(null);

  const handleContactClick = () => {
    setShowContactForm((prev) => !prev);
  };

  useEffect(() => {
    if (showContactForm) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    } else {
      gsap.to(formRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          // Optionally, you can clean up the form or perform actions after hiding
        }
      });
    }
  }, [showContactForm]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand-logo" href="#">
            Stellar.Ins
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1 my-1">
                <a className="nav-link rounded-3 p-2" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-1 my-1">
                <a className="nav-link rounded-3 p-2" href="#">
                  Weather
                </a>
              </li>
              <li className="nav-item mx-1 my-1">
                <a className="nav-link rounded-3 p-2" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item mx-1 my-1">
                <a 
                  className="nav-link rounded-3 p-2" 
                  href="#" 
                  onClick={handleContactClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showContactForm && (
        <div
          ref={formRef}
          className="contact-form-container"
          style={{
            position: 'fixed',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -20%)',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '500px',
            height: '700px',
            padding: '2em',
            zIndex: 1000,
          }}
        >
          <h2>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button 
              type="button" 
              className="btn btn-secondary ms-2" 
              onClick={handleContactClick}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;

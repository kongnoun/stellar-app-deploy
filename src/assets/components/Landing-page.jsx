import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing-page.css'; // Import your CSS file for custom styles

const LandingPage = () => {
  return (
    <article>
      {/* Carousel-slider */}
      <div id="carouselExampleCaptions" className="carousel slide mx-3 my-4" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded-3">
          <div className="carousel-item active">
            <img src="src/assets/img/carousel1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/carousel1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/carousel1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* Header */}
      <header className="text-light text-center py-5">
        <h1 className="display-4">Welcome to Nature</h1>
        <p className="lead">Explore the beauty of the natural world</p>
        <a href="#explore" className="btn btn-primary btn-lg">Explore More</a>
      </header>

      {/* Main Section */}
      <main id="explore" className="py-5">
        <div className="container">
          <h2 className="text-light text-center mb-4">Why Nature Matters</h2>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="card border-light">
                <div className="card-body">
                  <h5 className="card-title">Biodiversity</h5>
                  <p className="card-text">Protecting diverse ecosystems is vital for a sustainable future.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card border-light">
                <div className="card-body">
                  <h5 className="card-title">Conservation</h5>
                  <p className="card-text">Conserving natural habitats helps maintain ecological balance.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card border-light">
                <div className="card-body">
                  <h5 className="card-title">Sustainability</h5>
                  <p className="card-text">Emphasizing sustainable practices protects our planet for future generations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white text-center py-4">
        <p>&copy; 2023 Nature Inc. All Rights Reserved.</p>
      </footer>
    </article>
  );
};

export default LandingPage;

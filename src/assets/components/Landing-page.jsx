import React from 'react';
import './landing-page.css'; // Ensure this path is correct

const LandingPage = () => {  

  return (
    <article>
      {/* Carousel-slider */}
      <div id="carouselExampleCaptions" className="carousel slide mx-3 my-4" data-bs-ride="carousel" data-bs-interval="3500">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded-3">
          <div className="carousel-item active">
            <img src="src/img/img1.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="src/img/img2.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="src/img/img3.jpg" className="d-block w-100" alt="Slide 3" />
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
      <header className="text-light text-center py-5" style={{ height: '50vh' }}>
        <h1 className="display-4">Welcome to Nature</h1>
        <p className="lead">Explore the beauty of the natural world</p>
        <a href="#explore" className="btn btn-primary btn-lg">Explore More</a>
      </header>

      {/* Main Section */}
      <main id="explore" className="container-fluid py-5 bg-dark text-light section" style={{ height: '100vh' }}>
        <div className="container">
          <h2 className="text-center mb-4 section-title" style={{ letterSpacing: '2px' }}>
            The Cosmic Importance of Nature
          </h2>
          <p className="text-center mb-5">
            Our planet is a unique cradle of life, interconnected with the vastness of space...
          </p>

          {/* First Row */}
          <div className="row mb-4"> {/* Increased margin-bottom */}
            <div className="col-md-6 text-center mb-4"> {/* Added mb-4 for spacing */}
              <div className="card bg-transparent border-light shadow-lg">
                <img src="path-to-your-image.jpg" className="card-img-top" alt="Galactic Biodiversity" />
                <div className="card-body">
                  <h5 className="card-title">Galactic Biodiversity</h5>
                  <p className="card-text">
                    Just as the universe is populated with stars, planets, and galaxies...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center mb-4"> {/* Added mb-4 for spacing */}
              <div className="card bg-transparent border-light shadow-lg">
                <img src="path-to-your-image.jpg" className="card-img-top" alt="Planetary Conservation" />
                <div className="card-body">
                  <h5 className="card-title">Planetary Conservation</h5>
                  <p className="card-text">
                    Conserving Earth's ecosystems is much like the delicate gravitational dance...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row mb-4"> {/* Added mb-4 for spacing */}
            <div className="col-md-6 text-center mb-4">
              <div className="card bg-transparent border-light shadow-lg">
                <img src="path-to-your-image.jpg" className="card-img-top" alt="Sustainable Universes" />
                <div className="card-body">
                  <h5 className="card-title">Sustainable Universes</h5>
                  <p className="card-text">
                    Just as galaxies evolve over billions of years, our practices must be sustainable...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center mb-4">
              <div className="card bg-transparent border-light shadow-lg">
                <img src="path-to-your-image.jpg" className="card-img-top" alt="Celestial Stewardship" />
                <div className="card-body">
                  <h5 className="card-title">Celestial Stewardship</h5>
                  <p className="card-text">
                    As stewards of this planet, we are also caretakers of our cosmic home...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Section 2: Types of Galaxies */}
      <section id="galaxies" className="py-5 bg-gradient text-light section" style={{ height: '100vh' }}>
        <div className="container">
          <h2 className="text-center mb-4 section-title" style={{ letterSpacing: '2px' }}>
            The Mysteries of Galactic Forms
          </h2>
          <p className="text-center mb-5">
            Galaxies are the vast cities of stars, nebulae, and cosmic matter...
          </p>

          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="card bg-transparent border-light shadow-lg">
                <img src="path-to-your-image.jpg" className="card-img-top" alt="Spiral Galaxies" />
                <div className="card-body">
                  <h5 className="card-title">Spiral Galaxies</h5>
                  <p className="card-text">
                    Spiral galaxies are characterized by their spiral arms and bright centers...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card bg-transparent border-light shadow-lg">
                <img src="path-to-your-image.jpg" className="card-img-top" alt="Elliptical Galaxies" />
                <div className="card-body">
                  <h5 className="card-title">Elliptical Galaxies</h5>
                  <p className="card-text">
                    Elliptical galaxies are more rounded and lack the structure of spiral galaxies...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card bg-transparent border-light shadow-lg">
                <img src="path-to-your-image.jpg" className="card-img-top" alt="Irregular Galaxies" />
                <div className="card-body">
                  <h5 className="card-title">Irregular Galaxies</h5>
                  <p className="card-text">
                    Irregular galaxies do not fit into the other categories due to their chaotic appearance...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>© 2023 Nature Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </article>
  );
};

export default LandingPage;

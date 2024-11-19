import React from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import { Carousel } from 'react-responsive-carousel'; // Carousel library for the sliding images
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with Carousel */}
      <section className="hero">
        <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false} interval={10000}>
          <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Modern Adams.</p>
              <Link to="/contact" className="cta-button">About</Link>
            </div>
			
          </div>

          <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Innovative solutions for modern schools.</p>
              <Link to="/contact" className="cta-button">Services</Link>
            </div>
			
          </div>
		  <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Innovative solutions for modern schools.</p>
              <Link to="/contact" className="cta-button">Register</Link>
            </div>
			
			
          </div>
		  <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Innovative solutions for modern schools.</p>
              <Link to="/contact" className="cta-button">Register</Link>
            </div>
			
			
          </div>
		  <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Innovative solutions for modern schools.</p>
              <Link to="/contact" className="cta-button">Register</Link>
            </div>
			
			
          </div>
		  <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Innovative solutions for modern schools.</p>
              <Link to="/contact" className="cta-button">Register</Link>
            </div>
			
			
          </div>
		  <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Innovative solutions for modern schools.</p>
              <Link to="/contact" className="cta-button">Register</Link>
            </div>
			
			
          </div>
		  <div>
            <img src="/Assets/carosel-images/img2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Empowering Education with Technology</h1>
              <p>Innovative solutions for modern schools.</p>
              <Link to="/contact" className="cta-button">Register</Link>
            </div>
			
			
          </div>
		  
          {/* Additional carousel items can go here */}
		  
        </Carousel>
      </section>

      {/* Graduates */}
      <section className="team">
        <h2>Wall Of Fame 2024</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/Assets/Pictures/g1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  
          
		  <div className="team-member">
            <img src="/Assets/Pictures/g13.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g2.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g3.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g4.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g5.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g6.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g7.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g8.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g9.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g10.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g11.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g12.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g13.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g14.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g15.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g16.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g17.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g18.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g19.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g20.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g21.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g22.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g23.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g24.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g25.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g26.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g27.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g28.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g29.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g30.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g31.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g35.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g33.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g34.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		  <div className="team-member">
            <img src="/Assets/Pictures/g36.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
		 
		  <div className="team-member">
            <img src="/Assets/Pictures/g40.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
	
		
		 
		  <div className="team-member">
            <img src="/Assets/Pictures/g53.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
	
        </div>
		
      </section>
    </div>
  );
};

export default LandingPage;

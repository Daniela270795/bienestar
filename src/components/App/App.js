import React from 'react';
import './App.css';
import Footer from '../Footer';
import HeaderW from '../HeaderW';



function HomeW() {
  return (
      <>
      <HeaderW />
      <div className="Wrapper">
       
          <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
          >
              <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={10000}>
                      <img src="https://live.staticflickr.com/65535/52521374935_3c79bd8d49_z.jpg"  height="540"  className="d-block w-100" alt="..." />
                      
                  </div>
                  <div className="carousel-item" data-bs-interval={2000}>
                      <img src="https://estaticos-cdn.elperiodico.com/clip/c3f9504c-7214-4479-8483-805e9ce01192_alta-libre-aspect-ratio_default_0.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                      <img src="https://www.elespectador.com/resizer/NAZszJ6IgKsLrnbkXMlzPNvW7S0=/arc-anglerfish-arc2-prod-elespectador/public/MJCXARFWBRDUNE6M2ZJVAXNE5Y.png" className="d-block w-100" alt="..." />
                  </div>
              </div>
              <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
              >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
              </button>
              <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
              >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
          <Footer />
</div>
    </>


  );

}
export default HomeW;



 
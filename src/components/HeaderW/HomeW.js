import React from 'react';
import HeaderW from '../HeaderW/HomeW';
import Footer from '../../components/Footer';


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
                        <img src='  <img src="https://live.staticflickr.com/65535/52521374935_3c79bd8d49_z.jpg"  height="540"  className="d-block w-100" alt="..." />' alt="..." />
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
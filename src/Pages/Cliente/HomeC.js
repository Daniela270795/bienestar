import React from 'react';
import HeaderC from '../../components/HeaderC';
import Footer from '../../components/Footer';


function HomeC() {
    return (
        <>
        <HeaderC />
        <div className="Wrapper">
         
            <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src='https://images.unsplash.com/photo-1577695464142-e3a24f4e88f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFsa29ob2x8ZW58MHx8MHx8&w=1000&q=80' className="d-block w-100" alt="..." />
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
export default HomeC;
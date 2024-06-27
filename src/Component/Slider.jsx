import React from 'react';
import logo from'../images/London Hills.avif';
import logo_1 from '../images/Mobile/iphone 15 pro.jpg';
import logo_2 from '../images/Watch/Titan.webp';


function Slider() {
    return (
        <div
            id="carouselExampleSlidesOnly"
            className="carousel slide mt-4 "
            data-bs-ride="carousel"
        >
            <center>
                <h2 className=" text-danger">Welcome To HR-Mart</h2>
            <div className="carousel-inner mt-4 border border-success ">
                <div className="carousel-item active" >
                    <img src={logo} className="d-block " style={{ height: 380 }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={logo_1} className="d-block " style={{ height: 380 }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={logo_2} className="d-block " style={{ height: 380 }} alt="..." />
                </div>
            </div>
            </center>
        </div>

    )
}

export default Slider;
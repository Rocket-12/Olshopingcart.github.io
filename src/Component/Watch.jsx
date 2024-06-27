import React from 'react';
import logo from '../images/Watch/Fast Track.jpg';
import logo_1 from '../images/Watch/Cisco.webp';
import logo_2 from '../images/Watch/Fire Boult.jpg';
import logo_3 from '../images/Watch/Noice.webp';
import logo_4 from '../images/Watch/Titan.webp';
import logo_5 from '../images/Watch/Rolex.jpg';

function Watch() {
    return (
        <div className="row p-4 ">
            <center><h2 className=" text-danger">Watch Collection</h2></center>
            <div className="col-sm-6 col-md-6 col-lg-4 col-12  p-3  animate__animated animate__fadeInLeft">
                <div
                    className="card  m-auto animate__animated animate__heartBeat p-3 bg-info"
                    style={{ width: "14rem" }}
                >
                    <img
                        src={logo}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    {/* img-fluid use to give image round circle--------rounded-circle border border-dark p-2  */}
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Fast Track</h5>
                            <p className="card-text">Rs. 999</p>
                            <button type="button" className="btn btn-outline-primary">
                                Buy Now
                            </button>
                        </div>
                    </center>
                </div>
            </div>
            <div className="col-sm-6 col-md-16 col-lg-4 col-12 p-3 animate__animated animate__fadeInLeft ">
                <div
                    className="card  m-auto animate__animated animate__heartBeat p-3"
                    style={{ width: "14rem" }}
                >
                    <img
                        src={logo_1}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Casio</h5>
                            <p className="card-text">Rs. 4999</p>
                            <button type="button" className="btn btn-outline-primary">
                                Buy Now
                            </button>
                        </div>
                    </center>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-12 p-3 animate__animated animate__fadeInLeft">
                <div
                    className="card  m-auto animate__animated animate__heartBeat p-3 bg-warning"
                    style={{ width: "14rem" }}
                >
                    <img
                        src={logo_2}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Noise</h5>
                            <p className="card-text">Rs. 4500</p>
                            <button type="button" className="btn btn-outline-primary">
                                Buy Now
                            </button>
                        </div>
                    </center>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4 col-12 p-3 animate__animated animate__fadeInLeft">
                <div
                    className="card  m-auto animate__animated animate__heartBeat p-3 bg-warning"
                    style={{ width: "14rem" }}
                >
                    <img
                        src={logo_3}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Fire Boult</h5>
                            <p className="card-text">Rs. 2499</p>
                            <button type="button" className="btn btn-outline-primary">
                                Buy Now
                            </button>
                        </div>
                    </center>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4 col-12 p-3 animate__animated animate__fadeInLeft">
                <div
                    className="card  m-auto animate__animated animate__heartBeat p-3"
                    style={{ width: "14rem" }}
                >
                    <img
                        src={logo_4}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Rollex</h5>
                            <p className="card-text">Rs. 15990</p>
                            <button type="button" className="btn btn-outline-primary">
                                Buy Now
                            </button>
                        </div>
                    </center>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4 col-12 p-3 animate__animated animate__fadeInLeft">
                <div
                    className="card  m-auto animate__animated animate__heartBeat p-3 bg-info"
                    style={{ width: "14rem" }}
                >
                    <img
                        src={logo_5}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Titan</h5>
                            <p className="card-text">Rs. 12999</p>
                            <button type="button" className="btn btn-outline-primary">
                                Buy Now
                            </button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Watch
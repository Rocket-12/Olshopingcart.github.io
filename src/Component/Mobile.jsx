import React from 'react';
import logo from '../images/Mobile/iPhone 13.jpg';
import logo_1 from '../images/Mobile/One Plush.jpg';
import logo_2 from '../images/Mobile/realme 12 pro.webp';
import logo_3 from '../images/Mobile/Techno.jpg';
import logo_4 from '../images/Mobile/iphone 15 pro.jpg';
import logo_5 from '../images/Mobile/Motrola 12.webp';

function Mobile() {
    return (
        <div className="row p-4 ">
            <center><h2 className=" text-danger">Mobile Collection</h2></center>
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
                            <h5 className="card-title text-danger">iphone 13</h5>
                            <p className="card-text">Rs. 43500</p>
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
                            <h5 className="card-title text-danger">One Plush</h5>
                            <p className="card-text">Rs. 22000</p>
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
                            <h5 className="card-title text-danger">Realme 12</h5>
                            <p className="card-text">Rs. 15500</p>
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
                            <h5 className="card-title text-danger">Techno</h5>
                            <p className="card-text">Rs. 12499</p>
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
                            <h5 className="card-title text-danger">iphone 15 pro</h5>
                            <p className="card-text">Rs. 125990</p>
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
                            <h5 className="card-title text-danger">Motrola</h5>
                            <p className="card-text">Rs. 18999</p>
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

export default Mobile
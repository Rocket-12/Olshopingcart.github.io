import React from 'react';
import logo from '../images/HRX.webp';
import logo_1 from '../images/Rebook.jpg';
import logo_2 from '../images/Roadies.png';
import logo_3 from '../images/London Hills.avif';
import logo_4 from '../images/Lader.png';
import logo_5 from '../images/Royals.png';

function Section() {
    return (
        <div className="row p-4 ">
            <center><h2 className=" text-danger">Footware Collection</h2></center>
            <div className="col-sm-6 col-md-6 col-lg-4 col-12  p-3  animate__animated animate__fadeInLeft">
                <div
                    className="card  m-auto animate__animated animate__heartBeat p-3 bg-info"
                    style={{ width: "16rem" }}
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
                            <h5 className="card-title text-danger">Red-Tap</h5>
                            <p className="card-text">₹ 1200</p>
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
                    style={{ width: "16rem" }}
                >
                    <img
                        src={logo_1}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Reebook</h5>
                            <p className="card-text">₹ 2000</p>
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
                    style={{ width: "16rem" }}
                >
                    <img
                        src={logo_2}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Puma</h5>
                            <p className="card-text">₹ 5500</p>
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
                    style={{ width: "16rem" }}
                >
                    <img
                        src={logo_3}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">addidas</h5>
                            <p className="card-text">₹ 4500</p>
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
                    style={{ width: "16rem" }}
                >
                    <img
                        src={logo_4}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Royals</h5>
                            <p className="card-text">₹ 5500</p>
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
                    style={{ width: "16rem" }}
                >
                    <img
                        src={logo_5}
                        className="card-img-top"
                        alt="logo"
                        style={{ height: 180 }}
                    />
                    <center>
                        <div className="card-body">
                            <h5 className="card-title text-danger">HRX</h5>
                            <p className="card-text">₹ 3500</p>
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

export default Section;
import React from 'react';
import logo from '../images/abut us.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <div className="container mt-5">
                <center><h2 className="text-danger" >About Us</h2></center>
                <div className="row mt-5">
                    <div className=" col-sm-12 col-md-6 col-lg-6"><div className="text-center">
                        <img src={logo} className="rounded-circle shadow-lg " style={{ height: 200 }} alt="..." />
                    </div></div>

                    <div className=" col-sm-12 mt-4 col-md-6 col-lg-6 shadow-lg p-4"><p>HR-Mart platform is this related to online sell and buy footwear, Watch and Mobile product. We have been in the online shoping business for over 130 years.
                        Yes, you read that correctly, over a century plus a quarter. Today we are proud to offer our best customer
                        service to patrons both online here at ShoeStores.com and in our shoe stores in the Indianapolis, IN area. <Link >Read more..</Link>
                    </p></div>
                </div>

            </div>
        </>

    )
}

export default About
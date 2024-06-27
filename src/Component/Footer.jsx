import React from 'react';

function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4 text-danger">
                                    <i className="fas fa-gem me-3" />
                                    Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4 text-danger">Products</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Shoes
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Watch
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Mobile
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Electronic Item
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4 text-danger">Useful links</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Brand
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Help
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4 text-danger">Contact Us</h6>
                                <p>
                                    <i className="fas fa-home me-3" /> Mumbai, India, MH-421311.
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    info@example.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print me-3" /> + 01 234 567 89
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="text-center p-4 "
                    style={{ backgroundColor: "rgba(1, 0, 0, 0.05)" }}
                >
                    © 2024 Copyright:
                    <a className="text-reset fw-bold" href="#">
                        hr-mart.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </>

    )
}

export default Footer
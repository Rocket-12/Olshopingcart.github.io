import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
            <div className="container-fluid">
                <Link className="navbar-brand text-Success" to="/Slider">
                    HR-Mart
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-danger" aria-current="page" to="/Slider">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/About">
                                About Us
                            </Link>
                        </li>


                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-danger"
                                href="/"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Products
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/Section">
                                        Shoes
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/Watch_product">
                                        Watch
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to="/Mobile">
                                        Mobile
                                    </Link>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/Footer">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}



export default Navbar;
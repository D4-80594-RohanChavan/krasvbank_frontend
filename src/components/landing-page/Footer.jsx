import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/logo_white.png';

function Footer() {
    return (
        <div className="container-fluid bg-primary text-white shadow-lg py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center text-center text-lg-start">
                        <div>
                            <h5>Quick Menu</h5>
                            <p className="mb-1"><Link to="/" className="text-light text-decoration-none">Home</Link></p>
                            <p className="mb-1"><Link to="/about-us" className="text-light text-decoration-none">About Us</Link></p>
                            <p className="mb-1"><Link to="/contact-us" className="text-light text-decoration-none">Contact Us</Link></p>
                            <p className="mb-1"><Link to="/terms-and-conditions" className="text-light text-decoration-none">Terms and Conditions</Link></p>
                            <p className="mb-1"><Link to="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center text-center text-lg-start">
                        <div>
                            <h5>Company</h5>
                            <p className="mb-1">Careers</p>
                            <p className="mb-1">Copyright</p>
                            <p className="mb-1">Press</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center text-center text-lg-start">
                        <div>
                            <h5>Social Media</h5>
                            <p className="mb-1">Facebook</p>
                            <p className="mb-1">Twitter</p>
                            <p className="mb-1">Instagram</p>
                            <p className="mb-1">LinkedIn</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center text-center text-lg-start">
                        <div>
                            <h5>Resource</h5>
                            <p className="mb-1">Blog</p>
                            <p className="mb-1">Help Center</p>
                            <p className="mb-1">Newsletter</p>
                            <p className="mb-1">Product</p>
                            <p className="mb-1">Supports</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row mt-4 align-items-center text-center">
                            <div className="col-md-4 col-12 mb-3">
                                <small className="mb-0">Copyright &#169; {new Date().getFullYear()} KRASV Bank</small>
                            </div>
                            <div className="col-md-4 col-12 mb-3 text-center">
                                <img src={LogoWhite} alt="KRASV Bank" width="150px" />
                            </div>
                            <div className="col-md-4 col-12 mb-3">
                                <FiFacebook fontSize={20} className="me-4" />
                                <FiTwitter fontSize={20} className="me-4" />
                                <FiInstagram fontSize={20} className="me-4" />
                                <FiLinkedin fontSize={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

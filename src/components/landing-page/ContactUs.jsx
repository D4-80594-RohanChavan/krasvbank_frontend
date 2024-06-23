import React, { useEffect } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';
import ContactUsImg from '../../assets/contact_us.png';

function ContactUs() {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid bg-title py-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-5 fw-normal text-primary half-underline">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <div className="card bg-body-tertiary border-primary">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-12 text-center">
                                <img src={ContactUsImg} alt="Contact Us" className="img-fluid mb-4" />
                                <p className="fw-semibold"><FiMail /> info@krasvbank.com</p>
                                <p className="fw-semibold"><FiPhone /> +123-456-7890</p>
                                <p className="fw-semibold"><FiMapPin /> 1234 Bank Street, Financial City, Mumbai</p>
                            </div>
                            <div className="col-md-6 col-12">
                                <h4 className="text-center text-primary">Send Us a Message</h4>
                                <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="name" className="fw-semibold">Name <span className="text-danger">*</span></label>
                                        <input type="text" name="name" id="name" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="fw-semibold">Email <span className="text-danger">*</span></label>
                                        <input type="email" name="email" id="email" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="subject" className="fw-semibold">Subject <span className="text-danger">*</span></label>
                                        <input type="text" name="subject" id="subject" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="message" className="fw-semibold">Message <span className="text-danger">*</span></label>
                                        <textarea name="message" id="message" className="form-control" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-sm btn-primary w-100">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;

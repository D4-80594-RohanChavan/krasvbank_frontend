import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import About1 from '../../assets/about1.jpeg';
import About2 from '../../assets/about2.jpg';
import About3 from '../../assets/about3.jpg';
import About4 from '../../assets/about4.jpg';
import About5 from '../../assets/about5.jpg';

function AboutUs() {
    useEffect(() => {
        document.title = 'About Us';
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid bg-title py-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-5 fw-normal text-primary half-underline">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <h5 className="text-primary">Introduction</h5>
                <p>Welcome to KRASV Bank, where your financial well-being is our top priority. We are committed to providing exceptional banking services tailored to meet the diverse needs of our customers.</p>
                <div className="card border-primary mb-4">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-5 col-12">
                            <img src={About1} alt="About" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="card-body">
                                <h5 className="text-primary">Our Mission</h5>
                                <p>At KRASV Bank, our mission is to empower individuals, businesses, and communities by providing innovative financial solutions that promote growth, stability, and prosperity. We strive to build lasting relationships based on trust, integrity, and excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card border-primary mb-4">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-7 col-12">
                            <div className="card-body">
                                <h5 className="text-primary">Our Values</h5>
                                <ul>
                                    <li><strong>Integrity</strong>: We uphold the highest standards of honesty and transparency in all our interactions.</li>
                                    <li><strong>Customer-Centricity</strong>: Our customers are at the heart of everything we do, and we are dedicated to exceeding their expectations.</li>
                                    <li><strong>Innovation</strong>: We embrace change and continuously seek new ways to improve our services and products.</li>
                                    <li><strong>Community</strong>: We are committed to making a positive impact on the communities we serve.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img src={About2} alt="About" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
                <div className="card border-primary mb-4">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-5 col-12">
                            <img src={About3} alt="About" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="card-body">
                                <h5 className="text-primary">Our Services</h5>
                                <p>KRASV Bank offers a comprehensive range of financial services designed to meet the needs of our diverse clientele:</p>
                                <ul>
                                    <li><strong>Personal Banking</strong>: From savings accounts to personal loans, we offer a variety of products to help individuals manage their finances and achieve their goals.</li>
                                    <li><strong>Business Banking</strong>: Our business banking solutions include checking accounts, credit lines, and merchant services to support the growth and success of businesses of all sizes.</li>
                                    <li><strong>Corporate Banking</strong>: We provide tailored financial solutions for large corporations, including cash management, financing, and advisory services.</li>
                                    <li><strong>Institutional Banking</strong>: Our specialized services cater to the unique needs of institutions, offering investment management, treasury services, and more.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card border-primary mb-4">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-7 col-12">
                            <div className="card-body">
                                <h5 className="text-primary">Our History</h5>
                                <p>Founded in 1990, KRASV Bank has grown from a small community bank to a leading financial institution with a strong reputation for excellence. Over the years, we have expanded our services and presence to better serve our customers while maintaining our commitment to personalized service and community involvement.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img src={About4} alt="About" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
                <div className="card border-primary mb-4">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-5 col-12">
                            <img src={About5} alt="About" className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="card-body">
                                <h5 className="text-primary">Our Team</h5>
                                <p>Our team at KRASV Bank is composed of dedicated professionals with extensive experience in the financial industry. We are passionate about helping our customers achieve their financial goals and are always ready to provide expert advice and support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;

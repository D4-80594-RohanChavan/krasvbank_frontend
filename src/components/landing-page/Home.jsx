import React, { useEffect } from 'react';
import { CiBank } from 'react-icons/ci';
import { FaBusinessTime, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { FaPerson } from 'react-icons/fa6';
import { AiFillStar } from 'react-icons/ai';
import WhyChooseUs from '../../assets/why-choose-us.png';
import FAQ from '../../assets/faq.png';
import Mobile from '../../assets/mobile.png';
import Header from './Header';
import Footer from './Footer';

function Home() {
    useEffect(() => {
        document.title = 'KRASV Bank - Home';
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="row mb-3 align-items-center">
                    <div className="col-md-6 col-12">
                        <h1 className="display-1 text-primary-emphasis">NEXT GENERATION DIGITAL BANKING</h1>
                        <p>Take your financial life online. Your Krasv bank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                        <div className="row g-3">
                            <div className="col-md-6 col-12">
                                <Link to="/sign-in" className="btn btn-sm btn-primary rounded-pill w-100">Sign In</Link>
                            </div>
                            <div className="col-md-6 col-12">
                                <Link to="/sign-up" className="btn btn-sm btn-outline-primary rounded-pill w-100">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 bg-home">
                        <img src={Mobile} alt="Krasv" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <img src={WhyChooseUs} alt="KRASV" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-12 text-white">
                            <p className="display-6">Why Choose KRASV Bank?</p>
                            <p>At KRASV Bank, we pride ourselves on delivering innovative banking solutions that simplify your financial management. Our cutting-edge technology ensures you have access to seamless online and mobile banking, making it easier than ever to manage your finances. Whether you're transferring funds, checking your balance, or viewing transaction histories, our user-friendly interface puts everything you need right at your fingertips.</p>
                            <p>Security is a top priority at KRASV Bank. We utilize state-of-the-art encryption and multi-factor authentication to protect your personal and financial information, allowing you to bank with confidence. Additionally, our transparent fee structure means you'll never be surprised by hidden charges, providing you with a cost-effective banking experience. Our fast and efficient transaction processes ensure that your transfers, payments, and deposits are completed quickly and accurately.</p>
                            <p>We also believe in the importance of customer support and community involvement. Our dedicated support team is available 24/7 to assist with any questions or issues you may have, providing personalized service whenever you need it. Furthermore, KRASV Bank actively supports local initiatives and charities, making us a bank that not only serves its customers but also gives back to the community. Choose KRASV Bank for a secure, innovative, and community-focused banking experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-12 text-center">
                            <h1 className="display-5 text-primary fw-semibold mb-4 half-underline">Our Services</h1>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow text-center h-100">
                                <div className="card-body">
                                    <CiBank fontSize={50} className="bg-primary text-white rounded p-1 mb-3" />
                                    <h5 className="mb-3">Accounts for institutions</h5>
                                    <p>Our institutional accounts offer secure, reliable banking solutions tailored for educational institutions, non-profits, and government entities. Benefit from flexible deposit options, dedicated account management, competitive interest rates, and advanced security measures to ensure your organization's financial health.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow text-center h-100">
                                <div className="card-body">
                                    <FaPerson fontSize={50} className="bg-primary text-white rounded p-1 mb-3" />
                                    <h5 className="mb-3">Accounts for personal use</h5>
                                    <p>Simplify your life with our personal banking accounts, designed to help you manage daily expenses, save for the future, and invest wisely. Enjoy convenient online and mobile banking, low fees, and personalized financial advice to meet your unique financial goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow text-center h-100">
                                <div className="card-body">
                                    <FaBusinessTime fontSize={50} className="bg-primary text-white rounded p-1 mb-3" />
                                    <h5 className="mb-3">Accounts for businesses</h5>
                                    <p>Empower your business with our tailored accounts for small and medium-sized enterprises. Access specialized services like cash management, merchant services, and business loans, providing the financial tools and resources needed to drive your business growth and success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="card shadow text-center h-100">
                                <div className="card-body">
                                    <FaHandshake fontSize={50} className="bg-primary text-white rounded p-1 mb-3" />
                                    <h5 className="mb-3">Accounts for corporate</h5>
                                    <p>Our corporate accounts offer comprehensive solutions for large enterprises, managing complex transactions and optimizing cash flow. Leverage our advanced treasury services, global banking solutions, and expert consultation to enhance your corporate financial strategy and drive business forward.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-5 text-primary text-center fw-semibold mb-4 half-underline">Our Reach</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 mb-3 text-center">
                            <div className="card border-primary shadow h-100">
                                <div className="card-body">
                                    <p className="display-5 fw-bold mb-3">12.5K+</p>
                                    <h5 className="text-primary">ATM Machine Booth</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3 text-center">
                            <div className="card border-primary shadow h-100">
                                <div className="card-body">
                                    <p className="display-5 fw-bold mb-3">720</p>
                                    <h5 className="text-primary">Bank Outlets</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3 text-center">
                            <div className="card border-primary shadow h-100">
                                <div className="card-body">
                                    <p className="display-5 fw-bold mb-3">4.8M</p>
                                    <h5 className="text-primary">Satisfied Users</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-3 text-center">
                            <div className="card border-primary shadow h-100">
                                <div className="card-body">
                                    <p className="display-5 fw-bold mb-3">64</p>
                                    <h5 className="text-primary">Active Countries</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatainer-fluid bg-body-tertiary py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h1 className="display-5 text-primary fw-semibold mb-1">Frequently Asked<br />Questions</h1>
                            <img src={FAQ} alt="FAQ" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How do I open an account?</Accordion.Header>
                                    <Accordion.Body>
                                        Opening an account with us is easy. You can visit any of our branches with a valid ID and proof of address, or you can start the process online by filling out our account application form. One of our representatives will guide you through the rest.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What documents do I need to open an account?</Accordion.Header>
                                    <Accordion.Body>
                                        To open an account, you'll need a valid government-issued ID (such as a passport or driver's license), proof of address (such as a utility bill or lease agreement), and your Social Security Number or Tax Identification Number.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can I manage my accounts online?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer comprehensive online and mobile banking services. You can check your balance, transfer funds, pay bills, and manage your accounts anytime, anywhere through our secure online banking platform.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What types of accounts do you offer?</Accordion.Header>
                                    <Accordion.Body>
                                        We offer a variety of accounts to meet your needs, including personal checking and savings accounts, business accounts, corporate accounts, and specialized institutional accounts. Each type of account comes with unique features and benefits.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How do I apply for a loan?</Accordion.Header>
                                    <Accordion.Body>
                                        Applying for a loan is straightforward. You can apply online through our website, visit any of our branches, or contact our customer service for assistance. We'll guide you through the application process and help you find the best loan option for your needs.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>What should I do if I lose my debit card?</Accordion.Header>
                                    <Accordion.Body>
                                        If you lose your debit card, please report it immediately by calling our 24/7 customer service hotline or visiting the nearest branch. We will deactivate your lost card and issue a replacement as soon as possible to prevent unauthorized transactions.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>How can I contact customer service?</Accordion.Header>
                                    <Accordion.Body>
                                        You can reach our customer service team via phone, email, or live chat on our website. Our customer service representatives are available 24/7 to assist you with any inquiries or issues you may have.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Are my deposits insured?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, all deposits with our bank are insured by the Federal Deposit Insurance Corporation (FDIC) up to the maximum amount allowed by law, which provides peace of mind for our customers.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-5 text-primary fw-semibold mb-4 half-underline">What our customers say</h1>
                        </div>
                        <div className="col-md-4 col-12 mb-3">
                            <div className="card shadow-sm bg-body-tertiary">
                                <div className="card-body">
                                    <p>"This bank has been a game-changer for my startup. The business account options are perfectly suited for our needs, and the support team is always ready to assist with any questions."</p>
                                    <p><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /></p>
                                    <h6>~Sarah L., Entrepreneur</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mb-3">
                            <div className="card shadow-sm bg-body-tertiary">
                                <div className="card-body">
                                    <p>"I've been a customer for over a decade, and I couldn't be happier with the service. The online banking platform is intuitive, and the customer service is exceptional. They truly care about their clients."</p>
                                    <p><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /></p>
                                    <h6>~Michael R., Long-time Personal Account Holder</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mb-3">
                            <div className="card shadow-sm bg-body-tertiary">
                                <div className="card-body">
                                    <p>"Our non-profit organization has thrived thanks to their institutional accounts. The personalized attention and tailored banking solutions have made managing our finances seamless and stress-free."</p>
                                    <p><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /><AiFillStar className="me-2" fontSize="18" color="#ffd700" /></p>
                                    <h6>~Karen B., Non-Profit Director</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;

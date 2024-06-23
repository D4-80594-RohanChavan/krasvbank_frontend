import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function PrivacyPolicy() {
    useEffect(() => {
        document.title = 'Privacy Policy';
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid bg-title py-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-5 fw-normal text-primary half-underline">Privacy Policy</h1>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <div className="card border-primary">
                    <div className="card-body">
                        <h5 className="text-primary">Introduction</h5>
                        <p>Welcome to KRASV Bank. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure your data is secure.</p>
                        <h5 className="text-primary">1. Information We Collect</h5>
                        <p>We collect information to provide better services to our users. This includes:</p>
                        <ul>
                            <li><span className="fw-semibold">Personal Information:</span> Name, email address, phone number, date of birth, and other contact details.</li>
                            <li><span className="fw-semibold">Financial Information:</span> Bank account details, transaction history, and credit information.</li>
                            <li><span className="fw-semibold">Usage Data:</span> Information about how you interact with our services, including IP addresses, browser type, and operating system.</li>
                            <li><span className="fw-semibold">Cookies and Tracking Technologies:</span> Data collected through cookies, web beacons, and similar technologies to enhance your experience on our website.</li>
                        </ul>
                        <h5 className="text-primary">2. How We Use Your Information</h5>
                        <p>We use the collected information for various purposes, including:</p>
                        <ul>
                            <li>To provide and maintain our services.</li>
                            <li>To process transactions and manage accounts.</li>
                            <li>To improve our website and services based on user feedback.</li>
                            <li>To communicate with you, including responding to inquiries and sending updates.</li>
                            <li>To comply with legal obligations and enforce our terms.</li>
                        </ul>
                        <h5 className="text-primary">3. Data Sharing and Disclosure</h5>
                        <p>We do not sell your personal information. However, we may share information with:</p>
                        <ul>
                            <li><span className="fw-semibold">Service Providers:</span> Third-party companies that help us deliver and improve our services.</li>
                            <li><span className="fw-semibold">Legal Authorities:</span> When required by law or to protect our rights and safety.</li>
                            <li><span className="fw-semibold">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets.</li>
                        </ul>
                        <h5 className="text-primary">4. Data Security</h5>
                        <p>We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.</p>
                        <h5 className="text-primary">5. Your Privacy Rights</h5>
                        <p>You have the right to:</p>
                        <ul>
                            <li><span className="fw-semibold">Access and Update:</span> Request access to your personal information and update any inaccuracies.</li>
                            <li><span className="fw-semibold">Opt-Out:</span> Choose not to receive marketing communications from us.</li>
                            <li><span className="fw-semibold">Data Deletion:</span> Request the deletion of your personal information, subject to legal requirements.</li>
                        </ul>
                        <h5 className="text-primary">6. Cookies and Tracking Technologies</h5>
                        <p>We use cookies and similar technologies to enhance your experience on our website. You can control the use of cookies through your browser settings. However, disabling cookies may affect the functionality of our services.</p>
                        <h5 className="text-primary">7. Third-Party Links</h5>
                        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites and encourage you to read their privacy policies.</p>
                        <h5 className="text-primary">8. Children's Privacy</h5>
                        <p>Our services are not directed at individuals under 13. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will take steps to delete it.</p>
                        <h5 className="text-primary">9. Changes to This Privacy Policy</h5>
                        <p>We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on our website and updating the effective date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.</p>
                        <h5 className="text-primary">10. Contact Us</h5>
                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <ul>
                            <li><span className="fw-semibold">Address:</span> 1234 Bank Street, Financial City, Mumbai</li>
                            <li><span className="fw-semibold">Phone:</span> +123-456-7890</li>
                            <li><span className="fw-semibold">Email:</span> privacy@krasvbank.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy;

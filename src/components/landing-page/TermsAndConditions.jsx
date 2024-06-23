import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function TermsAndConditions() {
    useEffect(() => {
        document.title = 'Terms and Conditions';
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid bg-title py-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-5 fw-normal text-primary half-underline">Terms and Conditions</h1>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <div className="card border-primary">
                    <div className="card-body">
                        <p>Welcome to KRASV Bank's Terms and Conditions. These terms govern your use of our website and services. By accessing or using our website, you agree to abide by these terms. Please read them carefully.</p>
                        <h5 className="text-primary">1. Acceptance of Terms</h5>
                        <p>By accessing this website, you agree to be bound by these Terms and Conditions, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                        <h5 className="text-primary">2. Use License</h5>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on KRASV Bank's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on KRASV Bank's website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                        <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by KRASV Bank at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                        <h5 className="text-primary">3. Disclaimer</h5>
                        <p>The materials on KRASV Bank's website are provided on an 'as is' basis. KRASV Bank makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        <p>Further, KRASV Bank does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                        <h5 className="text-primary">4. Limitations</h5>
                        <p>In no event shall KRASV Bank or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KRASV Bank's website, even if KRASV Bank or a KRASV Bank authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                        <h5 className="text-primary">5. Revisions and Errata</h5>
                        <p>The materials appearing on KRASV Bank's website could include technical, typographical, or photographic errors. KRASV Bank does not warrant that any of the materials on its website are accurate, complete, or current. KRASV Bank may make changes to the materials contained on its website at any time without notice. However, KRASV Bank does not make any commitment to update the materials.</p>
                        <h5 className="text-primary">6. Links</h5>
                        <p>KRASV Bank has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by KRASV Bank of the site. Use of any such linked website is at the user's own risk.</p>
                        <h5 className="text-primary">7. Governing Law</h5>
                        <p>Any claim relating to KRASV Bank's website shall be governed by the laws of [Your Country], without regard to its conflict of law provisions.</p>
                        <h5 className="text-primary">8. Modifications</h5>
                        <p>KRASV Bank may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions.</p>
                        <h5 className="text-primary">9. Contact Information</h5>
                        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                        <ul>
                            <li><span className="fw-semibold">Address:</span> 1234 Bank Street, Financial City, Mumbai</li>
                            <li><span className="fw-semibold">Phone:</span> +123-456-7890</li>
                            <li><span className="fw-semibold">Email:</span> info@krasvbank.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TermsAndConditions;

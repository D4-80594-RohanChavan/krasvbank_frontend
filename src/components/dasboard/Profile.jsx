import React, { useEffect, useState } from 'react';
import PageTitle from '../helpers/PageTitle';

function Profile() {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        document.title = 'Profile';
    }, []);

    return (
        <div className="container-fluid p-0">
            <PageTitle breadcrumb={[{ name: 'Profile' }]} />
            <div className="row">
                <div className="col-12">
                    <div className="card border-primary">
                        <div className="card-header bg-primary-subtle border-primary">
                            <h6 className="mb-0">Profile</h6>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-6 col-12">
                                    <p className="mb-0"><span className="fw-semibold">Account Number:</span> {user?.accountNumber ?? ''}</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className="mb-0"><span className="fw-semibold">Name:</span> {user?.name ?? ''}</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className="mb-0"><span className="fw-semibold">Gender:</span> {user?.gender ?? ''}</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className="mb-0"><span className="fw-semibold">Email:</span> {user?.email ?? ''}</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className="mb-0"><span className="fw-semibold">Phone Number:</span> {user?.phoneNumber ?? ''}</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className="mb-0"><span className="fw-semibold">Alternate Phone Number:</span> {user?.alternativePhoneNumber ?? ''}</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className="mb-0"><span className="fw-semibold">State:</span> {user?.stateOfOrigin ?? ''}</p>
                                </div>
                                <div className="col-12">
                                    <p className="mb-0"><span className="fw-semibold">Address:</span> {user?.address ?? ''}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

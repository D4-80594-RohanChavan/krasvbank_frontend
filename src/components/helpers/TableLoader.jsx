import React from 'react';

function TableLoader() {
    return (
        <div className="container-fluid">
            <div className="row text-center p-5">
                <div className="col-12">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="col-12">
                    <h6 className="text-primary mb-0">Loading...</h6>
                </div>
            </div>
        </div>
    );
}

export default TableLoader;

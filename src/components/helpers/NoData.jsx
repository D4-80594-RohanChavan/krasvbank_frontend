import React from 'react';
import NoDataSrc from '../../assets/no_data.svg';

function NoData() {
    return (
        <div className="text-center p-3">
            <img src={NoDataSrc} alt="No Data" height={150} />
            <p className="text-primary mt-3 mb-0">There are no records to display.</p>
        </div>
    );
}

export default NoData;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGrid } from 'react-icons/fi';

function PageTitle(props) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const breadcrumbLength = props?.breadcrumb?.length;

    return (
        <div className="row mt-2">
            <div className="col-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb align-items-center mb-2">
                        <li className="breadcrumb-item" title="Dashboard"><Link to={user?.role === 'ROLE_ADMIN' ? '/admin-dashboard' : '/dashboard'} className="text-dark text-decoration-none"><FiGrid fontSize={22} /></Link></li>
                        {props.breadcrumb.map((item, index) => (
                            item && (
                                <li className={`breadcrumb-item ${index + 1 === breadcrumbLength ? 'last-crumb' : ''}`} key={index}>
                                    {item?.url !== undefined ? <Link to={item.url} className="text-dark text-decoration-none">{item.name}</Link> : item.name}
                                </li>
                            )
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default PageTitle;

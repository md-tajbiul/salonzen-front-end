import { faBox, faComments, faPlus, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between align-items-center" style={{marginTop:"5vh", height:'90vh'}}>
            <ul className="list-unstyled">
                <li className='listStyle'>
                    <Link to="/all-booking">
                        <FontAwesomeIcon icon={faBox} /> <span>Booking List</span>
                    </Link>
                </li>
                <li className='listStyle'>
                    <Link to="/add-service">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li className='listStyle'>
                    <Link to="/new-admin">
                        <FontAwesomeIcon icon={faUserShield} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li className='listStyle'>
                    <Link to="/review">
                        <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                    </Link>
                </li>
                <li className='listStyle'>
                    <Link to="/manage-service">
                        <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
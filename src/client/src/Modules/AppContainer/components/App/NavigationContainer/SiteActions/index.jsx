/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * The site actions dropdown component
 * @author Anthony P. Pancerella
 */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountModal from '../AccountModal';
import './style.css';

/**
 * The SiteActions component.
 * @returns {React.Element}
 */
const SiteActions = () => {
    const dispatch = useDispatch();
    const [showAccountModal, setShowAccountModal] = useState(false);
    const userAccount = useSelector((state) => state.user.account);
    const dropdownTitle = Object.keys(userAccount).length ? `Welcome, ${userAccount.User.FirstName} ${userAccount.User.LastName}` : 'Unknown User';

    useEffect(() => {
        dispatch.user.fetchUserAccount();
    }, []);

    return (
        <div className="navbar-nav ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {dropdownTitle}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" onClick={() => setShowAccountModal(!showAccountModal)}>My Account</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item">Administration</a>
                        <a className="dropdown-item">Settings</a>
                    </div>
                </li>
            </ul>
            <AccountModal show={showAccountModal} toggleFunc={(show) => setShowAccountModal(show)} />
        </div>
    );
};

export default SiteActions;

/**
 * Navigation container component.
 * @author Anthony P. Pancerella
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import SiteActions from './SiteActions';
import AppConfigs from '../../../../../Constants';
import './style.css';

/**
 * The navigation container component.
 * @returns {React.Element}
 */
const NavigationContainer = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-custom">
                <NavLink className="navbar-brand" exact to={`${AppConfigs.siteCollectionPath}/`}>
                    Expense Tracker
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="collapsedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavLink className="nav-link" exact to={`${AppConfigs.siteCollectionPath}/Home`}>
                            Home
                        </NavLink>
                    </ul>
                    <SiteActions />
                </div>
            </nav>
        </>
    );
};

export default NavigationContainer;

/**
 * Tile component to contain content
 * @author Anthony P. Pancerella
 */
import React from 'react';
import proptypes from 'prop-types';
import './style.css';

/**
 * The Tile component.
 * @returns {React.Element}
 */
const Tile = ({ children }) => (
    <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__body kt-portlet__body--fluid">
            { children }
        </div>
    </div>
);

Tile.propTypes = {
    children: proptypes.element
};

export default Tile;

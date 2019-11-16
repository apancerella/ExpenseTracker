/* eslint-disable max-len */
/* eslint-disable react/jsx-wrap-multilines */
/**
 * The table loading bar
 * @author Anthony P. Pancerella
 */
import React from 'react';
import proptypes from 'prop-types';

/**
 * Table loading bar component.
 * @returns {React.Element}
 */
const LoadingBar = ({ isLoading = false }) => {
    return (
        <React.Fragment>
            {
                (isLoading) ?
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%', backgroundRepeat: 'repeat' }}>
                            Fetching Table Data
                        </div>
                    </div> : 'Table is Empty'
            }
        </React.Fragment>
    );
};

LoadingBar.propTypes = {
    isLoading: proptypes.bool
};

export default LoadingBar;
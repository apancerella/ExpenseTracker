/**
 * The table pagination component.
 * @author Anthony P. Pancerella
 */

import React from 'react';

/**
 * The Pagination component.
 * @returns {React.Element}
 */
const Pagination = ({ options, currSizePerPage, onSizePerPageChange }) => {
    console.log(options, currSizePerPage, onSizePerPageChange)
    console.log("k;alkjfd;lkj")
    return(
        <div className="dropdown">
            {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currSizePerPage}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {
                    options.map((option) => (<button key={option.text} className="dropdown-item" type="button" onClick={() => onSizePerPageChange(option.page)}>{option.text}</button>))
                }
            </div> */}
        </div>
    );
}

export default Pagination;
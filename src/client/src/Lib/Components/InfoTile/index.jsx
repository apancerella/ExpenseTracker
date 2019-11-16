import React from 'react';
import proptypes from 'prop-types';
import Tile from '../Tile';
import './style.css';

const InfoTile = ({ header, displayValue }) => {
    
    return(
        <Tile>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <h6 style={{fontWeight: 'bold'}}>{ header }</h6>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div  className="col-md-12">
                        <label style={{fontSize: 24}}>
                            { displayValue }
                        </label>
                    </div>
                    <div  className="col-md-6">

                    </div>
                </div>
            </div>
        </Tile>
    );
}

InfoTile.propTypes = {
    header: proptypes.string.isRequired,
    displayValue: proptypes.node.isRequired
    // icon: proptypes.ch
};

export default InfoTile;
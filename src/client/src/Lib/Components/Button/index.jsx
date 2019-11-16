/* eslint-disable react/button-has-type */
/**
 * Generic button component.
 * @author {React.Element}
 */
import React from 'react';
import proptypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './style.css';

/**
 * The Button component
 * @returns {React.Element}
 */
const Button = ({
    color = 'primary', type = 'button', label = '', disabled = false,
    btnPaddingTop = 6, btnPaddingBottom = 6, onClick = null, size = '',
    icon = '', iconSpin = false
}) => (
    <button
        className={`btn btn-${color} ${size}`}
        type={type}
        disabled={disabled}
        style={{ paddingTop: btnPaddingTop, paddingBottom: btnPaddingBottom }}
        onClick={() => {
            if (onClick !== null)
                onClick();
        }}
    >
        <span>
            <FontAwesome name={icon} spin={iconSpin} />
            &nbsp;
            {label}
        </span>
    </button>
);

Button.propTypes = {
    color: proptypes.string,
    type: proptypes.string,
    label: proptypes.string,
    disabled: proptypes.bool,
    btnPaddingTop: proptypes.number,
    btnPaddingBottom: proptypes.number,
    onClick: proptypes.func,
    size: proptypes.string,
    icon: proptypes.string,
    iconSpin: proptypes.bool
};

export default Button;

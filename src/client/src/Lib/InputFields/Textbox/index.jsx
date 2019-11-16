/* eslint-disable linebreak-style */
import React from 'react';
import proptypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import '../style.css';

/**
 * The Textbox component.
 * @returns {React.Element}
 */
const Textbox = ({
    name,
    label,
    value,
    placeholder = '',
    disabled = false,
    labelPosition = 2,
    inputPosition = 10,
    onChangeFunction = null,
    loading = false,
    inputState = '',
    errorMessage = ''
}) => (
    <div className="form-group row">
        <div className={`col-sm-${labelPosition} col-form-label`}>
            <strong>{label === '' ? '' : `${label}:`}</strong>
        </div>
        <div className={`col-sm-${inputPosition}`}>
            <input
                name={name}
                type="text"
                className={`form-control ${inputState}`}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={onChangeFunction}
            />
            <span className="feedback-icon" hidden={!loading}><FontAwesome name="check" spin className="fa fa-spinner" /></span>
            <div className="invalid-feedback d-block">{errorMessage}</div>
        </div>
    </div>
);

Textbox.propTypes = {
    name: proptypes.string.isRequired,
    label: proptypes.string.isRequired,
    value: proptypes.node.isRequired,
    placeholder: proptypes.string,
    disabled: proptypes.bool,
    labelPosition: proptypes.number,
    inputPosition: proptypes.number,
    onChangeFunction: proptypes.func,
    loading: proptypes.bool,
    inputState: proptypes.oneOf(['', 'invalidFormInput', 'validFormInput']),
    errorMessage: proptypes.string
};

export default Textbox;

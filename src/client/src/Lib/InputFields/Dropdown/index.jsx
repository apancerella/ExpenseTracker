/* eslint-disable react/forbid-prop-types */
/**
 * Dropdown field component to be used in forms
 * @author Anthony P. Pancerella
 */
import React from 'react';
import proptypes from 'prop-types';
import Select from 'react-select';
import FontAwesome from 'react-fontawesome';
import 'react-select/dist/react-select.css';
import '../style.css';

/**
 * The Dropdown component
 * @returns {React.Element}
 */
const Dropdown = ({
    label,
    value,
    options,
    onChangeFunction = null,
    disabled = false,
    loading = false,
    placeholder = '',
    displayField = '',
    valueField = '',
    labelPosition = 2,
    inputPosition = 10,
    isClearable = true,
    isMultiselect = false,
    errorMessage = ''
}) => (
    <div className="form-group row">
        <div className={`col-sm-${labelPosition}`}>
            <strong>{`${label}:`}</strong>
        </div>
        <div className={`col-sm-${inputPosition}`}>
            <Select
                className={errorMessage ? 'invalidDropdown' : ''}
                disabled={disabled}
                multi={isMultiselect}
                options={options.map((item) => ({ label: item[displayField], value: item[valueField] }))}
                placeholder={placeholder || null}
                simpleValue
                isClearable={isClearable}
                onChange={(option) => ((onChangeFunction) ? onChangeFunction(option) : null)}
                value={value}
            />
            <div className="feedback-icon" hidden={!loading}>
                <FontAwesome name="check" spin className="fa fa-spinner" />
            </div>
            <div className="invalid-feedback d-block">{errorMessage}</div>
        </div>
    </div>
);

Dropdown.propTypes = {
    label: proptypes.string.isRequired,
    value: proptypes.node.isRequired,
    options: proptypes.array.isRequired,
    onChangeFunction: proptypes.func,
    disabled: proptypes.bool,
    loading: proptypes.bool,
    placeholder: proptypes.string,
    displayField: proptypes.string.isRequired,
    valueField: proptypes.string.isRequired,
    labelPosition: proptypes.number,
    inputPosition: proptypes.number,
    isClearable: proptypes.bool,
    isMultiselect: proptypes.bool,
    errorMessage: proptypes.string
};

export default Dropdown;

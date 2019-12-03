/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    const errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.FirstName = !isEmpty(data.FirstName) ? data.FirstName : ''; 
    data.LastName = !isEmpty(data.LastName) ? data.LastName : '';
    data.Email = !isEmpty(data.Email) ? data.Email : '';
    data.Password = !isEmpty(data.Password) ? data.Password : '';
    data.Password2 = !isEmpty(data.Password2) ? data.Password2 : '';

    if (Validator.isEmpty(data.FirstName)) {
        errors.FirstName = 'FirstName field is required';
    }
    if (Validator.isEmpty(data.LastName)) {
        errors.LastName = 'LastName field is required';
    }
    // Email checks
    if (Validator.isEmpty(data.Email)) {
        errors.Email = 'Email field is required';
    } else if (!Validator.isEmail(data.Email)) {
        errors.Email = 'Email is invalid';
    }
    // Password checks
    if (Validator.isEmpty(data.Password)) {
        errors.Password = 'Password field is required';
    }
    if (Validator.isEmpty(data.Password2)) {
        errors.Password2 = 'Confirm Password field is required';
    }
    if (!Validator.isLength(data.Password, { min: 6, max: 30 })) {
        errors.Password = 'Password must be at least 6 characters';
    }
    if (!Validator.equals(data.Password, data.Password2)) {
        errors.Password2 = 'Passwords must match';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};

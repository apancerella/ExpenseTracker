/* eslint-disable complexity */
/**
 * This component used to register a new user
 * @author Anthony P. Pancerella
 */

import React from 'react';
import proptypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Textbox from '../../../../../Lib/InputFields/Textbox';
import Button from '../../../../../Lib/Components/Button';
import { useForm } from '../../../../../Lib/CustomHooks';
import './style.css';
/**
 * The RegisterUser Component
 * @returns {React.Element}
 */
const RegisterUser = () => {
    const dispatch = useDispatch();

    /**
     * Form validation function
     * @param {*} values - the values object
     * @returns {Object}
     */
    const validate = (values) => {
        const errors = {};
        if (!values.FirstName) errors.FirstName = 'First name is required';
        if (!values.LastName) errors.LastName = 'Last name is required';

        if (!values.Email) errors.Email = 'Email is required';
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.Email.toString())) errors.Email = 'Not a valid email.';

        if (!values.Password) errors.Password = 'Password is required';
        else if (values.Password.length < 6) errors.Password = 'Password must be at least 7 characters';

        if (!values.Password2) errors.Password2 = 'Password re-enter is required';
        else if (values.Password2.length < 6) errors.Password2 = 'Password must be at least 7 characters';
        else if (values.Password !== values.Password2) errors.Password2 = 'Passwords do not match.';

        return errors;
    };
    /**
     * Form submit function
     * @param {*} values - the values object
     */
    const submit = (values) => {
        dispatch.user.register(values);
    };

    const {
        formValues, errors, handleChange, handleSubmit, handleReset
    } = useForm({}, validate, submit);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Register New User</h5>
                            <form onSubmit={handleSubmit}>
                                <Textbox
                                    name="FirstName"
                                    placeholder="Enter first name"
                                    label=""
                                    onChangeFunction={handleChange}
                                    value={formValues.FirstName || ''}
                                    inputState={(errors.FirstName) ? 'invalidFormInput' : ''}
                                    errorMessage={errors.FirstName}
                                    labelPosition={0}
                                    inputPosition={12}
                                />
                                <Textbox
                                    name="LastName"
                                    placeholder="Enter last name"
                                    label=""
                                    onChangeFunction={handleChange}
                                    value={formValues.LastName || ''}
                                    inputState={(errors.LastName) ? 'invalidFormInput' : ''}
                                    errorMessage={errors.LastName}
                                    labelPosition={0}
                                    inputPosition={12}
                                />
                                <Textbox
                                    name="Email"
                                    placeholder="Enter email"
                                    label=""
                                    onChangeFunction={handleChange}
                                    value={formValues.Email || ''}
                                    inputState={(errors.Email) ? 'invalidFormInput' : ''}
                                    errorMessage={errors.Email}
                                    labelPosition={0}
                                    inputPosition={12}
                                />
                                <Textbox
                                    name="Password"
                                    placeholder="Enter password"
                                    label=""
                                    type="password"
                                    onChangeFunction={handleChange}
                                    value={formValues.Password || ''}
                                    inputState={(errors.Password) ? 'invalidFormInput' : ''}
                                    errorMessage={errors.Password}
                                    labelPosition={0}
                                    inputPosition={12}
                                />
                                <Textbox
                                    name="Password2"
                                    placeholder="Re-Enter Password"
                                    label=""
                                    type="password"
                                    onChangeFunction={handleChange}
                                    value={formValues.Password2 || ''}
                                    inputState={(errors.Password2) ? 'invalidFormInput' : ''}
                                    errorMessage={errors.Password2}
                                    labelPosition={0}
                                    inputPosition={12}
                                />
                                <hr className="my-4" />
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <Button
                                        color="primary"
                                        type="submit"
                                        label="Register"
                                        btnPaddingTop={2}
                                        btnPaddingBottom={2}
                                    />
                                    &nbsp;&nbsp;
                                    <Button
                                        color="warning"
                                        type="button"
                                        label="Reset"
                                        onClick={handleReset}
                                        btnPaddingTop={2}
                                        btnPaddingBottom={2}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

RegisterUser.propTypes = {
    // test: proptypes.node
};

export default RegisterUser;

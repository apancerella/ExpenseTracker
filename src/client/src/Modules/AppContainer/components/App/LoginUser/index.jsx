/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable complexity */
/**
 * This component used to login a new user
 * @author Anthony P. Pancerella
 */

import React from 'react';
import proptypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Textbox from '../../../../../Lib/InputFields/Textbox';
import Button from '../../../../../Lib/Components/Button';
import { useForm } from '../../../../../Lib/CustomHooks';
import './style.css';

/**
 * The LoginUser Component
 * @returns {React.Element}
 */
const LoginUser = (props) => {
    const dispatch = useDispatch();

    /**
     * Form validation function
     * @param {*} values - the values object
     * @returns {Object}
     */
    const validate = (values) => {
        const errors = {};
        if (!values.Email) errors.Email = 'Email is required';
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.Email.toString())) errors.Email = 'Not a valid email.';
        if (!values.Password) errors.Password = 'Password is required';
        return errors;
    };
    /**
     * Form submit function
     * @param {*} values - the values object
     */
    const submit = (values) => {
        dispatch.user.login(values);
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
                            <h5 className="card-title text-center">Login</h5>
                            <form onSubmit={handleSubmit}>
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
                                <hr className="my-4" />
                                <div className="col-md-12" style={{ textAlign: 'center' }}>
                                    <Button
                                        color="primary"
                                        type="submit"
                                        label="Login"
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
                                <div style={{ marginTop: 15 }}>
                                    <Button
                                        color="success"
                                        type="submit"
                                        label="Resister New User"
                                        onClick={() => props.history.push('/ExpenseTracker/register')}
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

LoginUser.propTypes = {
    // test: proptypes.node
};

export default withRouter(LoginUser);

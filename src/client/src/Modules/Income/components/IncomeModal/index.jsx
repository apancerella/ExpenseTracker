/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
/**
 * This shows the create/edit income modal.
 * @author Anthony P. Pancerella
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import proptypes from 'prop-types';
import Textbox from '../../../../Lib/InputFields/Textbox';
import Dropdown from '../../../../Lib/InputFields/Dropdown';
import Button from '../../../../Lib/Components/Button';
import { useForm } from '../../../../Lib/CustomHooks';

/**
 * The IncomeModal component.
 * @returns {React.Element}
 */
const IncomeModal = ({ incomeId, show = false, toggleFunc = null }) => {
    const dispatch = useDispatch();
    const incomeTypes = useSelector((state) => state.income.incomeTypes);
    /**
     * Form validation function
     * @param {*} values - the values object
     * @returns {Object}
     */
    const validate = (values) => {
        const errors = {};
        if (!values.Name) errors.Name = 'Name is required';
        if (!values.IncomeType) errors.IncomeType = 'Income type is required';
        
        if (!values.Amount) errors.Amount = 'Amount is required';
        else if (!(/^[0-9]+([,.][0-9]+)?$/g).test(values.Amount.toString())) errors.Amount = 'Value must be a valid number';
        
        return errors;
    };
    
    /**
     * Form submit function
     * @param {*} values - the values object
     */
    const submit = (values) => {
        if (!incomeId) dispatch.income.createIncomeEntry(values);
        else dispatch.income.updateIncomeEntry(values);
        toggleFunc(!show);
    };
    
    const defaultValues = useSelector((state) => ((!incomeId) ? {} : state.income.monthlyIncomeList.find((item) => item._id === incomeId)));
    
    const { formValues, errors, handleChange, handleSubmit, handleReset } = useForm(defaultValues, validate, submit);
    /**
     * Resets the form when the income id changes
     */
    useEffect(() => { handleReset(); }, [incomeId]);
    useEffect(() => { dispatch.income.fetchIncomeTypes(); }, []);
    return (
        <>
            <Modal size="lg" show={show} onHide={() => { toggleFunc(!show); handleReset(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{!incomeId ? 'Create New Income' : 'Edit Income'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <Textbox
                            name="Name"
                            label="Name"
                            onChangeFunction={handleChange}
                            value={formValues.Name || ''}
                            inputState={(errors.Name) ? 'invalidFormInput' : ''}
                            errorMessage={errors.Name}
                        />
                        <Dropdown
                            label="Income Type"
                            options={incomeTypes}
                            displayField="IncomeType"
                            valueField="_id"
                            value={(formValues.IncomeType) ? formValues.IncomeType._id : 0}
                            onChangeFunction={(event) => {
                                handleChange({
                                    type: 'dropdown',
                                    target: {
                                        name: ['IncomeType', '_id'],
                                        value: event
                                    }
                                });
                            }}
                            errorMessage={errors.IncomeType}
                        />
                        <Textbox
                            name="Amount"
                            label="Amount"
                            onChangeFunction={handleChange}
                            value={formValues.Amount || ''}
                            inputState={(errors.Amount) ? 'invalidFormInput' : ''}
                            errorMessage={errors.Amount}
                        />
                        <Textbox
                            name="Description"
                            label="Description"
                            onChangeFunction={handleChange}
                            value={formValues.Description || ''}
                            inputState={(errors.Description) ? 'invalidFormInput' : ''}
                            errorMessage={errors.Description}
                        />
                        <div className="col-md-12" style={{ textAlign: 'center' }}>
                            <Button
                                color="primary"
                                type="submit"
                                label={!incomeId ? 'Create' : 'Update'}
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
                </Modal.Body>
            </Modal>
        </>
    );
};

IncomeModal.propTypes = {
    incomeId: proptypes.node,
    show: proptypes.bool.isRequired,
    toggleFunc: proptypes.func.isRequired
};

export default IncomeModal;

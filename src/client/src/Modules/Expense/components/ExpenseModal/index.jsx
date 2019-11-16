/* eslint-disable complexity */
/* eslint-disable object-curly-newline */
/* eslint-disable react/forbid-prop-types */
/**
 * This shows the create/edit expense modal.
 * @author Anthony P. Pancerella
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import proptypes from 'prop-types';
import Textbox from '../../../../Lib/InputFields/Textbox';
import Button from '../../../../Lib/Components/Button';
import Dropdown from '../../../../Lib/InputFields/Dropdown';
import { useForm } from '../../../../Lib/CustomHooks';

/**
 * The ExpenseModal component.
 * @returns {React.Element}
 */
const ExpenseModal = ({ expenseId = 0, show = false, toggleFunc = null }) => {
    const dispatch = useDispatch();
    const expenseTypes = useSelector((state) => state.expense.expenseTypes)

    /**
     * Form validation function
     * @param {*} values - the values object
     * @returns {Object}
     */
    const validate = (values) => {
        const errors = {};
        if (!values.Name) errors.Name = 'Name is required';

        if (!values.ExpenseTypeId) errors.ExpenseTypeId = 'Expense type is required';

        if (!values.Amount) errors.Amount = 'Amount is required';
        else if (!(/^[0-9]+([,.][0-9]+)?$/g).test(values.Amount.toString())) errors.Amount = 'Value must be a valid number';

        return errors;
    };

    /**
     * Form submit function
     * @param {*} values - the values object
     */
    const submit = (values) => {
        if (expenseId === 0) dispatch.expense.createExpenseEntry(values);
        else dispatch.expense.updateExpenseEntry(values);
        toggleFunc(!show);
    };

    const defaultValues = useSelector((state) => ((expenseId === 0) ? {} : state.expense.monthlyExpenseList.find((item) => item.Id === expenseId)));

    const { formValues, errors, handleChange, handleSubmit, handleReset } = useForm(defaultValues, validate, submit);

    useEffect(() => { handleReset(); }, [expenseId]);
    useEffect(() => { dispatch.expense.fetchExpenseTypes(); }, []);

    return (
        <>
            <Modal size="lg" show={show} onHide={() => { toggleFunc(!show); handleReset(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{expenseId === 0 ? 'Create New Expense' : 'Edit Expense'}</Modal.Title>
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
                            label="Expense Type"
                            options={expenseTypes}
                            displayField="ExpenseType"
                            valueField="Id"
                            value={formValues.ExpenseTypeId || 0}
                            onChangeFunction={(event) => {
                                handleChange({
                                    type: 'dropdown',
                                    target: {
                                        name: 'ExpenseTypeId',
                                        value: event
                                    }
                                });
                            }}
                            errorMessage={errors.ExpenseTypeId}
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
                                label={expenseId === 0 ? 'Create' : 'Update'}
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

ExpenseModal.propTypes = {
    expenseId: proptypes.number.isRequired,
    show: proptypes.bool.isRequired,
    toggleFunc: proptypes.func.isRequired
};

export default ExpenseModal;

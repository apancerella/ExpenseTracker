/**
 * The dashboard expense table display.
 * @author Anthony P. Pancerella
 */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFormatter } from '../../../../Lib/Formatters';
import Table from '../../../../Lib/Table';
import Button from '../../../../Lib/Components/Button';
import ExpenseModal from '../ExpenseModal';
import './style.css';

/**
 * The ExpenseTable component.
 * @returns {React.Element}
 */
const MonthlyExpenseTable = () => {
    const dispatch = useDispatch();
    const [showExpenseModal, setShowExpenseModal] = useState(false);
    const [expenseId, setExpenseId] = useState(null);
    const monthlyExpenseList = useSelector((state) => state.expense.monthlyExpenseList);

    useEffect(() => {
        dispatch.expense.fetchMonthlyExpenses();
    }, []);

    const tableOutline = [{
        dataField: '_id',
        text: 'Id',
        hidden: true,
        sort: true,
        headerStyle: { whiteSpace: 'pre-wrap' },
        headerAlign: 'center',
        align: 'center'
    },
    {
        dataField: 'Name',
        text: 'Name',
        sort: true,
        headerStyle: { whiteSpace: 'pre-wrap' },
        headerAlign: 'center',
        align: 'center'
    },
    {
        dataField: 'ExpenseType.ExpenseType',
        text: 'Type',
        sort: true,
        headerStyle: { whiteSpace: 'pre-wrap' },
        headerAlign: 'center',
        align: 'center'
    },
    {
        dataField: 'Amount',
        text: 'Amount',
        sort: true,
        headerStyle: { whiteSpace: 'pre-wrap' },
        headerAlign: 'center',
        align: 'center',
        formatter: currencyFormatter
    },
    {
        dataField: '1',
        text: 'Edit',
        sort: true,
        headerStyle: { whiteSpace: 'pre-wrap' },
        headerAlign: 'center',
        align: 'center',
        formatter: (cell, row) => (
            <Button
                color="primary"
                type="button"
                label="Edit"
                onClick={() => {
                    setExpenseId(row._id);
                    setShowExpenseModal(!showExpenseModal);
                }}
                btnPaddingTop={0}
                btnPaddingBottom={0}
                icon="edit"
            />
        )
    },
    {
        dataField: '2',
        text: 'Delete',
        headerStyle: { whiteSpace: 'pre-wrap' },
        headerAlign: 'center',
        align: 'center',
        formatter: (cell, row) => (
            <Button
                color="danger"
                type="button"
                label="Delete"
                onClick={() => dispatch.expense.deleteExpenseEntry(row._id)}
                btnPaddingTop={0}
                btnPaddingBottom={0}
                icon="trash-alt"
            />
        )
    }];
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h5 style={{fontWeight: 'bold'}}>Monthly Expenses</h5>
            </div>
            <Button
                color="success"
                type="button"
                label="Create New"
                onClick={() => {
                    setExpenseId(null);
                    setShowExpenseModal(!showExpenseModal);
                }}
                btnPaddingTop={2}
                btnPaddingBottom={2}
                icon="plus"
            />
            <Table
                keyValue="_id"
                columns={tableOutline}
                list={monthlyExpenseList}
                loading={false}
            />
            <ExpenseModal
                expenseId={expenseId}
                show={showExpenseModal}
                toggleFunc={(show) => {
                    setShowExpenseModal(show);
                    setExpenseId(null);
                }}
            />
        </>
    );
};

export default MonthlyExpenseTable;

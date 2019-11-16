/**
 * The dashboard income table display.
 * @author Anthony P. Pancerella
 */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFormatter } from '../../../../Lib/Formatters';
import Table from '../../../../Lib/Table';
import Button from '../../../../Lib/Components/Button';
import IncomeModal from '../IncomeModal';
import './style.css';

/**
 * The IncomeTable component.
 * @returns {React.Element}
 */
const MonthlyIncomeTable = () => {
    const dispatch = useDispatch();
    const [showIncomeModal, setShowIncomeModal] = useState(false);
    const [incomeId, setIncomeId] = useState(0);
    const monthlyIncomeList = useSelector((state) => state.income.monthlyIncomeList);

    useEffect(() => {
        dispatch.income.fetchMonthlyIncomes();
    }, []);

    const tableOutline = [{
        dataField: 'Id',
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
                    setIncomeId(row.Id);
                    setShowIncomeModal(!showIncomeModal);
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
                onClick={() => dispatch.income.deleteIncomeEntry(row.Id)}
                btnPaddingTop={0}
                btnPaddingBottom={0}
                icon="trash-alt"
            />
        )
    }];
    return (
        <>
            <div style={{textAlign: 'center'}}>
                <h5 style={{fontWeight: 'bold'}}>Monthly Incomes</h5>
            </div>
            <Button
                color="success"
                type="button"
                label="Create New"
                onClick={() => {
                    setIncomeId(0);
                    setShowIncomeModal(!showIncomeModal);
                }}
                btnPaddingTop={2}
                btnPaddingBottom={2}
                icon="plus"
            />
            <Table
                keyValue="Id"
                columns={tableOutline}
                list={monthlyIncomeList}
                loading={false}
            />
            <IncomeModal
                incomeId={incomeId}
                show={showIncomeModal}
                toggleFunc={(show) => {
                    setShowIncomeModal(show);
                    setIncomeId(0);
                }}
            />
        </>
    );
};

export default MonthlyIncomeTable;

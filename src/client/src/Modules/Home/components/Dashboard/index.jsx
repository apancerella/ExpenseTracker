/**
 * The Home page component of the app.
 * This acts as a dashboard
 * @author Anthony P. Pancerella
 */
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import InfoTile from '../../../../Lib/Components/InfoTile';
import Tile from '../../../../Lib/Components/Tile';
import MonthlyIncomeTable from '../../../Income/components/MonthlyIncomeTable';
import MonthlyExpenseTable from '../../../Expense/components/MonthlyExpenseTable';
import ProjectionChart from '../ProjectionChart';
import './style.css';
import { currencyFormatter, percentDecimalFormatter } from '../../../../Lib/Formatters';

/**
 * The Home component.
 * @returns {React.Element}
 */
const Home = () => {
    const savingsGoal = 500;
    const totalMonthlyIncome = useSelector((state) => state.income.monthlyIncomeList.reduce((prev, curr) => (prev + parseInt(curr.Amount)), 0));
    const totalMonthlyExpense = useSelector((state) => state.expense.monthlyExpenseList.reduce((prev, curr) => (prev + parseInt(curr.Amount)), 0));
    const savingsGoalStatus = (totalMonthlyIncome - totalMonthlyExpense) / savingsGoal;
    const yearlySavings = (totalMonthlyIncome - totalMonthlyExpense) * 12;
    return (
        <div className="container">
            <div className="row" style={{ paddingTop: 15 }}>
                <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                    <div className="row" style={{ paddingTop: 15 }}>
                    <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                            <InfoTile 
                                header={'Total Monthly Income'}
                                displayValue={currencyFormatter(totalMonthlyIncome)}
                                topRight={''}
                            />
                        </div>
                        <div className="col-lg-6 col-xl-6 order-lg-2 order-xl-2">
                            <InfoTile 
                                header={'Total Monthly Expense'}
                                displayValue={currencyFormatter(totalMonthlyExpense)}
                                topRight={''}
                            />
                        </div>
                    </div>
                    <div className="row" style={{ paddingTop: 15 }}>
                        <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                            <InfoTile 
                                header={'Savings Goal Status'}
                                displayValue={percentDecimalFormatter(savingsGoalStatus)}
                            />
                        </div>
                        <div className="col-lg-6 col-xl-6 order-lg-2 order-xl-2">
                            <InfoTile 
                                header={'Yearly Savings'}
                                displayValue={currencyFormatter(yearlySavings)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1" style={{ paddingTop: 15 }}>
                    <Tile>
                        <ProjectionChart />
                    </Tile>
                </div>
            </div>
            <div className="row" style={{ paddingTop: 15 }}>
                <div className="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                    <Tile>
                        <MonthlyIncomeTable />
                    </Tile>
                </div>
                <div className="col-lg-6 col-xl-6 order-lg-2 order-xl-2">
                    <Tile>
                        <MonthlyExpenseTable />
                    </Tile>
                </div>
            </div>
        </div>
    );
};

export default Home;

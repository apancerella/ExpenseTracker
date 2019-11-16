import { createSelector } from 'reselect';

/**
 * The root state.
 * @param {*} state - the state object.
 * @returns {ImmutableState}
 */
const getState = (state) => state;

export const getProjectionChartData = createSelector(
    getState,
    (state) => {
        const incomeChartObject = {
            name: 'Income Summation',
            type: 'bar',
            data: [state.income.monthlyIncomeList.reduce((a, b) => a + b.Amount, 0)],
            zIndex: 1
        };

        const expenseChartObject = {
            name: 'Expense Summation',
            type: 'bar',
            data: [state.expense.monthlyExpenseList.reduce((a, b) => a + b.Amount, 0)],
            zIndex: 1
        };

        return [incomeChartObject, expenseChartObject];
    }
);

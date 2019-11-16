import Api from '../../../Lib/ApiCalls';
import Constants from '../../../Constants';
import { ExpenseTypes_Seed, MonthlyExpenses_Seed } from '../../../Seed_Data';

const apiEndpoint = `${Constants.apiDomain}/MonthlyExpenses`;

const expense = {
    state: {
        expenseTypes: ExpenseTypes_Seed,
        monthlyExpenseList: MonthlyExpenses_Seed
        // expenseTypes: [],
        // monthlyExpenseList: []
    },
    reducers: {
        populateExpenseList(state, expenses) {
            return {
                ...state,
                monthlyExpenseList: expenses || []
            };
        },
        populateExpenseTypes(state, expenseTypes) {
            return {
                ...state,
                expenseTypes
            };
        },
        addExpense(state, expense) {
            return {
                ...state,
                monthlyExpenseList: [...state.monthlyExpenseList, expense]
            }
        },
        updateExpense(state, expense) {
            return {
                ...state,
                monthlyExpenseList: state.monthlyExpenseList.map(
                    item => item.Id === expense.Id ? { ...item, ...expense } : item
                )
            }
        },
        deleteExpense(state, id) {
            return {
                ...state, 
                monthlyExpenseList: state.monthlyExpenseList.filter(x => x.Id !== id)
            }
        }
    },
    effects: (dispatch) => ({
        async fetchMonthlyExpenses(payload, state) {
            try {
                // this.populateExpenseList(
                //     await Api.Get({ url: `${apiEndpoint}` })
                // );
            } catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch monthly expenses.');
            }
        },
        async fetchExpenseTypes(payload, state) {
            try {
                // this.populateExpenseTypes(
                //     await Api.Get({ url: `${Constants.apiDomain}/ExpenseTypes` })
                // );
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch expense types.');
            }
        },
        async createExpenseEntry(payload, state) {
            try {
                let expense = {
                    ExpenseTypeId: payload.ExpenseTypeId,
                    ExpenseType: state.expense.expenseTypes.find(x => x.Id === payload.ExpenseTypeId),
                    Name: payload.Name,
                    Amount: payload.Amount,
                    Description: payload.Description || "",
                    Id: (state.expense.monthlyExpenseList.reduce((prev, curr) => (prev.Id > curr.Id ? prev.Id : curr.Id), 0)) + 1              
                };
                this.addExpense(expense)
                // await Api.Post({ url: `${apiEndpoint}`, body: payload })
                // this.fetchMonthlyExpenses();
                dispatch.notification.addSuccessNotification('Expense entry has been created.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to created expense entry.');
            }
        },
        async updateExpenseEntry(payload, state) {
            try {
                let expense = {
                    ...payload,
                    "ExpenseType": state.expense.expenseTypes.find(x => x.Id === payload.ExpenseTypeId),
                };
                this.updateExpense(expense);
                // await Api.Put({ url: `${apiEndpoint}/${payload.Id}`, body: payload })
                // this.fetchMonthlyExpenses();
                dispatch.notification.addSuccessNotification('Expense entry has been updated.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to update income entry.');
            }
        },
        async deleteExpenseEntry(payload, state) {
            try {
                this.deleteExpense(payload);
                // await Api.Delete({ url: `${apiEndpoint}/${payload}` })
                // this.fetchMonthlyExpenses();
                dispatch.notification.addSuccessNotification('Expense entry has been deleted.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to delete income entry.');
            }
        }
    })
};

export default expense;
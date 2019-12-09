import Api from '../../../Lib/ApiCalls';
import Constants from '../../../Constants';

const apiEndpoint = `${Constants.apiDomain}/MonthlyExpenses`;

const expense = {
    state: {
        expenseTypes: [],
        monthlyExpenseList: []
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
            };
        },
        updateExpense(state, expense) {
            return {
                ...state,
                monthlyExpenseList: state.monthlyExpenseList.map(
                    (item) => (item.Id === expense.Id ? { ...item, ...expense } : item)
                )
            };
        },
        deleteExpense(state, id) {
            return {
                ...state,
                monthlyExpenseList: state.monthlyExpenseList.filter((x) => x.Id !== id)
            };
        },
        reset(state) {
            return {
                ...state,
                monthlyExpenseList: []
            };
        }
    },
    effects: (dispatch) => ({
        async fetchMonthlyExpenses(payload, state) {
            try {
                this.populateExpenseList(
                    await Api.Get({ url: `${apiEndpoint}` })
                );
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch monthly expenses.');
            }
        },
        async fetchExpenseTypes(payload, state) {
            try {
                this.populateExpenseTypes(
                    await Api.Get({ url: `${Constants.apiDomain}/ExpenseTypes` })
                );
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch expense types.');
            }
        },
        async createExpenseEntry(payload, state) {
            try {
                await Api.Post({ url: `${apiEndpoint}`, body: payload });
                this.fetchMonthlyExpenses();
                dispatch.notification.addSuccessNotification(`The expense ${payload.Name} has been created.`);
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to created expense entry.');
            }
        },
        async updateExpenseEntry(payload, state) {
            try {
                await Api.Put({ url: `${apiEndpoint}/${payload._id}`, body: payload });
                this.fetchMonthlyExpenses();
                dispatch.notification.addSuccessNotification(`The expense ${payload.Name} has been updated.`);
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to update expense entry.');
            }
        },
        async deleteExpenseEntry(payload, state) {
            try {
                await Api.Delete({ url: `${apiEndpoint}/${payload.id}` });
                this.fetchMonthlyExpenses();
                dispatch.notification.addSuccessNotification(`${payload.name} has been deleted.`);
            }
            catch (error) {
                dispatch.notification.addErrorNotification(`Unable to delete ${payload.name}.`);
            }
        }
    })
};

export default expense;

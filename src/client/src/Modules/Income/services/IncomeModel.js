import Api from '../../../Lib/ApiCalls';
import Constants from '../../../Constants';

const apiEndpoint = `${Constants.apiDomain}/monthlyIncomes`;

const income = {
    state: {
        incomeTypes: [],
        monthlyIncomeList: []
    },
    reducers: {
        populateIncomeList(state, incomes) {
            return {
                ...state,
                monthlyIncomeList: incomes || []
            };
        },
        populateIncomeTypes(state, incomeTypes) {
            return {
                ...state,
                incomeTypes
            };
        },
        addIncome(state, income) {
            return {
                ...state,
                monthlyIncomeList: [...state.monthlyIncomeList, income]
            }
        },
        updateIncome(state, income) {
            return {
                ...state,
                monthlyIncomeList: state.monthlyIncomeList.map(
                    item => item.Id === income.Id ? { ...item, ...income } : item
                )
            }
        },
        deleteIncome(state, id) {
            return {
                ...state, 
                monthlyIncomeList: state.monthlyIncomeList.filter(x => x.Id !== id)
            }
        }
    },
    effects: (dispatch) => ({
        async fetchMonthlyIncomes(payload, state) {
            try {
                this.populateIncomeList(
                    await Api.Get({ url: `${apiEndpoint}` })
                );
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch monthly income.');
            }
        },
        async fetchIncomeTypes(payload, state) {
            try {
                this.populateIncomeTypes(
                    await Api.Get({ url: `${Constants.apiDomain}/incomeTypes` })
                );
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch income types.');
            }
        },
        async createIncomeEntry(payload, state) {
            try {
                await Api.Post({ url: `${apiEndpoint}`, body: payload })
                this.fetchMonthlyIncomes();
                dispatch.notification.addSuccessNotification('Income entry has been created.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to created income entry.');
            }
        },
        async updateIncomeEntry(payload, state) {
            try {
                await Api.Put({ url: `${apiEndpoint}/${payload._id}`, body: payload })
                this.fetchMonthlyIncomes();
                dispatch.notification.addSuccessNotification('Income entry has been updated.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to update income entry.');
            }
        },
        async deleteIncomeEntry(payload, state) {
            try {
                await Api.Delete({ url: `${apiEndpoint}/${payload}` })
                this.fetchMonthlyIncomes();
                dispatch.notification.addSuccessNotification('Income entry has been deleted.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to delete income entry.');
            }
        }
    })
};

export default income;

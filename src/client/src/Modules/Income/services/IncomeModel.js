import Api from '../../../Lib/ApiCalls';
import Constants from '../../../Constants';
import { IncomeTypes_Seed, MonthlyIncomes_Seed } from '../../../Seed_Data';

const apiEndpoint = `${Constants.apiDomain}/MonthlyIncomes`;

const income = {
    state: {
        incomeTypes: IncomeTypes_Seed,
        monthlyIncomeList: MonthlyIncomes_Seed
        // incomeTypes: [],
        // monthlyIncomeList: []
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
                // this.populateIncomeList(
                //     await Api.Get({ url: `${apiEndpoint}` })
                // );
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch monthly income.');
            }
        },
        async fetchIncomeTypes(payload, state) {
            try {
                // this.populateIncomeTypes(
                //     await Api.Get({ url: `${Constants.apiDomain}/IncomeTypes` })
                // );
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch income types.');
            }
        },
        async createIncomeEntry(payload, state) {
            try {
                let income = {
                    IncomeTypeId: payload.IncomeTypeId,
                    IncomeType: state.income.incomeTypes.find(x => x.Id === payload.IncomeTypeId),
                    Name: payload.Name,
                    Amount: payload.Amount,
                    Description: payload.Description || "",
                    Id: (state.income.monthlyIncomeList.reduce((prev, curr) => (prev.Id > curr.Id ? prev.Id : curr.Id), 0)) + 1              
                };
                this.addIncome(income)
                // await Api.Post({ url: `${apiEndpoint}`, body: payload })
                // this.fetchMonthlyIncomes();
                dispatch.notification.addSuccessNotification('Income entry has been created.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to created income entry.');
            }
        },
        async updateIncomeEntry(payload, state) {
            try {
                let income = {
                    ...payload,
                    "IncomeType": state.income.incomeTypes.find(x => x.Id === payload.IncomeTypeId),
                };
                this.updateIncome(income);

                // await Api.Put({ url: `${apiEndpoint}/${payload.Id}`, body: payload })
                // this.fetchMonthlyIncomes();
                dispatch.notification.addSuccessNotification('Income entry has been updated.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to update income entry.');
            }
        },
        async deleteIncomeEntry(payload, state) {
            try {
                this.deleteIncome(payload);
                // await Api.Delete({ url: `${apiEndpoint}/${payload}` })
                // this.fetchMonthlyIncomes();
                dispatch.notification.addSuccessNotification('Income entry has been deleted.');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to delete income entry.');
            }
        }
    })
};

export default income;

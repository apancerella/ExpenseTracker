import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading'

import notification from './Modules/AppContainer/services/NotificationModel';
import user from './Modules/AppContainer/services/UserModel';
import income from './Modules/Income/services/IncomeModel';
import expense from './Modules/Expense/services/ExpensesModel';

const loadingPlugin = createLoadingPlugin()

const store = init({
    plugins: [loadingPlugin],
    models: {
        notification,
        user,
        income,
        expense
    },
    redux: {
        devtoolOptions: {
            disabled: process.env.NODE_ENV === 'development' ? false : true
        },
        reducers: {
            // notification
            // form: formReducer
        },
        middlewares: []
    }
});

export default store;
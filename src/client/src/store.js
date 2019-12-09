import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';

import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';

import notification from './Modules/AppContainer/services/NotificationModel';
import user from './Modules/AppContainer/services/UserModel';
import income from './Modules/Income/services/IncomeModel';
import expense from './Modules/Expense/services/ExpensesModel';

const loadingPlugin = createLoadingPlugin()
export const history = createHistory();

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
            disabled: process.env.NODE_ENV === 'production'
        },
        reducers: {
            router: connectRouter(history)
            // notification
            // form: formReducer
        },
        middlewares: [routerMiddleware(history)]
    }
});

export default store;

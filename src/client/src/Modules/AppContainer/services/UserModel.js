/* eslint-disable camelcase */
import jwt_decode from 'jwt-decode';
import { push } from 'react-router-redux';
import Api, { setAuthToken } from '../../../Lib/ApiCalls';
import Constants from '../../../Constants';

const apiEndpoint = `${Constants.apiDomain}/users`;

const user = {
    state: {
        account: {},
        isSignedIn: false
    },
    reducers: {
        populateAccount(state, account) {
            return {
                ...state,
                account,
                isSignedIn: !state.isSignedIn
            };
        }
    },
    effects: (dispatch) => ({
        async register(payload, state) {
            try {
                await Api.Post({ url: `${apiEndpoint}/register`, body: payload })
                    .then((res) => {
                        dispatch.notification.addSuccessNotification('Success: User registered');
                        dispatch(push('/ExpenseTracker/Login'));
                    });
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable register new user');
            }
        },
        async login(payload, state) {
            try {
                await Api.Post({ url: `${apiEndpoint}/login`, body: payload })
                    .then((res) => {
                        const { token } = res;

                        localStorage.setItem('jwtToken', token);
                        setAuthToken(token);

                        return jwt_decode(token);
                    })
                    .then((jwtDecoded) => {
                        this.populateAccount(jwtDecoded.user);
                        dispatch.notification.addSuccessNotification('User logged in');
                    })
                    .then(() => {
                        dispatch(push('/ExpenseTracker/Home'));
                    });
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to login');
            }
        },
        async logout(payload, state) {
            try {
                localStorage.removeItem('jwtToken');
                setAuthToken(false);
                this.populateAccount({});
                dispatch.income.reset();
                dispatch.expense.reset();
                dispatch(push('/ExpenseTracker/Login'));
                dispatch.notification.addSuccessNotification('User has been logged out');
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to logout');
            }
        }
    })
};

export default user;

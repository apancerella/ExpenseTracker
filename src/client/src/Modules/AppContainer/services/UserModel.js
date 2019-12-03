/* eslint-disable camelcase */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Api, { setAuthToken } from '../../../Lib/ApiCalls';
import Constants from '../../../Constants';

const apiEndpoint = `${Constants.apiDomain}/users`;

const user = {
    state: {
        account: {}
    },
    reducers: {
        populateAccount(state, account) {
            return {
                ...state,
                account
            };
        }
    },
    effects: (dispatch) => ({
        async fetchUserAccount(payload, state) {
            try {
                this.populateAccount(await Api.Get({ url: `${apiEndpoint}/${payload}` }));
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to fetch your account');
            }
        },
        async register(payload, state) {
            try {
                payload = {
                    _id: '5de5f08a46fa8842dc4c50f3',
                    FirstName: 'Anthony',
                    LastName: 'Pancerella',
                    Email: 'test@test.com',
                    Password: 'test123',
                    Password2: 'test123',
                    Date: '2019-12-03T05:20:10.015Z'
                };
                axios
                    .post(`${apiEndpoint}/register`, payload)
                    .then((res) => this.login()) // re-direct to login on successful register
                    .catch((err) => {
                        dispatch.notification.addErrorNotification('Unable register new user');
                    });
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable register new user');
            }
        },
        async login(payload, state) {
            try {
                axios
                    .post(`${apiEndpoint}/login`, {
                        Email: 'test@test.com',
                        Password: 'test123'
                    })
                    .then((res) => {
                        const { token } = res.data;

                        localStorage.setItem('jwtToken', token);
                        setAuthToken(token);

                        const decoded = jwt_decode(token);
                        return decoded;   
                    })
                    .then((jwt) => this.fetchUserAccount(jwt.id))
                    .catch((err) => {
                        dispatch.notification.addErrorNotification('Unable to login');
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
            }
            catch (error) {
                dispatch.notification.addErrorNotification('Unable to logout');
            }
        }
    })
};

export default user;

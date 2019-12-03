/* eslint-disable no-return-await */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/**
 * Series of formatted REST api requests (used by sagas).
 * @author Anthony P. Pancerella
 */
import axios from 'axios';

export const setAuthToken = (token) => {
    if (token)
        axios.defaults.headers.common.Authorization = token;
    else
        delete axios.defaults.headers.common.Authorization;
};

/**
 * Http request functions
 */
export default class apiCalls {
    static Get = async (action) => await axios.get(action.url, {
        headers: {
            'Cache-Control': 'no-cache',
            pragma: 'no-cache'
        }
    }).then((res) => res.data).catch((err) => {
        throw err;
    });

    static Post = async (action) => await axios.post(action.url, action.body, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
            pragma: 'no-cache'
        }
    }).then((res) => res.data).catch((err) => {
        throw err;
    });

    static Put = async (action) => await axios.put(action.url, action.body, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
            pragma: 'no-cache'
        }
    }).then((res) => res.data).catch((err) => {
        throw err;
    });

    static Delete = async (action) => await axios.delete(action.url, {
        headers: {
            'Cache-Control': 'no-cache',
            pragma: 'no-cache'
        }
    }).then((res) => res.data).catch((err) => {
        throw err;
    })
}

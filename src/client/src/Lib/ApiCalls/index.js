/* eslint-disable valid-jsdoc */
/**
 * Series of formatted REST api requests (used by sagas).
 * @author Anthony P. Pancerella
 */


/**
 * Http request functions
 */
export default class apiCalls {
    static Get = async (action) => {
        const response = await fetch(action.url, {
            method: 'get',
            credentials: 'include',
            accept: 'gzip',
            headers: {
                'Cache-Control': 'no-cache',
                pragma: 'no-cache'
            }
        });
        if (response.status >= 400)
            throw response;

        return response.json();
    }

    static Post = async (action) => {
        const response = await fetch(action.url, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Cache-Control': 'no-cache',
                pragma: 'no-cache'
            },
            body: JSON.stringify(action.body)
        });
        if (response.status >= 400)
            throw response;
    }

    static Put = async (action) => {
        const response = await fetch(action.url, {
            method: 'put',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Cache-Control': 'no-cache',
                pragma: 'no-cache'
            },
            body: JSON.stringify(action.body)
        });
        if (response.status >= 400)
            throw response;
    }

    static Delete = async (action) => {
        const response = await fetch(action.url, {
            method: 'delete',
            credentials: 'include',
            headers: {
                'Cache-Control': 'no-cache',
                pragma: 'no-cache'
            }
        });
        if (response.status >= 400)
            throw response;
    }
}

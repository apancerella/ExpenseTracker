/**
 * Application config file.
 * @author Anthony P. Pancerella
 */

/**
 * The configuration object.
 * @returns {Object}
 */
const AppEnvConfigs = (() => {
    if (process.env.NODE_ENV === 'production')
        return {
            appName: 'Expense Tracker',
            siteCollectionPath: '/ExpenseTracker',
            apiDomain: '/api'
        };

    return {
        appName: 'Expense Tracker',
        siteCollectionPath: '/ExpenseTracker',
        apiDomain: 'http://localhost:8080/api'
    };
})();

export default AppEnvConfigs;

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
            apiDomain: ''
        };

    return {
        appName: 'Expense Tracker',
        siteCollectionPath: '/ExpenseTracker',
        apiDomain: 'https://localhost:5001/api'
    };
})();

export default AppEnvConfigs;

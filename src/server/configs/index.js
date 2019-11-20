const AppConfigs = (() => {
    if(process.env.NODE_ENV === 'production')
        return {
            environment: "production",
            port: process.env.PORT,
            database: "mongodb+srv://testuser:LYBcOpIKSkzuzgBO@expensetrackercluster-kiefx.mongodb.net/ExpenseTrackerDb?retryWrites=true&w=majority",
            eraseDatabaseOnSync: false
     
        };
    return {
        environment: "development",
        port: 8080,
        database: "mongodb://adv_super_user2:adv_super_user2@localhost:27017/ExpenseTrackerDb?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=localhost",
        eraseDatabaseOnSync: false
    };
})();

export default AppConfigs;
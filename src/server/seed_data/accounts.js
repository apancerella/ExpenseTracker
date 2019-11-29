import models from '../models';

const createAccounts = async () => {
    await models.User.findOne({ FirstName: 'Anthony', LastName: 'Pancerella' }).exec()
        .then((user) => (new models.Account({
            Salary: 50000,
            Job: 'Software Developer',
            Company: 'National Rural Electric Cooperative Association',
            User: user._id
        }))).then((doc) => doc.save());
};

export default createAccounts;

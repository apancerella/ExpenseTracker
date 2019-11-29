import models from '../models';

const createUsers = async () => {
    await models.Role.findOne({ Role: 'Administrator' }).exec()
        .then((role) => (new models.User({
            FirstName: 'Anthony',
            MiddleName: 'Patrick',
            LastName: 'Pancerella',
            Email: 'test@test.com',
            ModifiedDate: null,
            ModifiedBy: null,
            DateOfBirth: new Date(),
            Phone: '7031231234',
            Role: role._id
        }))).then((doc) => doc.save());
};

export default createUsers;

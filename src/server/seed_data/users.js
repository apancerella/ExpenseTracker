import models from '../models';

const createUsers = async () => {
    await models.Role.findOne({ Role: 'Administrator' }).exec()
        .then((role) => (new models.User({
            FirstName: 'Anthony',
            LastName: 'Pancerella',
            Role: role._id
        }))).then((doc) => doc.save());
};

export default createUsers;

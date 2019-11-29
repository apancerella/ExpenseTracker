import models from '../models';

const createRoles = async () => {
    const role1 = new models.Role({ Role: 'Administrator' });
    const role2 = new models.Role({ Role: 'User' });

    await role1.save();
    await role2.save();
};

export default createRoles;

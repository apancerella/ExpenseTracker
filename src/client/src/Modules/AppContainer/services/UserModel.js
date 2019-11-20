import Api from '../../../Lib/ApiCalls';
import Constants from '../../../Constants';
import { Account_Seed } from '../../../Seed_Data';
const apiEndpoint = `${Constants.apiDomain}/Accounts`;

const user = {
    state: {
        // account: Account_Seed
        account: {}
    },
    reducers: {
        populateAccount(state, account) {
            return {
                ...state,
                account: account
            };
        }
    },
    effects: (dispatch) => ({
        async fetchUserAccount(payload, state) {
            try {
                this.populateAccount(
                    await Api.Get({ url: `${apiEndpoint}/5dd44d622d6cfc9e24edcd12` })
                );
            } catch (error) {
                dispatch.notification.addErrorNotification(`Unable`)
            }
        }
    })
};

export default user;
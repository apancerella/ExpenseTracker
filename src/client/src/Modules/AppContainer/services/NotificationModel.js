const notification = {
    state: { },
    reducers: {
        addSuccessNotification(state, message) {
            return {
                ...state,
                message,
                level: 'success'
            };
        },
        addWarningNotification(state, message) {
            return {
                ...state,
                message,
                level: 'warning'
            };
        },
        addErrorNotification(state, message) {
            return {
                ...state,
                message,
                level: 'error'
            };
        }
    }
};

export default notification;

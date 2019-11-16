/**
 * The NotificationContainer component. This is used to display alerts messages.
 * @author Anthony P. Pancerella
 */

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AlertList } from 'react-bs-notifier';
import { useArray } from '../../../../../Lib/CustomHooks';

/**
 * The NotificationContainer component.
 * @returns {React.Element}
 */
const NotificationContainer = () => {
    const [position] = useState('top-right');
    const alerts = useArray([]);
    const [timeout] = useState(3000);
    const notification = useSelector((state) => state.notification);

    /**
     * Removes the alert from the alert list.
     * @param {Object} alert - the alert object
     */
    const onAlertDismissed = (alert) => {
        const index = alerts.value.indexOf(alert);
        if (index >= 0)
            alerts.removeIndex(index);
    };

    useEffect(() => {
        if (Object.keys(notification).length) {
            const { message } = notification;
            let { level } = notification;

            if (level === 'error')
                level = 'danger';
            const newAlert = {
                id: (new Date()).getTime(),
                type: level,
                message: `${message} `
            };

            alerts.add(newAlert);
        }
    }, [notification]);

    return (
        <AlertList
            position={position}
            alerts={alerts.value}
            timeout={timeout}
            onDismiss={onAlertDismissed}
        />
    );
};

export default NotificationContainer;

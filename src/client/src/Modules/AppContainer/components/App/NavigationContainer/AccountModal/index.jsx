/**
 * This shows account details in a modal.
 * @author Anthony P. Pancerella
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import proptypes from 'prop-types';
import Textbox from '../../../../../../Lib/InputFields/Textbox';
/**
 * The account modal.
 * @returns {React.Element}
 */
const AccountModal = ({ show = false, toggleFunc = null }) => {
    const account = useSelector((state) => state.user.account);
    return (
        <>
            <Modal size="lg" show={show} onHide={() => toggleFunc(!show)}>
                <Modal.Header closeButton>
                    <Modal.Title>My Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Textbox
                        name="Company"
                        label="Company"
                        value={account.Company || ''}
                        disabled
                    />
                    <Textbox
                        name="Occupation"
                        label="Occupation"
                        value={account.Job || ''}
                        disabled
                    />
                    <Textbox
                        name="Salary"
                        label="Salary"
                        value={account.Salary || ''}
                        disabled
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};

AccountModal.propTypes = {
    show: proptypes.bool.isRequired,
    toggleFunc: proptypes.func.isRequired
};

export default AccountModal;

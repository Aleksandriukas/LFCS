import React, { useEffect, useState } from 'react';
import { Modal, Box, ModalProps, Typography, TextField, Button } from '@mui/material';
import clock from '../assets/clock.svg';
import { checkAdmin } from '../services/administration';
import { useLFCSContext } from './LFCSContext';

export type AdministrationModalProps = {
    handleClose: () => void;
} & ModalProps;

export const AdministrationModal = ({ handleClose, ...other }: AdministrationModalProps) => {
    const { setAdmin } = useLFCSContext();

    return (
        <Modal {...other} aria-labelledby="modal-modal-title">
            <Box>
                <Typography id="modal-modal-title">Administrator request</Typography>
                <img src={clock} />
                <Typography variant="body1">Please wait administrator...</Typography>
                <TextField InputProps={{ type: 'password' }} fullWidth />
                <Button
                // onClick={() => {
                //     if (checkAdmin(value)) {
                //         setAdmin(true);
                //         handleClose();
                //     }
                // }}
                >
                    Check
                </Button>
            </Box>
        </Modal>
    );
};

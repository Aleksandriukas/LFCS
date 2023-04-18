import { Box, CircularProgress, IconButton, ModalProps, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ModalContainer, StyledModal } from './AdministrationModal';
import { CloseRounded } from '@mui/icons-material';
import { CheckCircleOutlineRounded } from '@mui/icons-material';
import { calculateFine } from '../services/luggage';
export type FineProps = {
    handleClose: () => void;
    paid: boolean;
    overWeight: number;
} & Omit<ModalProps, 'children'>;

export const FineModal = ({ handleClose, paid, overWeight, ...other }: FineProps) => {
    const fine = calculateFine(overWeight);

    return (
        <StyledModal {...other} aria-labelledby="modal-modal-title">
            <ModalContainer>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    id="modal-modal-title"
                >
                    <Typography variant="h6">Fine payment</Typography>
                    <IconButton onClick={handleClose}>{<CloseRounded />}</IconButton>
                </Box>
                <div style={{ display: 'flex' }}>
                    <Typography fontWeight="bold" variant="h6">
                        Your fine is:
                    </Typography>
                    <Typography color="#35f" fontWeight="bold" variant="h6">
                        {fine.toFixed(2)}€
                    </Typography>
                </div>

                <Typography variant="subtitle1">Please pay it by card or cash. The terminal is on the left.</Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {paid ? (
                        <CheckCircleOutlineRounded style={{ fontSize: '64px', color: 'green' }} />
                    ) : (
                        <CircularProgress color="primary" size="52px" />
                    )}
                </div>
            </ModalContainer>
        </StyledModal>
    );
};

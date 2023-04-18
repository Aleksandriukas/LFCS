import React, { useEffect, useState } from 'react';
import { Modal, Box, ModalProps, Typography, TextField, Button, Icon, styled, IconButton } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { checkAdmin } from '../services/administration';
import { useLFCSContext } from './LFCSContext';
import { QueryBuilderRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export type AdministrationModalProps = {
    handleClose: () => void;
} & Omit<ModalProps, 'children'>;

export const AdministrationModal = ({ handleClose, ...other }: AdministrationModalProps) => {
    const { setAdmin } = useLFCSContext();

    const [value, setValue] = useState('');

    const [valid, setValid] = useState(true);

    const navigate = useNavigate();

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
                    <Typography variant="h6">Administrator requested</Typography>
                    <IconButton onClick={handleClose}>{<CloseRounded />}</IconButton>
                </Box>
                <MessageContainer>
                    <ClockIcon component={QueryBuilderRounded} />
                    <Typography variant="body1">Please wait for administrator...</Typography>
                </MessageContainer>
                <TextField
                    label="Password"
                    error={!valid}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    InputProps={{ type: 'password' }}
                    fullWidth
                />
                <Button
                    onClick={() => {
                        if (checkAdmin(value)) {
                            setAdmin(true);
                            setValid(true);
                            navigate('/PassportForm');
                            handleClose();
                            return;
                        }
                        setValid(false);
                    }}
                >
                    Check
                </Button>
            </ModalContainer>
        </StyledModal>
    );
};

export const ModalContainer = styled(Box, {
    name: 'Container',
})(({ theme }) => ({
    width: '40vw',
    display: 'flex',
    justifySelf: 'center',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: theme.spacing(1),
}));

export const StyledModal = styled(Modal, {
    name: 'StyledModal',
})({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const MessageContainer = styled('div', {
    name: 'MessageContainer',
})(({ theme }) => ({
    paddingTop: theme.spacing(1),
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
}));

const ClockIcon = styled(Icon, {
    name: 'ClockIcon',
})(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

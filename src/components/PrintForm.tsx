import React, { useEffect, useRef, useState } from 'react';
import { FormContainer } from './FormContainer';
import { Button, Typography, styled } from '@mui/material';
import Countdown from 'react-countdown';
import { AirplaneTicketRounded } from '@mui/icons-material';
import { useLFCSContext } from './LFCSContext';
import { useNavigate } from 'react-router-dom';
export const PrintForm = () => {
    const { setAdmin, setId } = useLFCSContext();

    const navigate = useNavigate();

    const reloadPage = () => {
        setAdmin(false);
        setId('');
        navigate('/PassportForm');
    };

    return (
        <FormContainer>
            <Container>
                <Typography fontWeight="bold" textAlign="center" color="green" variant="h5">
                    Success!
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Please take a ticket and enjoy your flight. Be at the gate one hour prior to boarding time.
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <AirplaneTicketRounded style={{ fontSize: '256px', rotate: '-90deg' }}></AirplaneTicketRounded>
                </div>
                <Typography style={{ marginTop: '24px' }} textAlign="center" variant="body2">
                    This session will be closed by pressing this button!
                </Typography>
                <Button onClick={reloadPage} variant="contained">
                    Return to first page
                </Button>
            </Container>
        </FormContainer>
    );
};

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(4),
}));

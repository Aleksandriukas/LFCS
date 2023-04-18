import React, { useEffect, useRef, useState } from 'react';
import { FormContainer } from './FormContainer';
import { Button, Typography, styled } from '@mui/material';

import luggage from '../assets/lagguge.png';
import { FineModal } from './FineModal';
import { useNavigate } from 'react-router-dom';

export const LuggageForm = () => {
    const [weight, setWeight] = useState(0.0);

    const [maxWeight, setMaxWeight] = React.useState(25.0);

    const [open, setOpen] = useState(false);

    const [paid, setPaid] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (weight > maxWeight) {
            setPaid(false);
        } else {
            setPaid(true);
        }
        if (weight < 0) {
            setWeight(0);
        }
    }, [weight, maxWeight]);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyE') {
                setPaid(true);
            }
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyW') {
                setWeight((value) => value + 0.25);
            }
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyS') {
                setWeight((value) => value - 0.25);
            }
        });
    }, []);

    return (
        <FormContainer title="Please put your luggage on the stand">
            <ContentWrapper>
                <img src={luggage} />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'space-between',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <div style={{ marginTop: '16px' }}>
                            <Typography fontWeight="bold" variant="subtitle1">
                                YOUR LUGGAGE WEIGHT
                            </Typography>
                            <Typography color={paid ? 'green' : 'red'} variant="h6">
                                {weight.toFixed(3)}
                            </Typography>
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <Typography fontWeight="bold" variant="subtitle1">
                                YOUR LUGGAGE WEIGHT
                            </Typography>
                            <Typography color="green" variant="h6">
                                {maxWeight.toFixed(3)}
                            </Typography>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            disabled={paid}
                            onClick={handleOpen}
                            style={{ marginBottom: '24px' }}
                            variant="contained"
                        >
                            Pay fine
                        </Button>
                    </div>
                </div>
            </ContentWrapper>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography textAlign="center" maxWidth="40vw" variant="h6" color="red">
                    After submission your luggage will be automatically moved to transportation sector !
                </Typography>
            </div>
            <Button
                onClick={() => {
                    console.log('redirecting to TouchIdForm');
                    navigate('/PrintForm');
                }}
                disabled={!paid}
                variant="contained"
                color="primary"
            >
                Next
            </Button>
            <FineModal overWeight={weight - maxWeight} paid={paid} handleClose={handleClose} open={open} />
        </FormContainer>
    );
};

const ContentWrapper = styled('div', {
    label: 'ContentWrapper',
})({
    display: 'flex',
    flex: 1,
    marginTop: '48px',
    flexDirection: 'row',
    gap: '16px',
});

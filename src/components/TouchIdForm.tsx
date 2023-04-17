import React, { useEffect, useState } from 'react';
import { FormContainer } from './FormContainer';
import { PhotoContainer } from './PhotoForm';

import wrongFinger from '../assets/finger2.png';
import correctFinger from '../assets/finger3.png';
import { CheckOutlined, CloseOutlined } from '@mui/icons-material';
import { Photo } from './Photo';
import { Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const TouchIdForm = () => {
    const navigate = useNavigate();

    const { palette } = useTheme();

    const [fingerPrint, setFingerPrint] = useState<string>('');

    const [correct, setCorrect] = useState(false);

    // fingerprint emulation
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyE') {
                setCorrect(true);
                setFingerPrint(correctFinger);
            }
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyW') {
                setFingerPrint(wrongFinger);
                setCorrect(false);
            }
        });
    }, []);

    return (
        <FormContainer title="Please verify your fingerprint">
            <PhotoContainer>
                <Photo src={fingerPrint} />
                {correct ? (
                    <CheckOutlined style={{ height: '128px', width: '128px', color: '#3f5' }}></CheckOutlined>
                ) : (
                    <CloseOutlined
                        style={{ height: '128px', width: '128px', color: palette.error.main }}
                    ></CloseOutlined>
                )}

                <Photo src={correctFinger} />
            </PhotoContainer>
            <Button
                onClick={() => {
                    console.log('redirecting to TouchIdForm');
                    navigate('/TicketForm');
                }}
                disabled={!correct}
                variant="contained"
                color="primary"
            >
                Next
            </Button>
        </FormContainer>
    );
};

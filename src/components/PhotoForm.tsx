import React, { useEffect, useState } from 'react';
import { FormContainer } from './FormContainer';
import { Photo } from './Photo';
import noPerson from '../assets/noPerson.png';
import wrongPerson from '../assets/wrongPerson.png';
import person from '../assets/person.png';
import passport from '../assets/Passport.png';

import { CloseOutlined, CheckOutlined } from '@mui/icons-material';
import { Button, styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PhotoForm = () => {
    const navigate = useNavigate();

    const { palette } = useTheme();

    const [correct, setCorrect] = useState(false);

    const [photo, setPhoto] = useState<string>(noPerson);

    // Camera emulation
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyE') {
                setCorrect(true);
                setPhoto(person);
            }
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyW') {
                setPhoto(wrongPerson);
                setCorrect(false);
            }
        });
    }, []);

    return (
        <FormContainer title="Please verify your photo">
            <PhotoContainer>
                <Photo src={photo} />
                {correct ? (
                    <CheckOutlined style={{ height: '128px', width: '128px', color: '#3f5' }}></CheckOutlined>
                ) : (
                    <CloseOutlined
                        style={{ height: '128px', width: '128px', color: palette.error.main }}
                    ></CloseOutlined>
                )}
                <Photo src={passport} />
            </PhotoContainer>
            <Button
                onClick={() => {
                    console.log('redirecting to TouchIdForm');
                    navigate('/TouchIdForm');
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

export const PhotoContainer = styled('div', {
    label: 'PhotoContainer',
})(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1),
    flexDirection: 'row',
}));

import React, { useState } from 'react';
import { FormContainer } from './FormContainer';
import { Photo } from './Photo';
import noPerson from '../assets/noPerson.png';
import passport from '../assets/Passport.png';
import { CloseOutlined, CheckOutlined } from '@mui/icons-material';
import { Icon, styled, useTheme } from '@mui/material';
export const PhotoForm = () => {
    const { palette } = useTheme();

    const [correct, setCorrect] = useState(false);

    return (
        <FormContainer title="Please verify your photo">
            <PhotoContainer>
                <Photo src={noPerson} />
                {correct ? (
                    <CheckOutlined style={{ height: '128px', width: '128px', color: '#3f5' }}></CheckOutlined>
                ) : (
                    <CloseOutlined
                        style={{ height: '128px', width: '128px', color: palette.error.main }}
                    ></CloseOutlined>
                )}
                <Photo src={passport} />
            </PhotoContainer>
        </FormContainer>
    );
};

const PhotoContainer = styled('div', {
    label: 'PhotoContainer',
})(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1),
    flexDirection: 'row',
}));

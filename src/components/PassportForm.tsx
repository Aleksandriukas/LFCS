import React from 'react';
import { FormContainer } from './FormContainer';
import { TextField, styled, Button } from '@mui/material';
import { commons } from '../commons';
import passport from '../assets/passport.svg';
import scanner from '../assets/scanner.png';
export const PassportForm = () => {
    return (
        <FormContainer title="Please scan your passport">
            <FieldsWrapper>
                <TextField fullWidth variant="outlined" label="Name" disabled helperText={commons.rescanPassMsg} />
                <TextField fullWidth variant="outlined" label="Surname" disabled helperText={commons.rescanPassMsg} />
            </FieldsWrapper>
            <TextField fullWidth variant="outlined" label="Personal ID" disabled helperText={commons.rescanPassMsg} />
            <div>
                <TextField variant="outlined" label="Date" disabled helperText={commons.rescanPassMsg} />
            </div>
            <ImagesWrapper>
                <Image src={passport} />
                <Image src={scanner} />
            </ImagesWrapper>
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </FormContainer>
    );
};

const FieldsWrapper = styled('div', {
    name: 'FieldsWrapper',
})({
    display: 'flex',
    gap: '1rem',
    flexDirection: 'row',
});

const Image = styled('img', {
    name: 'Image',
})({
    height: '20rem',
    width: '20rem',
});

const ImagesWrapper = styled('div', {
    name: 'ImagesWrapper',
})({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    justifyContent: 'space-around',
});

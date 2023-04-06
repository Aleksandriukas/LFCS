import React from 'react';
import { FormContainer } from './FormContainer';
import { TextField, styled, Button } from '@mui/material';
import { commons } from '../commons';
import { DatePicker } from '@mui/x-date-pickers';
import passport from '../assets/passport.svg';
import scanner from '../assets/scanner.png';
// import { LFCSButton } from './Button';
export const PassportForm = () => {
    return (
        <FormContainer title="Please scan your passport">
            <Container>
                <FieldsWrapper>
                    <TextField fullWidth variant="outlined" label="Name" disabled helperText={commons.rescanPassMsg} />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Surname"
                        disabled
                        helperText={commons.rescanPassMsg}
                    />
                </FieldsWrapper>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Personal ID"
                    disabled
                    helperText={commons.rescanPassMsg}
                />
                <div>
                    <TextField variant="outlined" label="Date" disabled helperText={commons.rescanPassMsg} />
                </div>
                <ImagesWrapper>
                    <Image src={passport} />
                    <Image src={scanner} />
                </ImagesWrapper>
            </Container>
            <Button variant="contained" color="primary">
                Submit
            </Button>
            {/* <LFCSButton variant="contained">Submit</LFCSButton> */}
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

const Container = styled('div', {
    name: 'Container',
})({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
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

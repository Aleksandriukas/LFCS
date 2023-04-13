import React from 'react';
import { FormContainer } from './FormContainer';
import { TextField, styled, Button } from '@mui/material';
import { commons } from '../commons';
import passport from '../assets/passport.svg';
import scanner from '../assets/scanner.png';
import { useLFCSContext } from './LFCSContext';
import { useNavigate } from 'react-router-dom';

export const PassportForm = () => {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [personalId, setPersonalId] = React.useState('');
    const [date, setDate] = React.useState('');

    const { admin } = useLFCSContext();

    const canSubmit = true; //TODO validate values

    const navigate = useNavigate();

    return (
        <FormContainer title="Please scan your passport">
            <FieldsWrapper>
                <TextField
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.target.value);
                    }}
                    fullWidth
                    variant="outlined"
                    label="Name"
                    disabled={!admin}
                    helperText={commons.rescanPassMsg}
                />
                <TextField
                    value={surname}
                    onChange={(e) => {
                        setSurname(e.target.value);
                    }}
                    fullWidth
                    variant="outlined"
                    label="Surname"
                    disabled={!admin}
                    helperText={commons.rescanPassMsg}
                />
            </FieldsWrapper>
            <TextField
                value={personalId}
                onChange={(e) => {
                    setPersonalId(e.target.value);
                }}
                fullWidth
                variant="outlined"
                label="Personal ID"
                disabled={!admin}
                helperText={commons.rescanPassMsg}
            />
            <div>
                <TextField
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                    variant="outlined"
                    label="Date"
                    disabled={!admin}
                    helperText={commons.rescanPassMsg}
                />
            </div>
            <ImagesWrapper>
                <Image src={passport} />
                <Image src={scanner} />
            </ImagesWrapper>
            <Button
                onClick={() => {
                    console.log('redirecting to TouchIdForm');
                    navigate('/PhotoForm');
                }}
                disabled={!canSubmit}
                variant="contained"
                color="primary"
            >
                Next
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

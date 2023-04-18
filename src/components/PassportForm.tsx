import React, { useEffect, useState } from 'react';
import { FormContainer } from './FormContainer';
import { TextField, styled, Button, Alert, Snackbar } from '@mui/material';
import { commons } from '../commons';
import passport from '../assets/passport.svg';
import scanner from '../assets/scanner.png';
import { useLFCSContext } from './LFCSContext';
import { useNavigate } from 'react-router-dom';

import { checkUser, personType } from '../services/ticket';

import { persons } from '../services/ticket';

export const PassportForm = () => {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [personalId, setPersonalId] = React.useState('');
    const [date, setDate] = React.useState('');

    const { admin, id, setId } = useLFCSContext();

    const [correct, setCorrect] = useState(true);

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const [valid, setValid] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (personalId.length > 0 && name.length > 0 && surname.length > 0 && date.length > 0) {
            setValid(true);
            return;
        }
        setValid(false);
    }, [personalId, name, surname, date]);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyQ') {
                console.log('1');
                setName(persons[0].name);
                setSurname(persons[0].surname);
                setPersonalId(persons[0].id);
                setDate(
                    persons[0].date.getFullYear() +
                        '-' +
                        (persons[0].date.getMonth() + 1) +
                        '-' +
                        persons[0].date.getDate()
                );
            }
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyW') {
                setName(persons[1].name);
                setSurname(persons[1].surname);
                setPersonalId(persons[1].id);
                setDate(
                    persons[1].date.getFullYear() +
                        '-' +
                        (persons[1].date.getMonth() + 1) +
                        '-' +
                        persons[1].date.getDate()
                );
            }

            const wrongDate = new Date('JAN 30, 2001 12:00:00');
            if ((e.metaKey || e.ctrlKey) && e.code === 'KeyE') {
                setName('test');
                setSurname('fwda');
                setPersonalId('1268');
                setDate(wrongDate.getFullYear() + '-' + (wrongDate.getMonth() + 1) + '-' + wrongDate.getDate());
            }
        });
    }, []);

    return (
        <FormContainer title="Please scan your passport">
            <Snackbar open={open} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="error">
                    Your personal id is incorrect
                </Alert>
            </Snackbar>
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
                    if (checkUser(personalId)) {
                        setId(personalId);
                        setCorrect(true);
                        handleClose();
                        if (admin) {
                            navigate('/TicketForm');
                            return;
                        }
                        navigate('/PhotoForm');
                    } else {
                        setCorrect(false);
                        handleClick();
                    }
                }}
                disabled={!valid}
                variant="contained"
                color={correct ? 'primary' : 'error'}
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

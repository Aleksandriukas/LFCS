import React, { Fragment, PropsWithChildren } from 'react';
import { commons } from '../commons';
import { Container, Paper, Typography, styled } from '@mui/material';
import { FormTitle } from './FormTitle';
export type FormContainerProps = PropsWithChildren<{
    title?: string;
}>;

export const FormContainer = ({ children, title, ...other }: FormContainerProps) => {
    return (
        <RootContainer maxWidth="md">
            <Typography color="white" variant="h2">
                {commons.welcomeMsg}
            </Typography>
            <FormWrapper>
                <Header>{title && <FormTitle>{title}</FormTitle>}</Header>
                {children}
            </FormWrapper>
        </RootContainer>
    );
};

const RootContainer = styled(Container, {
    label: 'RootContainer',
})(({ theme }) => ({
    gap: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
}));

const FormWrapper = styled(Paper, {
    label: 'FormWrapper',
})(({ theme }) => ({
    padding: theme.spacing(2, 4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

const Header = styled('header', {
    label: 'Header',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

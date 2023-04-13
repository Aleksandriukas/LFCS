import React, { Fragment, PropsWithChildren, useState } from 'react';
import { commons } from '../commons';
import { Container, Paper, Typography, styled, Icon, ButtonBase, IconButton } from '@mui/material';
import { FormTitle } from './FormTitle';
import { HelpOutlineRounded } from '@mui/icons-material';
import { AdministrationModal } from './AdministrationModal';
export type FormContainerProps = PropsWithChildren<{
    title?: string;
}>;

export const FormContainer = ({ children, title, ...other }: FormContainerProps) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <RootContainer maxWidth="md">
            <Typography color="white" variant="h2">
                {commons.welcomeMsg}
            </Typography>
            <FormWrapper>
                <Header>
                    {title && <FormTitle>{title}</FormTitle>}
                    <IconButton onClick={handleOpen}>
                        <HelpOutlineRounded />
                    </IconButton>
                </Header>
                {children}
            </FormWrapper>
            <AdministrationModal handleClose={handleClose} open={open} />
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
    borderRadius: 8,
    gap: theme.spacing(2),
}));

const Header = styled('header', {
    label: 'Header',
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

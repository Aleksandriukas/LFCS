import React, { PropsWithChildren } from 'react';
import { commons } from '../commons';
import { styled } from '@mui/material';
import { FormTitle } from './FormTitle';
export type FormContainerProps = PropsWithChildren<{
    title?: string;
}>;

export const FormContainer = ({ children, title, ...other }: FormContainerProps) => {
    return (
        <div>
            <Title>{commons.welcomeMsg}</Title>
            <div className="FormContainer">
                <FormContainerWrapper>
                    {title && <FormTitle>{title}</FormTitle>}
                    <div>{children}</div>
                </FormContainerWrapper>
            </div>
        </div>
    );
};

const Title = styled('h1', {
    name: 'Title',
})({
    color: '#fff',
    fontSize: '3rem',
});

const FormContainerWrapper = styled('div', {
    name: 'FormContainerWrapper',
})({
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '2rem',
    gap: '1rem',
    width: '100%',
    minWidth: '60rem',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
});

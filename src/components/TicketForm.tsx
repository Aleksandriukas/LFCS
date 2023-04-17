import React from 'react';
import { FormContainer } from './FormContainer';
import { TicketCard } from './TicketCard';

export const TicketForm = () => {
    const date = new Date('December 17, 1995 03:24:00');

    return (
        <FormContainer title="Please select your ticket">
            <TicketCard date={date}></TicketCard>
        </FormContainer>
    );
};

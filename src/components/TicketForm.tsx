import React, { useEffect, useRef } from 'react';
import { FormContainer } from './FormContainer';
import { TicketCard } from './TicketCard';
import { getTicketsByUserId } from '../services/ticket';
import { useLFCSContext } from './LFCSContext';
import { TicketType } from '../services/ticket';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const TicketForm = () => {
    const date = new Date('December 17, 1995 03:24:00');

    const navigate = useNavigate();

    const { id } = useLFCSContext();

    const [tickets, setTickets] = React.useState<TicketType[]>();

    const [ticketNumber, setTicketNumber] = React.useState<number>(-1);

    useEffect(() => {
        setTickets(getTicketsByUserId(id));
    }, [id]);

    return (
        <FormContainer title="Please select your ticket">
            {tickets?.map((ticket, index) => (
                <TicketCard
                    onClick={() => {
                        setTicketNumber(index);
                    }}
                    from={ticket.from}
                    gate={ticket.gate}
                    name={ticket.name}
                    plane={ticket.plane}
                    sit={ticket.sit}
                    surname={ticket.surname}
                    to={ticket.to}
                    date={ticket.date}
                    key={index}
                    focused={ticketNumber === index}
                />
            ))}
            <Button
                onClick={() => {
                    navigate('/LuggageForm');
                }}
                disabled={ticketNumber === -1}
                variant="contained"
            >
                Next
            </Button>
        </FormContainer>
    );
};

import { TicketCardProps } from '../components/TicketCard';

export type TicketType = {
    name: string;
    surname: string;
    date: Date;
    from: string;
    to: string;
    gate: string;
    sit: string;
    plane: string;
};

export type personType = {
    name: string;
    surname: string;
    id: string;
    date: Date;
    tickets: TicketType[];
};

const ticketOne: TicketType = {
    name: 'John',
    surname: 'Smith',
    date: new Date('NOV 17, 2023 12:00:00'),
    from: 'London',
    to: 'New York',
    gate: 'A1',
    sit: '1A',
    plane: 'Boeing 747',
};

const ticketTwo: TicketType = {
    name: 'John',
    surname: 'Snow',
    date: new Date('NOV 17, 2023 12:00:00'),
    from: 'London',
    to: 'L.A',
    gate: 'A2',
    sit: '2A',
    plane: 'Boeing 747',
};

const ticketThree: TicketType = {
    name: 'John',
    surname: 'Smith',
    date: new Date('NOV 17, 2023 07:24:00'),
    from: 'London',
    to: 'New York',
    gate: 'A3',
    sit: '3A',
    plane: 'Boeing 747',
};

export const persons: personType[] = [
    {
        id: '1234',
        name: 'John',
        surname: 'Smith',
        date: new Date('NOV 27, 1998 12:00:00'),
        tickets: [ticketOne, ticketThree],
    },
    {
        id: '1235',
        name: 'John',
        surname: 'Snow',
        date: new Date('JAN 27, 1995 12:00:00'),
        tickets: [ticketTwo],
    },
];

export const getTicketsByUserId = (userId: string) => {
    return persons.find((person) => person.id === userId)?.tickets;
};

export const checkUser = (userId: string) => {
    return persons.find((person) => person.id === userId);
};

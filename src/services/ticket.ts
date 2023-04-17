import { TicketCardProps } from '../components/TicketCard';

export type TicketType = {
    date: Date;
    from: string;
    to: string;
    gate: string;
    sit: string;
    plane: string;
};

type personType = {
    name: string;
    surname: string;
    id: string;
    tickets: TicketType[];
};

const ticketOne: TicketType = {
    date: new Date('NOV 17, 2023 12:00:00'),
    from: 'London',
    to: 'New York',
    gate: 'A1',
    sit: '1A',
    plane: 'Boeing 747',
};

const ticketTwo: TicketType = {
    date: new Date('NOV 17, 2023 12:00:00'),
    from: 'London',
    to: 'L.A',
    gate: 'A2',
    sit: '2A',
    plane: 'Boeing 747',
};

const ticketThree: TicketType = {
    date: new Date('NOV 17, 2023 07:24:00'),
    from: 'London',
    to: 'New York',
    gate: 'A3',
    sit: '3A',
    plane: 'Boeing 747',
};

const persons: personType[] = [
    {
        id: '1234',
        name: 'John',
        surname: 'Smith',
        tickets: [ticketOne, ticketThree],
    },
    {
        id: '1235',
        name: 'John',
        surname: 'Snow',
        tickets: [ticketTwo],
    },
];

export const getTicketsByUserId = (userId: string) => {
    return persons.find((person) => person.id === userId)?.tickets;
};

export const checkUser = (userId: string) => {
    return persons.find((person) => person.id === userId);
};

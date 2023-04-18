import React from 'react';
import { Card, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import {
    PersonRounded,
    AccessTimeRounded,
    FlightRounded,
    AirlineSeatReclineNormalRounded,
    MeetingRoomRounded,
} from '@mui/icons-material';
import { TicketType } from '../services/ticket';

import { format } from 'date-format-parse';

export type TicketCardProps = {
    focused?: boolean;
    onClick?: () => void;
} & TicketType;

export const TicketCard = ({ name, surname, focused, date, from, gate, plane, sit, to, onClick }: TicketCardProps) => {
    const { palette } = useTheme();
    palette.primary.main;
    const iconStyle: React.CSSProperties = { color: palette.primary.main, opacity: '70%' };

    return (
        <Card
            onClick={onClick}
            style={{
                paddingBottom: '24px',
                borderRadius: '20px',
                boxShadow: focused ? '5px 7px 7px #71cff3' : undefined,
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <TitleWrapper style={{ flex: 1 }}>
                    <Typography color="#fff" variant="h5">
                        Boarding pass
                    </Typography>
                    <Typography marginTop="6px" marginLeft="4px" variant="body1" color="#fff">
                        electronic ticket
                    </Typography>
                </TitleWrapper>
            </div>
            <Content>
                <DataContainer style={{ justifyContent: 'start', marginBottom: '6px' }}>
                    <Typography variant="h5" color={palette.primary.main}>
                        {from}
                    </Typography>
                    <FlightRounded
                        fontSize="large"
                        style={{ color: palette.primary.main, opacity: '50%', rotate: '45deg' }}
                    />
                    <Typography variant="h5" color={palette.primary.main}>
                        {to}
                    </Typography>
                </DataContainer>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <LineContentWrapper>
                        <DataContainer>
                            <PersonRounded style={iconStyle} />
                            {name + ' ' + surname}
                        </DataContainer>
                        <DataContainer>
                            <AccessTimeRounded style={iconStyle} />
                            {date.getFullYear() + '.' + date.getMonth() + '.' + date.getDay()}
                        </DataContainer>
                    </LineContentWrapper>
                    <LineContentWrapper>
                        <DataContainer>
                            <FlightRounded style={{ color: palette.primary.main, rotate: '45deg', opacity: '70%' }} />
                            {plane}
                        </DataContainer>
                        <DataContainer>
                            <AirlineSeatReclineNormalRounded style={iconStyle} />
                            {sit}
                        </DataContainer>
                        <DataContainer>
                            <MeetingRoomRounded style={iconStyle} />
                            {gate}
                        </DataContainer>
                    </LineContentWrapper>
                </div>
            </Content>
            <TitleWrapper style={{ width: '32vw' }}>
                <Typography variant="h5" color="#fff">
                    BOARDING {format(date, 'HH:mm')}
                </Typography>
            </TitleWrapper>
        </Card>
    );
};

const TitleWrapper = styled('div', {
    label: 'TitleWrapper',
})(({ theme }) => ({
    display: 'flex',
    paddingLeft: '32px',
    paddingTop: '4px',
    paddingBottom: '4px',
    alignContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #71cff3, #fff)',
}));

const Content = styled('div', {
    label: 'Content',
})({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: '32px',
    paddingRight: '32px',
    marginTop: '16px',
    marginBottom: '16px',
});

const DataContainer = styled('div', {
    label: 'DataContainer',
})({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
});

const LineContentWrapper = styled('div', {
    label: 'LineContentWrapper',
})({
    gap: 8,
    display: 'flex',
    flexDirection: 'row',
});

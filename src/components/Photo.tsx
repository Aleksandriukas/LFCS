import React from 'react';
import { styled } from '@mui/material';

export type PhotoProps = {
    src: string;
};

export const Photo = ({ src }: PhotoProps) => {
    return <Container src={src} />;
};

const Container = styled('img', {
    label: 'Container',
})({
    overflow: 'hidden',
    width: '16rem',
    height: '16rem',
    borderRadius: '50%',
    border: '1px solid #000',
});

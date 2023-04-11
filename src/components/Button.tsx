import { Button as MuiButton, ButtonProps } from '@mui/material';

export const Button = (props: ButtonProps) => {
    return <MuiButton color="primary" {...props} />;
};

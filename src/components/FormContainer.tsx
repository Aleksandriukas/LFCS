import React, { Fragment, PropsWithChildren } from "react";
import { commons } from "../commons";
import { Container, Paper, Typography, styled } from "@mui/material";
import { FormTitle } from "./FormTitle";
export type FormContainerProps = PropsWithChildren<{
  title?: string;
}>;

export const FormContainer = ({
  children,
  title,
  ...other
}: FormContainerProps) => {
  return (
    <RootContainer maxWidth="md">
      <Typography variant="h1">{commons.welcomeMsg}</Typography>
      <FormWrapper>
        {title && <FormTitle>{title}</FormTitle>}
        {children}
      </FormWrapper>
    </RootContainer>
  );
};

const RootContainer = styled(Container, {
  label: "RootContainer",
})(({ theme }) => ({
  gap: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
}));

const FormWrapper = styled(Paper, {
  label: "FormWrapper",
})(({ theme }) => ({
  padding: theme.spacing(2, 4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

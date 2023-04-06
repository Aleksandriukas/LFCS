import React, { PropsWithChildren } from 'react';
import { WelcomeTitle } from '../commons';

export type FormContainerProps = PropsWithChildren<{
    title?: string;
}>;

export const FormContainer = ({ children, title }: FormContainerProps) => {
    return (
        <div>
            <h1 className="FormContainerTitle">{WelcomeTitle}</h1>
            <div className="FormContainer">
                <div className="FormContainerWrapper">
                    {title && <p>{title}</p>}
                    {children}
                </div>
            </div>
        </div>
    );
};

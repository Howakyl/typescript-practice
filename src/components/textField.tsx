import React from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    bool?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person?: Person;
}

export const TextField: React.FC<Props> = (props) => {
    return (
        <div>
            <input />
            <p>My name is {props.person?.firstName} {props.person?.lastName}</p>
        </div>
    );
};
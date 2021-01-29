import React from 'react';
import { useState } from 'react';

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

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = (props) => {

    // const [count, setCount] = useState<number | null >(5);
    // const [count, setCount] = useState<TextNode>({text: 'hi'})

    // setCount({text: 'yo'});

    return (
        <div>
            <input />
            <p>My name is {props.person?.firstName} {props.person?.lastName}</p>
            {/* <p>{count}</p> */}
        </div>
    );
};
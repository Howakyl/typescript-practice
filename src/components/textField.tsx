import React from 'react';
import { useState , useRef} from 'react';

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
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = (props) => {

    // const [count, setCount] = useState<number | null >(5);
    // const [count, setCount] = useState<TextNode>({text: 'hi'})
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    // setCount({text: 'yo'});

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={props.handleChange}/>
            <p>My name is {props.person?.firstName} {props.person?.lastName}</p>
            {/* <p>{count}</p> */}
        </div>
    );
};
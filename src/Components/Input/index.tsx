import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps  extends   InputHTMLAttributes<HTMLInputElement>{
    icon?: React.ComponentType<IconBaseProps>;
    name: string;
}

const Input: React.FC<InputProps> = ({ name,icon: Icon, ...rest }) => {
    const inputRef = useRef(null);

    const {
        fieldName,
        defaultValue,
        error,
        registerField
    } = useField(name);

    useEffect(()=> {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);


    return(
        <>
        <Container>
            {Icon && <Icon size={20} />}
            <input defaultValue={defaultValue} ref={inputRef} {...rest}/>
        </Container>
        <Error error={error}>{error || 'Error message here'}</Error>
        </>
    );
}


export default Input;
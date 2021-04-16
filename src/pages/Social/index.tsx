import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { AiFillCaretRight, AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai';
import * as Yup from 'yup';

import { Content, SocialArea, FormArea } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import SocialItem from '../../Components/SocialItem';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

const Social: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: Object) => {
        formRef.current?.setErrors({});
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Name required'),
                email: Yup.string(),
                message: Yup.string().required('Message Required')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            const response = await api.post('/mail', data);
            if(response.status !== 204){
                alert('Unknown error, try again later.');
            }else{
                alert('Thanks for you contact :)')
            }
            formRef.current?.reset();
        }catch(err){
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, [])

    return (
        <Content>
        <SocialArea>
            <h2>Follow me</h2>
            <div>
                <SocialItem icon={AiFillLinkedin} name="Linkedin" url="https://www.linkedin.com/in/brunosana/"/>
                <SocialItem icon={AiFillGithub} name="Github" url="https://github.com/brunosana"/>
                <SocialItem icon={AiFillTwitterSquare} name="Twitter" url="https://twitter.com/BrunoSana2"/>
            </div>
        </SocialArea>
        <FormArea>
            <h2>Or send me a message</h2>
            <Form ref={formRef} initialData={{ name: '', email: '', message: ''}} onSubmit={handleSubmit} >
                <Input icon={AiFillCaretRight} type="text" name="name" placeholder="Name"/>
                <Input icon={AiFillCaretRight} type="text" name="email" placeholder="Email"/>
                <Input icon={AiFillCaretRight} type="text" name="message" placeholder="Message"/>
                <Button type="submit" >Send</Button>
            </Form>
        </FormArea>
        </Content>
    )
}

export default Social;
import { Button, TextField } from '@mui/material';
import React, { useRef } from 'react';

import MenuItem from '@mui/material/MenuItem';
import UIButton from './UI/UIButton';
import emailjs from '@emailjs/browser';
import styles from '../styles/components/Contact.module.scss';
import { toast } from 'react-toastify';

interface FormDataType {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const form = useRef();
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm('service_sknqxih', 'template_79ixiwh', form.current, 'JfIaPcyIDQHYxoOel');
            toast.success('Email Sent Successfully');
            form.current.reset();
        } catch (err) {
            toast.error('Error');
        }
    };

    return (
        <form className={styles.container} ref={form} onSubmit={onSubmit}>
            <h1>
                Get In Touch
                <br />
                <span>Contact Me</span>
            </h1>
            <section>
                <TextField label='Name' name='name' className='input' required />
                <TextField label='E-mail' name='email' className='input' required />
                <TextField label='Message' name='message' multiline />
                <UIButton>Submit</UIButton>
            </section>
        </form>
    );
};

export default Contact;

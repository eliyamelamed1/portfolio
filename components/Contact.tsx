import React, { useRef } from 'react';

import { TextField } from '@mui/material';
import UIButton from './UI/UIButton';
import emailjs from '@emailjs/browser';
import styles from '../styles/components/Contact.module.scss';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm('service_ul302nl', 'template_y6wdpnr', form.current, 'JfIaPcyIDQHYxoOel');
            toast.success('Email Sent Successfully');
            form.current.reset();
        } catch (err) {
            toast.error('Error sending the email');
        }
    };

    return (
        <form className={styles.container} ref={form} onSubmit={onSubmit} id='Contact'>
            <h1>
                Get In Touch
                <br />
                <span>Contact Me</span>
            </h1>
            <section>
                <TextField label='Name' name='name' className='input' variant='filled' required />
                <TextField label='E-mail' name='email' className='input' required variant='filled' />
                <TextField label='Message' name='message' multiline variant='filled' />
                <UIButton>Submit</UIButton>
            </section>
        </form>
    );
};

export default Contact;

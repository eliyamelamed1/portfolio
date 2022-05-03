import * as React from 'react';

import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import ProjectCard from '../ProjectCard';
import UIButton from './UIButton';
import { motion } from 'framer-motion';
import zbite from '../../assets/zbite.bmp';

interface UIPopoverTypes {
    imageSrc: string;
    childrem: any;
}
export default function UIPopover({ children, imageSrc }: UIPopoverTypes) {
    const [openForm, setOpenForm] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenForm(true);
    };

    const handleClose = () => {
        setOpenForm(false);
    };

    return (
        <>
            <motion.button
                onClick={handleClick}
                whileHover={{
                    scale: 1.1,
                }}
            >
                <img src={imageSrc} />
            </motion.button>
            <Modal open={openForm} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        borderRadius: '2rem',
                        width: 'clamp(300px,80vw,800px)',
                        maxHeight: '90vh',
                        overflow: 'auto',
                    }}
                >
                    {children}
                </Box>
            </Modal>
        </>
    );
}

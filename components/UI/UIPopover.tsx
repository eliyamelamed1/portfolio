import * as React from 'react';

import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import ProjectCard from '../ProjectCard';
import UIButton from './UIButton';
import { createContext } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/UI/UIPopover.module.scss';
import zbite from '../../assets/zbite.bmp';

export const ProjectContext = createContext({ projectId: '', setProjectId: (arg: string) => {} });

interface UIPopoverTypes {
    imageSrc: string;
    id: string;
    children: any;
}
export default function UIPopover({ children, imageSrc, id }: UIPopoverTypes) {
    const [projectId, setProjectId] = React.useState('');
    const value = { projectId, setProjectId };
    const [openForm, setOpenForm] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setProjectId(id);
        setOpenForm(true);
    };

    const handleClose = () => {
        setProjectId('');
        setOpenForm(false);
    };

    return (
        <>
            <ProjectContext.Provider value={value}>
                <motion.button
                    onClick={handleClick}
                    whileHover={{
                        scale: 1.1,
                    }}
                >
                    <img src={imageSrc} />
                </motion.button>
                <Modal open={openForm} onClose={handleClose}>
                    <Box className={styles.container}>{children}</Box>
                </Modal>
            </ProjectContext.Provider>
        </>
    );
}

import * as React from 'react';

import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
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
        <div className={styles.container}>
            <ProjectContext.Provider value={value}>
                <motion.button
                    onClick={handleClick}
                    whileHover={{
                        scale: 1.1,
                    }}
                >
                    <i>
                        <Image src={imageSrc} layout='responsive' width={16} height={9} alt='project' quality={100} />
                    </i>
                </motion.button>
                <Modal open={openForm} onClose={handleClose}>
                    <Box className={styles.popup}>
                        {children}
                        <CloseIcon className={styles.closePopup} onClick={() => setOpenForm(false)} />
                    </Box>
                </Modal>
            </ProjectContext.Provider>
        </div>
    );
}

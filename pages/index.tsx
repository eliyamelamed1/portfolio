import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Icons from '../components/Icons';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import styles from '../styles/pages/index.module.scss';

const HrSeparator = () => {
    return <hr className={styles.hr} />;
};
const index = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Intro />
            <Icons />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default index;

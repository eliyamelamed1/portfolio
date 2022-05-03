import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Icons from '../components/Icons';
import ImageSlider from '../components/ImageSlider';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import styles from '../styles/pages/index.module.scss';

const HrSeparator = () => {
    return <hr className={styles.hr} />;
};
const index = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Intro />
            <ImageSlider />
            <Skills />
            <Projects />
            <HrSeparator />
            <Contact />
            <Footer />
        </div>
    );
};

export default index;

import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider disableTransitionOnChange>
            <ToastContainer />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;

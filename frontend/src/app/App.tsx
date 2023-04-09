import 'react-toastify/dist/ReactToastify.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { iconProvider } from '../common/config/icon-provider';

library.add(iconProvider);

const App: React.FC = () => {
    return (
        <>
            <Outlet />
            <ToastContainer
                className={'notification'}
                position={'top-left'}
                theme={'light'}
                autoClose={2000}
            />
        </>
    );
};

export { App };

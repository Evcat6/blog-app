import { createBrowserRouter } from 'react-router-dom';

import { App } from '../app/App';
import { AppRoute } from '../common/enums/app-route.enum';
import { PostDetails, Posts } from '../pages/pages';

const router = createBrowserRouter([
    {
        path: AppRoute.ROOT,
        element: <App />,
        children: [
            {
                index: true,
                element: <Posts />,
            },
            {
                path: AppRoute.POST_$ID,
                element: <PostDetails />,
            },
        ],
    },
]);

export { router };

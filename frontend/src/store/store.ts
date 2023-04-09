import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Environment } from '../common/config/environment';
import { AppEnvironment } from '../common/enums/enums';
import {
    commentService as comment,
    notificationService as notification,
    postsService as posts,
} from '../services/services';
import { handleError } from './middlewares/middleware';
import { rootReducer } from './root-reducer';

const extraArgument = {
    services: {
        posts,
        comment,
        notification,
    },
};

const middleware = getDefaultMiddleware({
    thunk: { extraArgument },
});

export const store = configureStore({
    devTools: Environment.MODE !== AppEnvironment.PRODUCTION,
    reducer: rootReducer,
    middleware: middleware.concat(handleError),
});

type AsyncThunkConfig = {
    state: RootState;
    dispatch: AppDispatch;
    extra: typeof extraArgument;
    rejectValue: {
        message: string;
    };
};

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch, AsyncThunkConfig };

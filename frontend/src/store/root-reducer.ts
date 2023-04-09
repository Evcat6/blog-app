import { combineReducers } from '@reduxjs/toolkit';

import { reducer as postDetails } from './post-details/reducer';
import { reducer as posts } from './posts/reducer';

const rootReducer = combineReducers({ posts, postDetails });

export { rootReducer };

import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import topStories from './reducer/topStoriesReducer';
import comments from './reducer/topStoriesReducer'

// const rootReducer = combineReducers({
//     stories: topStories,
//     comments: comments
// })

const store = createStore(topStories,compose(
    applyMiddleware(thunk,logger),
));

export default store;
import { createStore,applyMiddleware,compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import topStories from './reducer/topStoriesReducer';


const store = createStore(topStories,compose(
    applyMiddleware(thunk,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
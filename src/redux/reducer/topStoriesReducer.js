import {FETCH_STORIES_SUCCESS, FETCH_STORIES_REQUEST, FETCH_STORIES_ERROR} from '../actions/actionTypes';


const initialState = {
    stories: [],
    error:'',
    isLoading: false
}

const topStoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_STORIES_REQUEST:
            return {...state,
                isLoading:true
            }
        case FETCH_STORIES_SUCCESS : 
            return {...state, 
                stories: action.stories,
                error: '',
                isLoading: false
            }
        case FETCH_STORIES_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }

}

export default topStoriesReducer;
import axios from 'axios';
import {FETCH_STORIES_ERROR, FETCH_STORIES_REQUEST, FETCH_STORIES_SUCCESS} from './actionTypes';

export const fetchStoriesRequest = () => {
    return { 
        type: FETCH_STORIES_REQUEST 
    }
}

export const fetchStoriesSuccess = (stories) => {
    return {
        type: FETCH_STORIES_SUCCESS,
        stories: stories
    }
}

export const fetchStoriesError = (error) => {
    return {
        type: FETCH_STORIES_ERROR,
        error: error
    }
}

export const fetchStories = () => {
    return function(disptch){
        disptch(fetchStoriesRequest())
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(res => {

            disptch(fetchStoriesSuccess(res.data.slice(0,10)))

        }).catch(err => {
            disptch(fetchStoriesError(err))
        });
    }
}
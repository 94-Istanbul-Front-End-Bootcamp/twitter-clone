import { LOAD_TWEETS, ON_CHANGE_TWEET_FORM, ADD_TWEET } from '../constants/tweets';

export const getTweets = () => (dispatch) => {
    fetch('tweetData.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            dispatch({ type: LOAD_TWEETS, payload: data });
        })
        .catch(err => console.log(err));
}

export const handleTweetSubmit = (tweetText) => (dispatch) => {
    dispatch({ type: ADD_TWEET, payload: tweetText });
}

export const changeTweetForm = (value) => (dispatch) => {
    dispatch({ type: ON_CHANGE_TWEET_FORM, payload: value });
}
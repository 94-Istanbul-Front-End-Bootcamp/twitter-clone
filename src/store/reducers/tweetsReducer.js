import {
    LOAD_TWEETS,
    ON_CHANGE_TWEET_FORM,
    ADD_TWEET
} from '../constants/tweets';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const initial_Tweets_State = {
    tweetText: "",
    tweets: []
}

export default (state = initial_Tweets_State, action) => {
    switch (action.type) {
        case LOAD_TWEETS:
            return { ...state, tweets: action.payload }
        case ON_CHANGE_TWEET_FORM:
            return { ...state, tweetText: action.payload }
        case ADD_TWEET:
            let userData = JSON.parse(localStorage.getItem("user"));
            let now = moment().format('YYYY-MM-DD hh:mm:ss');
            let newTweet = {
                "id": uuidv4(),
                "name": userData.name,
                "username": userData.username,
                "tweetContent": action.payload,
                "likeCount": 0,
                "retweetCount": 0,
                "replyCount": 0,
                "dateTime": now,
                "profilePicture": userData.profilePicture
            };

            return {
                ...state,
                tweets: [newTweet, ...state.tweets]
            }
        default:
            return state;
    }
}
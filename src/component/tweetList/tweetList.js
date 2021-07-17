import React from 'react';
import { Tweet } from '../tweet';

const TweetList = (props) => {

    const onTweetLike = (id) => {
        props.tweetLike(id);
    }
    
    return (
        <div>
            {
                props.tweets.map((tweet) => (
                    <Tweet key={tweet.id} {...tweet} onTweetLike={onTweetLike} />
                ))
            }
        </div>
    );
}

export default TweetList;
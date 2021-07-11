import React from 'react';
import { Icon } from '../icon';

const TweetForm = () => {
    return (
        <div className="tweetField">
            <div className="tweetField__profilePic">
                <Icon size={46} iconName="user" />
            </div>
            <div className="tweetField__inputContainer">
                <div
                    className="tweetField__input"
                    contentEditable="true">
                    What's happening?
                </div>
                <div className="tweetField__options">
                    <div className="tweetField__tools">
                        <button className="tweetField__items">
                            <Icon size={20} iconName="image" />
                        </button>
                        <button className="tweetField__items">
                            <Icon size={20} iconName="bar-chart-2" />
                        </button>
                    </div>
                    <div className="tweetField__submit">
                        <button className="tweetField__submitButton">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetForm
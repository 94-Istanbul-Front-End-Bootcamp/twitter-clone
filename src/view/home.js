import React, { Component } from "react";
import { Header } from '../container';
import { TweetForm } from '../component/tweetForm';

class Home extends Component {
    render() {
        return (
            <div className="latestTweets">
                <Header title="Home" />
                <TweetForm />
                <div className="latestTweets__divisor" />
                <span>asgadsf</span>
            </div>
        );
    }
}

export default Home;
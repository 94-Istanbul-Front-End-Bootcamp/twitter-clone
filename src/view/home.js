import React, { Component } from "react";
import { Header } from '../container';
import { TweetForm } from '../component/tweetForm';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            tweetText: ""
        }
        this.onChangeTweetForm = this.onChangeTweetForm.bind(this);
        this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
    }

    onChangeTweetForm(event) {
        this.setState({ tweetText: event.target.value });
    }

    handleTweetSubmit() {
        console.log(this.state.tweetText);
    }

    render() {
        const { tweetText } = this.state;

        return (
            <div className="latestTweets">
                <Header title="Home" />
                <TweetForm
                    tweetText={tweetText}
                    onChangeTweetForm={this.onChangeTweetForm}
                    handleTweetSubmit={this.handleTweetSubmit} />
                <div className="latestTweets__divisor" />
                <span>asgadsf</span>
            </div>
        );
    }
}

export default Home;
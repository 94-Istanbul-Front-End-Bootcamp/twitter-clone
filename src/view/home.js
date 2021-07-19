import React, { Component } from "react";
import { Header } from '../container';
import { TweetForm } from '../component/tweetForm';
import { TweetList } from '../component/tweetList';
import { getTweets, handleTweetSubmit, changeTweetForm } from '../store/actions';
import { connect } from 'react-redux';

let userData = JSON.parse(localStorage.getItem("user"));

class Home extends Component {
    constructor() {
        super();
        this.onChangeTweetForm = this.onChangeTweetForm.bind(this);
        this.tweetLike = this.tweetLike.bind(this);
    }

    componentWillMount() {
        this.props.getTweets();
    }

    onChangeTweetForm(event) {
        this.props.changeTweetForm(event.target.value);
    }

    tweetLike(id) {
        console.log(id);
        /*let newTweets = this.state.tweets;
        let tweetsIndex = newTweets.findIndex(tweet => tweet.id === id);

        if (newTweets[tweetsIndex].isLike) {
            newTweets[tweetsIndex].likeCount -= 1;
        } else {
            newTweets[tweetsIndex].likeCount += 1;
        }

        newTweets[tweetsIndex].isLike = !newTweets[tweetsIndex].isLike;

        this.setState({
            tweets: [...newTweets]
        });*/
    }

    render() {
        const { tweets, tweetText, handleTweetSubmit } = this.props;
        return (
            <div className="latestTweets">
                <Header title="Home" />
                <TweetForm
                    tweetText={tweetText}
                    onChangeTweetForm={this.onChangeTweetForm}
                    handleTweetSubmit={() => { handleTweetSubmit(tweetText) }}
                    profilePicture={userData.profilePicture} />
                <div className="latestTweets__divisor" />
                {
                    tweets.length > 0 ? (
                        <TweetList tweetLike={this.tweetLike} tweets={tweets} />
                    ) : (
                        <span>Loading...</span>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.Tweets;
}

export default connect(mapStateToProps, {
    getTweets,
    handleTweetSubmit,
    changeTweetForm
})(Home);
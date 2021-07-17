import React, { Component } from "react";
import { Header } from '../container';
import { TweetForm } from '../component/tweetForm';
import { TweetList } from '../component/tweetList';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

let userData = JSON.parse(localStorage.getItem("user"));

class Home extends Component {
    constructor() {
        super();
        this.state = {
            tweetText: "",
            tweets: []
        }
        this.onChangeTweetForm = this.onChangeTweetForm.bind(this);
        this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
        this.tweetLike = this.tweetLike.bind(this);
    }

    componentWillMount() {
        fetch('tweetData.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ tweets: data });
            })
            .catch(err => console.log(err));
    }

    onChangeTweetForm(event) {
        this.setState({ tweetText: event.target.value });
    }

    handleTweetSubmit() {
        let newTweets = this.state.tweets;
        let now = moment().format('YYYY-MM-DD hh:mm:ss');
        newTweets.unshift({
            "id": uuidv4(),
            "name": userData.name,
            "username": userData.username,
            "tweetContent": this.state.tweetText,
            "likeCount": 0,
            "retweetCount": 0,
            "replyCount": 0,
            "dateTime": now,
            "profilePicture": userData.profilePicture
        });

        this.setState({
            tweets: [...newTweets]
        });
    }

    tweetLike(id) {
        let newTweets = this.state.tweets;
        let tweetsIndex = newTweets.findIndex(tweet => tweet.id === id);

        if (newTweets[tweetsIndex].isLike) {
            newTweets[tweetsIndex].likeCount -= 1;
        } else {
            newTweets[tweetsIndex].likeCount += 1;
        }

        newTweets[tweetsIndex].isLike = !newTweets[tweetsIndex].isLike;

        this.setState({
            tweets: [...newTweets]
        });
    }

    render() {
        const { tweetText, tweets } = this.state;
        return (
            <div className="latestTweets">
                <Header title="Home" />
                <TweetForm
                    tweetText={tweetText}
                    onChangeTweetForm={this.onChangeTweetForm}
                    handleTweetSubmit={this.handleTweetSubmit}
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

export default Home;
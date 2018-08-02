import User from '../components/User';
import Message from '../components/Message';
import React from 'react';
import _ from 'lodash';
import Request from '../services/httpCall';

const e = React.createElement;

class Status extends React.Component {
    render() {
        return e('div', { className: this.props.className }, this.props.message);
    }
}

const Pending = () => {
    return e(Status, { message: 'Pending . . .' });
}

const Error = () => {
    return e(Status, { className: 'errorMessage', message: 'Something went wrong. Please come back later!' });
}

const Button = (onclick, buttonMessage) => {
    return e('button', { className: "timelineButton", onClick: onclick }, buttonMessage);
}


class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: null,
            status: Pending()
        }
        this.update = this.update.bind(this);
        this.pending = this.pending.bind(this);
        Request(this.update);
    }

    pending(callback) {
        this.setState({
            status: Pending()
        });
        callback();
    }

    update(jsonList) {
        if(jsonList) {
            this.setState({
                tweets: jsonList
            });
        } else {
            this.setState({
                tweets: null,
                status: Error()
            });
        }
    }

    render() {
        let append;
        if(this.state.tweets) {
            append = _.map(this.state.tweets, (i) => {
                return e('div', { className: "item" , key: i.id}, User(i.user), Message(i));
            });
        } else if(this.state.status) {
            append = this.state.status;
        } else {
            append = Error();
        }

        return e('div', {},  e('div', { className: "buttonContainer" }, Button(() => this.pending(() => Request(this.update)), "Get Timeline")), e('div', { className: "data" }, append));
    }
}

export {Status, Pending, Error, Button, TweetList};
export default TweetList;
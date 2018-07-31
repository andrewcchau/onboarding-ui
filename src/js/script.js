import TweetList from './components/TweetList';

const React = require('react');
const ReactDOM = require('react-dom');
const e = React.createElement;

const Title = (title) => {
    return e('div', { className: "title" }, title);
}

const init = () => {
    /* Render Title */
    let title = Title("Lab for Andrew");

    /* Location to Render */
    let location = document.getElementsByClassName("interfaceInsert") && document.getElementsByClassName("interfaceInsert")[0];

    /* Render timeline */
    let timeline = e(TweetList);

    /* Render Everything */
    ReactDOM.render(
        [title, timeline],
        location
    );
}

window.onload = () => {
    init();
}
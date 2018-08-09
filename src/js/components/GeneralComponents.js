import React from 'react';

const e = React.createElement;

const Header = (headerTitle) => {
    return e('h1', {}, headerTitle);
}

class Status extends React.Component {
    render() {
        return e('div', { className: this.props.className }, this.props.message);
    }
}

const Mismatch = (message) => {
    return e(Status, { className: 'errorMessage', message: message });
}

const Pending = () => {
    return e(Status, { message: 'Pending . . .' });
}

const Error = (errorText) => {
    return e(Status, { className: 'errorMessage', message: errorText });
}

const Button = (buttonClass, onclick, buttonMessage) => {
    return e('button', { className: buttonClass, onClick: onclick }, buttonMessage);
}

const TextBox = (textBoxClass, size, holderText, keyUpFunction) => {
    return e('input', {className: textBoxClass, size: size, placeholder: holderText, onKeyUp: keyUpFunction});
}

const ButtonEnable = (textBoxClass, buttonClass) => {
    let form = document.getElementsByClassName(textBoxClass) && document.getElementsByClassName(textBoxClass)[0];
    let button = document.getElementsByClassName(buttonClass) && document.getElementsByClassName(buttonClass)[0];
    if(form.value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

export {Header, Mismatch, Pending, Error, Button, TextBox, ButtonEnable};
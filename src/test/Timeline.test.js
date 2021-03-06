import {shallow, mount} from 'enzyme';
import React from 'react';
import JsonObj from './JSONTest';
import Tweets from '../js/components/Tweets';
import UserTimeline from '../js/components/UserTimeline';
import HomeTimeline from '../js/components/HomeTimeline';

const e = React.createElement;

/* Test HomeTimeline Component */
const callBackFunc = (cb) => {
    cb(JsonObj);
}

describe('Home Timeline Test No Input', () => {
    it('Should have children components but nothing else', () => {
        const wrapper = shallow(e(HomeTimeline));
        expect(wrapper.find('div').length).toEqual(2);
        expect(wrapper.childAt(0).hasClass('homeTLUIContainer')).toEqual(true);
        expect(wrapper.childAt(1).hasClass('dataHome')).toEqual(true);
        expect(wrapper.childAt(1).children().length).toEqual(1);
    });
});

describe('Home Timeline Button Press Test', () => {
    it('Should have proper children components after button press', () => {
        const wrapper = mount(e(HomeTimeline, { test: true, requestFunc: callBackFunc}));
        expect(wrapper.find('div').length).toEqual(4);
        wrapper.childAt(0).childAt(0).childAt(0).childAt(0).find('button').simulate('click');
        expect(wrapper.find('div').length).toEqual(9);
    });
});

describe('User Timeline Test No Input', () => {
    it('Should have children components but nothing else', () => {
        const wrapper = shallow(e(UserTimeline));
        expect(wrapper.find('div').length).toEqual(2);
        expect(wrapper.childAt(0).hasClass('userTLUIContainer')).toEqual(true);
        expect(wrapper.childAt(1).hasClass('dataUser')).toEqual(true);
        expect(wrapper.childAt(1).children().length).toEqual(1);
    });
});

describe('User Timeline Button Press Test', () => {
    it('Should have proper children components after button press', () => {
        const wrapper = mount(e(UserTimeline, { test: true, requestFunc: callBackFunc }));
        expect(wrapper.find('div').length).toEqual(4);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('div').length).toEqual(8);
    });
});
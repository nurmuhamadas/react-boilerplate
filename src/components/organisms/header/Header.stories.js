/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from './Header';
import logo from '../../../assets/images/logo.png';

export default {
  title: 'Organisms/Header',
  component: Header,
  args: {
    logo,
  }
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

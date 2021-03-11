/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import * as HeaderStories from '../../organisms/header/Header.stories';
import HomeTemplate from './Home';
import brandLogo from '../../../assets/images/logo.png';

export default {
  title: 'Templates/Home',
  component: HomeTemplate,
  args: {
    heroTextDetail: 'Easy ways to learn code with any videos provided here. Learn and grow with us.',
    heroTextHeading: 'Learn to Code',
    brandLogo,
  }
};

const Template = (args) => <HomeTemplate {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Home from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const HomePage = (args) => <Home {...args} />;

/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

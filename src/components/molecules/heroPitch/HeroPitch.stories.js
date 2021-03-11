/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import HeroPitch from './HeroPitch';

export default {
  title: 'Molecules/HeroPitch',
  component: HeroPitch,
  args: {
    textHeading: 'Learn to code',
    textDetail: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. contrecture. Lorem ipsum dolor sit amet. contrecture. Lorem ipsum dolor sit amet. contrecture. Lorem ipsum dolor sit amet. contrecture',
  },
};

const Template = (args) => <HeroPitch {...args} />;

export const AlignRightPitch = Template.bind({});
AlignRightPitch.args = {
  align: 'right',
};

export const AlignLeftPitch = Template.bind({});

export const AlignCenterPitch = Template.bind({});
AlignCenterPitch.args = {
  align: 'center',
};

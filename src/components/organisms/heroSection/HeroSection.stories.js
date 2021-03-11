/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import HeroSection from './HeroSection';
import heroImg from '../../../assets/images/hero_img.svg';

export default {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  args: {
    textHeading: 'Learn to code',
    textDetail: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. contrecture. Lorem ipsum dolor sit amet. contrecture. Lorem ipsum dolor sit amet. contrecture. Lorem ipsum dolor sit amet. contrecture',
  },
};

const Template = (args) => <HeroSection {...args} />;

export const HeroCenterImage = Template.bind({});

export const HeroLeftImage = Template.bind({});
HeroLeftImage.args = {
  imageSrc: heroImg,
};

export const HeroRightImage = Template.bind({});
HeroRightImage.args = {
  imageSrc: heroImg,
  imgPosition: 'right',
};

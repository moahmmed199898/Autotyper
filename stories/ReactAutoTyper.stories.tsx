import React, { Component } from 'react';
import { ComponentStory, Meta, Story } from '@storybook/react';
import { AutoTyper, Props } from '../src';


const meta: Meta = {
  title: 'React Auto Typer',
  component: AutoTyper,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    speed: {
      type: 'number',
      defaultValue: 100,
      control: {
        type: "range",
        min: 20,
        max: 500
      }
      
    }
  }
  
};

export default meta;




const Template: ComponentStory<typeof AutoTyper> = args => <AutoTyper {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Dev = Template.bind({});

Dev.args = {
  children: "Hello World",
}
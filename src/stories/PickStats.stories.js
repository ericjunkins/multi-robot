import React from 'react';
import PickStats from "./../components/PickStats";

export default {
    title: 'Pick Statistics',
    component: PickStats,
    argTypes: {
        value: {
            control: { type: "number", min: 0, max: 500, step: 1},
            defaultValue: 200
        },
        type: {
            control: { type: 'select'},
            options: ['left', 'right'],
            defaultValue: 'left'
        },
        threshold: {
            control: { type: "select"},
            options: [100, 150, 200, 250, 300],
            defaultValue: 200
        }
    }
}

const Template = (args) => <PickStats {...args} />;

export const Release = Template.bind({});

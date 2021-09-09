import React from 'react';
import StatusIcon from "./../components/StatusIcon";

export default {
    title: 'Status Icon',
    component: StatusIcon,
    argTypes: {
        value: {
            type: 'boolean',
            defaultValue: true
        },
        percent: {
            control: { type: 'range', min: 0, max: 1, step: 0.1},
            defaultValue: 0.7
        }
    }
}

const Template = (args) => <StatusIcon {...args} />;

export const Wifi = Template.bind({});
Wifi.args = {
    type:"wifi"
}

export const Driving = Template.bind({});
Driving.args = {
    type:"driving"
}

export const Battery = Template.bind({})
Battery.args = {
    type:"battery"
}

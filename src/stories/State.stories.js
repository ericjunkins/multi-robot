import React from 'react';
import State from "./../components/State";

export default {
    title: 'State',
    component: State,
    argTypes: {
        state: {
            control: { type: 'select'},
            options: ['Harvest', 'Tray Change', "Idle", "Fault"],
            defaultValue: 'Harvest'
        }
    }
}

const Template = (args) => <State {...args} />;

export const RobotState = Template.bind({});

import React from 'react';
import ReleaseVersion from "./../components/ReleaseVersion";

export default {
    title: 'Git Branch',
    component: ReleaseVersion,
    argTypes: {
        value: {
            type: 'text',
            defaultValue: 'rel/08.16.21-1'
        },
        type: {
            control: { type: 'select'},
            options: ['main', 'sbc'],
            defaultValue: 'main'
        }
    }
}

const Template = (args) => <ReleaseVersion {...args} />;

export const Release = Template.bind({});


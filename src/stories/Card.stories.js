import React from 'react';
import Card from "./../components/Card";
import {ChakraProvider} from "@chakra-ui/react";

import theme from "./../theme";

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        name: { 
            control: {type: "text"}, defaultValue: "F63"
        },
        wifi: {
            control: {type: "boolean"}, defaultValue: true
        },
        driving: {
            control: {type: "boolean"}, defaultValue: false
        },
        battery: {
            control: {type: "range", min: 0, max: 1.0, step: 0.1}, defaultValue: 0.7
        },
        state: {
            control: {type: "select"},
            options: ["Harvest", "Tray Change", "Idle", "Fault"],
            defaultValue: "Harvest"
        }, 
        errors: {
            control: {type: 'object'},
            defaultValue: { fatal: 0, error: 14, warning: 32}
        },
        picks: {
            control: {type: 'object'},
            defaultValue: { left: 200, right: 293}
        },
        version: {
            control: {type: 'object'},
            defaultValue: { main_branch: "rel/08.16.21-1", sbc_branch: "rel/08.16.21-1"}
        }

    }
}

const Template = (args) => (
    <ChakraProvider theme={theme}>
        <Card {...args} />
    </ChakraProvider>
)


export const Default = Template.bind({});
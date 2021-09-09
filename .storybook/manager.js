import {addons} from "@storybook/addons";
// import theme from "./../src/theme";
import storybookTheme from "./theme";

console.log(storybookTheme)
addons.setConfig({theme: storybookTheme});
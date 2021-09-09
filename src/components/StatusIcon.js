import {Icon} from "@chakra-ui/react";

import {
    FaWifi, 
    FaBatteryEmpty, 
    FaBatteryQuarter, 
    FaBatteryHalf, 
    FaBatteryThreeQuarters, 
    FaBatteryFull,
} from "react-icons/fa";

import {GiCartwheel} from "react-icons/gi"

const StatusIcon = ({type, value, percent, boxSize="30px", mt="5px"}) => {
    let icon, color

    switch (type){
        case 'driving':
            icon = GiCartwheel
            color = value ? 'lightgreen' : 'lightgrey'
            break;
        case 'wifi':
            icon = FaWifi
            color = value ? 'lightgreen' : 'lightgrey'
            break;
        case 'battery':
            if (percent >= 0.8) {
                icon = FaBatteryFull
                color = "lightgreen"
            }
            else if (percent >= 0.6) {
                icon = FaBatteryThreeQuarters
                color = "lightgreen"
            }
            else if (percent >= 0.4) {
                icon = FaBatteryHalf
                color = "orange"
            }
            else if (percent >= 0.1) {
                icon = FaBatteryQuarter
                color = "red" 
            }
            else { 
                icon = FaBatteryEmpty
                color = "red" 
            }
            break;
        default:
            icon = FaWifi
            color = value ? 'lightgreen' : 'lightgrey'
            break;
    }

    return (
        <Icon
            as={icon}
            color={color}
            boxSize={boxSize}
            mx="10px"
            mt={mt}
        />
    )
}

export default StatusIcon;
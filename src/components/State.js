import {Box, Center, Text, Flex, Icon, Divider, SimpleGrid, HStack, VStack} from "@chakra-ui/react";

import {
    FaClock,
    FaCogs,
    FaHourglassHalf,
    FaExclamationTriangle,
    FaPauseCircle

} from "react-icons/fa";

const State = ({state}) => {
    let icon, color

    switch(state){
        case 'Harvest':
            icon = FaCogs
            color = 'lightgreen'
            break;
        case 'Tray Change':
            icon = FaPauseCircle
            color = 'yellow'
            break;
        case 'Idle':
            icon = FaHourglassHalf
            color = 'blue'
            break;
        case 'Fault':
            icon = FaExclamationTriangle
            color = 'red'
            break;
        default:
            icon = FaHourglassHalf
            color = 'blue'
    }

    return (
        <Center h="50px" w="100%">
            <Text fontSize="40px" fontWeight={500} color="#000"> {state} </Text>
            <Icon 
                as={icon}
                mx="10px"
                color={color}
                mt="5px"
                boxSize="35px"
            />
        </Center>
    )
}

export default State;
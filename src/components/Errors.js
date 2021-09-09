import {Box, Center, Text, Flex, Icon, Divider, SimpleGrid, HStack, VStack} from "@chakra-ui/react";

import {
    FaExclamationTriangle,
    FaExclamationCircle,
    FaExclamation,
} from "react-icons/fa";

const ErrorIcon = ({value, type}) => {
    let icon, color
    switch(type){
        case 'fatal':
            icon = FaExclamationTriangle
            color = 'red'
            break;
        case 'error':
            icon = FaExclamationCircle
            color = 'orange'
            break;
        case 'warning':
            icon = FaExclamation
            color = 'yellow'
            break;
        default:
            icon = FaExclamation
            color = 'yellow'
    }

    return (
        <Center w="100%" h="100%">
            <Icon 
                as={icon}
                color={color}
                display="inline-block"
                boxSize="25px"
                mx="5px"

            />
            <Text 
                display="inline-block" 
                fontSize="24px"
                mx="5px"
                fontWeight={400}
            >
                {value} 
            </Text>
        </Center>
    )
}

export default ErrorIcon
import {Box, Center, Text, Flex, Icon, Divider, SimpleGrid, HStack, VStack} from "@chakra-ui/react";

import {
    FaLaptopCode,
    FaMicrochip
} from "react-icons/fa";

const ReleaseVersion = ({value, type}) => {
    let icon
    switch(type){
        case 'main':
            icon = FaLaptopCode
            break;
        case 'sbc':
            icon = FaMicrochip
            break;
        default:
            icon = FaLaptopCode
    }

    return (
        <Center w="100%" h="100%">
            <Icon 
                as={icon}
                color={"#000"}
                display="inline-block"
                boxSize="20px"
                mx="8px"

            />
            <Text 
                display="inline-block" 
                fontSize="16px"
                mx="8px"
                fontWeight={500}
            >
                {value} 
            </Text>
        </Center>
    )
}

export default ReleaseVersion
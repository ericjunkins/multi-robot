import {Box, Center, Text, Flex, Icon, Divider, SimpleGrid, HStack, VStack} from "@chakra-ui/react";


import {
    FaAngleDoubleDown,
    FaAngleDown,
    FaAngleDoubleUp,
    FaAngleUp,
    FaEquals
    
} from "react-icons/fa";

const PickStats = ({value, type, threshold}) => {
    let icon, color

    if (value >= threshold * 1.3){
        icon = FaAngleDoubleUp
        color = 'blue'
    } else if (value >= threshold * 1.1) {
        icon = FaAngleUp
        color = 'blue'
    } else if ( value >= threshold * 0.9) {
        icon = FaEquals
        color = 'yellow'
    } else if (value >= threshold * 0.7) {
        icon = FaAngleDown
        color = 'orange'
    } else {
        icon = FaAngleDoubleDown
        color = 'orange'
    }

    let fontSize="42px"
    
    return (
        <Box w="100%" py="15px">
            {type === 'left' ?
                <Center borderRight="2px solid #ababab" w="100%">
                    <Center>
                        <Icon 
                            as={icon} 
                            color={color} 
                            display="inline-block"
                            boxSize="35px"
                            // mb="35px"
                            mx="10px"
                            opacity={value ? 1 : 0}
                        />
                        <Text 
                            fontWeight={500} 
                            fontSize={fontSize}
                            display="inline-block"
                            my="0px"
                        > 
                            {value} 
                        </Text>
                    </Center>
                </Center>
                :
                <Center w="100%" h="100%">
                    <Center>
                        <Text 
                            fontWeight={500} 
                            fontSize={fontSize}
                            display="inline-block"
                            my="0px"
                        > 
                            {value} 
                        </Text>
                        <Icon 
                            as={icon} 
                            color={color} 
                            display="inline-block"
                            boxSize="35px"
                            // mb="35px"
                            mx="10px"
                            opacity={value ? 1 : 0}
                        />
                    </Center>
                </Center>
            }
        </Box>
    )
}

export default PickStats
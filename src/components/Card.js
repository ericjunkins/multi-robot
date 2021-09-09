import {Box, Center, Text, Flex, Icon, Divider, SimpleGrid, HStack, VStack, Button} from "@chakra-ui/react";


import {
    FaWifi, 
    FaBatteryEmpty, 
    FaBatteryQuarter, 
    FaBatteryHalf, 
    FaBatteryThreeQuarters, 
    FaBatteryFull,
    FaChartLine,
    FaTerminal
} from "react-icons/fa";

import {GiCartwheel} from "react-icons/gi"

import ErrorsIcon from "./Errors";
import ReleaseVersion from "./ReleaseVersion";
import PickStats from "./PickStats";
import State from "./State";
import StatusIcon from "./StatusIcon";

const Card = ({name, robot_type, sbc_type, battery, wifi, driving, errors, state, picks, version}) => {
    let threshold = 200;
    return (
        <Box 
            w="400px" bg="#fff" 
            position="relative"
            borderRadius="10px" 
            border={errors.fatal ? "2px solid #690707" : "2px solid #000"}
            boxShadow={errors.fatal ? "5px 5px 5px 5px #de0b0b" : "5px 5px 5px 5px #4a4a4a"}
            px="0px" py="10px" pb="60px"
            className="robot-card"
            opacity={wifi ? 1 : 0.2}
        >
            <Flex justify="space-between" borderBottom="1px solid #ababab" px="15px">
                <Text py="5px" my="0px" fontSize="24px" fontWeight={500}>
                    {name}
                </Text>
                <Box>
                    <StatusIcon type="driving" value={driving} />
                    <StatusIcon type="wifi" value={wifi} />
                    <StatusIcon type="battery" percent={battery} />
                </Box>
            </Flex>

            <Box w="100%" px="15px" py="10px">
                <State state={state} />
            </Box>

            <Center w="100%"  py="10px" >
                {/* {state !== 'Idle' ?  */}
                <SimpleGrid w="55%" spacing="0px" columns={3} h="36px">
                    <ErrorsIcon value={errors.fatal} type="fatal" />
                    <ErrorsIcon value={errors.error} type="error" />
                    <ErrorsIcon value={errors.warning} type="warning" />
                </SimpleGrid>
                {/* <Box h ="36px"></Box>
                } */}
            </Center>

            <Box w="100%" py="0px">
                {state !== "Idle" ? 
                    <SimpleGrid columns={2} spacing="0px" h="100px">
                        <PickStats type="left" value={picks.left} threshold={threshold} />
                        <PickStats type="right" value={picks.right} threshold={threshold} />
                    </SimpleGrid>
                    : <Center h="100px">
                        <Text opacity={0.5}> Robot not Picking </Text>
                    </Center>
                }

            </Box>



            <Box w="100%" py="10px">
                <SimpleGrid columns={2}>
                    <Center w="100%">
                    <Button w="80%" bg="#fafafa" border="1px solid #ababab">
                        <Icon as={FaChartLine} mx="10px" boxSize="18px"/>
                        <Text> Data </Text>
                    </Button>
                    </Center>
                    <Center w="100%">
                    <Button w="80%" bg="#fafafa" border="1px solid #ababab">
                        
                        <Icon as={FaTerminal} mx="10px" boxSize="18px"/>
                        <Text> Command </Text>
                    </Button>
                    </Center>
                </SimpleGrid>
            </Box>

            <Center position="absolute" h="50px" w="100%" bottom="0px" borderTop="1px solid #ababab">
                <HStack spacing="50px">
                    <ReleaseVersion type="main" value={version.main_branch} />
                    <ReleaseVersion type="sbc" value={version.sbc_branch} />
                </HStack>
            </Center>
        </Box>
    )
}

export default Card;
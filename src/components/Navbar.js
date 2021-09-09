import {useState} from "react";
import {Box, Text, Center, Link, Icon, Stack, VStack, HStack} from "@chakra-ui/react";

import {GiTurtle} from "react-icons/gi";
import {RiDashboardFill} from "react-icons/ri"
import {BsBarChart} from "react-icons/bs";
import {GiRobotGolem} from "react-icons/gi"
import {FaUserCog} from "react-icons/fa";


const Navbar = (props) => {
    const [selected, setSelected] = useState("Dashboard")

    const links=[
        { name: "Dashboard", icon: RiDashboardFill, link: ""},
        { name: "Robot Data", icon: BsBarChart, link: ""},
        { name: "Robot Interface", icon: GiRobotGolem, link: ""},
    ]

    const misc = [
        { name: "Settings", icon: FaUserCog, link: ""},
    ]

    const navItems = links.map(d=>
        <HStack 
            w="100%" 
            borderRadius="5px" 
            border={selected === d.name ? "1px solid #29467d" : "1px solid #141d35" } 
            bg={selected === d.name ? "#1a2b4c" : "none" } 
            py="5px"
            px="10px"
            _hover={{background: "#243a66", border: "1px solid #243a66" }}
            cursor={"pointer"}
        >
                <Icon as={d.icon} color="#fff" boxSize="35px" display="inline-block"/>
                <Text color="#fff" display="inline-block" fontSize="24px" ml="10px"> {d.name} </Text>
        </HStack>    
    )

    const miscItems = misc.map(d=>
        <HStack 
        w="100%" 
        borderRadius="5px" 
        border={selected === d.name ? "1px solid #29467d" : "1px solid #141d35" } 
        bg={selected === d.name ? "#1a2b4c" : "none" } 
        py="5px"
        px="10px"
        _hover={{background: "#243a66", border: "1px solid #243a66" }}
        cursor={"pointer"}
        >
                <Icon as={d.icon} color="#fff" boxSize="35px" display="inline-block"/>
                <Text color="#fff" display="inline-block" fontSize="24px" ml="10px"> {d.name} </Text>
        </HStack>      
    )

    return (
        <Box w="300px" h="100%" borderRight="1px solid #000" bg="#141d35" px="20px" py="20px">
            <Stack direction="horizontal">
            <Icon as={GiTurtle} color="#fff" boxSize="55px"  mx="15px"/>
                <Center h="55px">
                <Text fontSize="30px" fontWeight={500} color="#fff"> Tortuga </Text>
                {/* <Text fontSize="20px" fontWeight={300} color="#fff"> AgTech </Text> */}
                </Center>
            </Stack>

            <Stack w="100%" direction="column" mt="40px">
                {navItems}
            </Stack>

            <Box mt="20px" borderTop="1px solid #ababab" py="20px">
                {miscItems}
            </Box>

        </Box>
    )
}

export default Navbar;
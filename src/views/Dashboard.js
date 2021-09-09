import {useState, useRef, useEffect} from "react";
import {Box, Text, Stack, Flex, Input, InputGroup, InputLeftAddon, Icon, Center, HStack, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react"

import {FaSearch, FaThLarge, FaList, FaSortAmountUp} from "react-icons/fa"
import CardLayout from "../components/CardLayout";


const numToBool = (num) => {
    return num >= 0.5 ? true : false
}

const numToState = (num, fatal) => {
    if (fatal) return "Fault"
    if (num >= 0.3) return "Harvest"
    else if (num >= 0.2) return "Tray Change"
    else return "Idle"
}

const generateFakeData = (n) => {
    let data = [];
    
    for (var i=0; i<n; i++){
        let fatal = Math.round(Math.random() - 0.3)
        let state = numToState(Math.random(), fatal)
        let tmp = {
            robot_num: "F" + (50 + i),
            robot_type: "Fiddle C",
            sbc_type:"Fiddle C",
            battery: Math.random()*0.95 + 0.05,
            wifi: numToBool(Math.random() + 0.3),
            driving: state === "Idle" || state === "Fault" ? false : numToBool(Math.random() - 0.15 ),
            errors: {
                fatal: fatal,
                error: Math.round(Math.random() * 5),
                warning: Math.round(Math.random() * 20)
            },
            state: state,
            picks: {
                left: state !== 'Idle' ? Math.round(Math.random()*200 + 100) : 0,
                right: state !== 'Idle' ? Math.round(Math.random()*200 + 100) : 0
            },
            version: {
                main_branch: "rel/08.16.21-1",
                sbc_branch: "rel/08.16.21-1",
            }
        }
        data.push(tmp)
    }
    return data;
}

const Dashboard = (props) => {
    const [view, setView] = useState('grid')
    const stageCanvasRef = useRef(null);
    const [dashboardSize, setDashboardSize] = useState({ width: null, height: null})

    useEffect( () => {
        if (stageCanvasRef.current) {
            let height = stageCanvasRef.current.offsetHeight;
            let width = stageCanvasRef.current.offsetWidth;
            setDashboardSize({width: width, height: height})
        }
    }, [stageCanvasRef])


    let data = generateFakeData(10);

    const search = (e) => {
        console.log(e)
    }

    const searchIcon = <Icon as={FaSearch} boxSize="20px" mx="10px" color="#545454" />

    return (
        <Box px="20px" py="20px" w="100%" id="dashboard" ref={stageCanvasRef}>
            <Flex justify="space-between" w="100%" pb="20px">
                <Text fontSize="36px" fontWeight={700}> Robot Dashboard </Text>
                <HStack h="100%" py="10px">
                    {/* <Center 
                        p="6px" 
                        borderRadius="5px" 
                        bg="#e8e8e8" 
                        border="1px solid"
                        borderColor={"#a8a8a8"}
                        cursor="pointer"
                        _hover={{background: "#cccccc"}}
                    >
                        <Icon as={FaSortAmountUp} boxSize="25px" color={view === 'grid' ? "#424242" : "#ababab"}/>
                    </Center> */}
                    <Menu >
                        <MenuButton 
                            as={Button} 
                            bg="#e8e8e8"
                            border="1px solid"
                            borderColor={"#a8a8a8"}
                            borderRadius="5px" 
                            p="6px" 
                            rightIcon={
                                <Icon as={FaSortAmountUp} boxSize="24px"/> 
                            }
                        >
                            <MenuList>
                                <MenuItem> Robot Name </MenuItem>
                                <MenuItem> Online </MenuItem>
                                <MenuItem> State </MenuItem>
                                <MenuItem> Battery </MenuItem>
                            </MenuList>
                        </MenuButton>
                    </Menu>
                    <Center 
                        p="6px" 
                        borderRadius="5px" 
                        bg="#e8e8e8" 
                        border="1px solid"
                        borderColor={view === "grid" ? "#a8a8a8" : "#c9c9c9"}
                        cursor="pointer"
                        _hover={{background: "#cccccc"}}
                        onClick={()=> setView('grid')}
                    >
                        <Icon as={FaThLarge} boxSize="25px" color={view === 'grid' ? "#424242" : "#ababab"}/>
                    </Center>
                    <Box
                        p="6px"
                        borderRadius="5px" 
                        bg="#e8e8e8" 
                        border="1px solid"
                        borderColor={view === "list" ? "#a8a8a8" : "#c9c9c9"}
                        cursor="pointer"
                        _hover={{background: "#cccccc"}}
                        onClick={()=> setView('list')}
                    >
                        <Icon as={FaList} boxSize="25px" color={view === 'list' ? "#424242" : "#ababab"} />
                    </Box>
                    <InputGroup w="400px">
                        <InputLeftAddon children={searchIcon} borderColor="#ababab" onClick={(e)=> search(e)} cursor="pointer"/>
                        <Input type="text" placeholder="Search" borderColor="#ababab"/>
                    </InputGroup>
                </HStack>
            </Flex>
            {dashboardSize.width ? 
                <CardLayout data={data} size={dashboardSize}/>
                : null
            }
        </Box>
    )
}

export default Dashboard
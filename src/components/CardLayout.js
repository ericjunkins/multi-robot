import {useState, useEffect} from "react";

import {Box, Center, SimpleGrid} from "@chakra-ui/react";

import Card from "./../components/Card";

const CardLayout = ({layout, data, size}) => {
    
    let col = Math.floor(size.width/(400 + 40))

    let cards = data.map(d=> 
        <Card 
            name={d.robot_num}
            robot_type={d.robot_type}
            sbc_type={d.sbc_type}
            battery={d.battery}
            errors={d.errors}
            driving={d.driving}
            wifi={d.wifi}
            state={d.state}
            picks={d.picks}
            version={d.version}
        />    
    )

    return (
        <Center w="100%" py="20px">
            <SimpleGrid columns={col} spacingX="40px" spacingY="40px">
                {cards}
            </SimpleGrid>
        </Center>
    )
}

export default CardLayout;


import {Box, Text, Stack} from "@chakra-ui/react"
import Card from "./../components/Card";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";

const Main = (props) => {
    return (
        <Stack h="100%" w="100%" bg="#f5f5f5" direction="horizontal">
            <Navbar />
            <Dashboard />
        </Stack>
    )
}


export default Main;
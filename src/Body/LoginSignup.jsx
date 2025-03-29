import { Box, VStack, Stack, Input, Button, Heading, Text, Flex, Divider } from "@chakra-ui/react"
import "boxicons"
import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { LoginLogoutContext } from "../ContextAPI/LoginLogoutContext";

function LoginSignup(){

    const { Login } = useContext(LoginLogoutContext) || {Login: false}

    const inputRef = useRef(null)
    const [error, setError] = useState("");
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    //=================HandleSubmit======================//
    function handleSubmit(e){
        e.preventDefault()

        const inputValue = inputRef.current.value.trim()

        // if(!/^\d{10}$/.test(inputValue) && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(inputValue)){
        //     setError("Please Enter valid Email or Number")
        //     return
        // }

        if(inputValue.length !== 10){
            return setError("Please Enter valid Number")
        }

        // const finalValue = /^\d{10}$/.test(inputValue) ? Number(inputValue) : inputValue;
        const finalValue = inputValue
        
        const existsUser =  users.some((user) => user.number === finalValue)

        if(!existsUser){
            const obj = {
                number: finalValue
            }
            console.log("User Registered successfully", obj)
            postUserDetail(obj)
            confirm("You Registered Successfully")
        }else{
            console.log("User LoggedIn successfully")
            confirm("You LoggedIn Successfully")
        }

        Login()
        navigate("/")
        inputRef.current.value=""
    }


    useEffect(() => {
        getUserDetail()
    },[] )

    //===========================Get userDetail==========================//
    async function getUserDetail(){
        try {
            const res = await axios({
                method: "get",
                url: `https://bigbasket-bc.onrender.com/allUsers`
            })
            setUsers(res.data.data)
            //console.log(res.data.data)
        } catch (error) {
            console.log("Error in fetched users", error.message)
        }
    }

    //==========================Post userDetail===========================//
    async function postUserDetail(userDetail){
        try {
            const res = await axios({
                method: "post",
                url: `https://bigbasket-bc.onrender.com/login-signup`,
                data: userDetail
            })
            console.log(res.data)
        } catch (error) {
            console.log("Error in post user", error.message)
        }
    }




    return(
        <>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minH="100vh"
            position="relative"
            bgImage="url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            {/* Blur Layer */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                backdropFilter="blur(5px)"
                bg="rgba(255, 255, 255, 0.1)"
            />

            {/* Content Box */}
            <Flex
                position="relative"
                zIndex={2}
                border={"0px solid black"}
                mt={"-5%"}
                w={{base:"100%", sm:"80%", md:"70%" ,lg:"50%"}}
                p={6}
                bg="rgba(255, 255, 255, 0.2)"
                borderRadius="lg"
                boxShadow="xl"
            >
                <Box border={"0px solid black"} p={5} w={"40%"}>
                    <Stack spacing={5} border={"0px solid black"}>
                        <Text color={"green"} fontSize={"12px"} textAlign={"center"}>why Choose Bigbasket?</Text>
                        <Flex justifyContent={"space-around"}>
                            <Box justifyContent={"center"}>
                                <box-icon name='badge-check' type='solid'></box-icon>
                                <Text fontSize={"10px"} mt={"-20%"}>Quality</Text>
                            </Box>
                            <Box justifyContent={"center"}>
                                <box-icon name='timer' type='solid'></box-icon>
                                <Text fontSize={"10px"} mt={"-20%"}>On time</Text>
                            </Box>
                        </Flex>

                        <Flex justifyContent={"space-around"}>
                            <Box alignItems={"center"}>
                                <box-icon name='undo' type='solid'></box-icon>
                                <Text fontSize={"10px"} mt={"-20%"}>Return Policy</Text>
                            </Box>
                            <Box>
                                <box-icon name='truck' type='solid'></box-icon>
                                <Text fontSize={"10px"} mt={"-20%"}>Delivery</Text>
                            </Box>
                        </Flex>

                        <Divider orientation="vertical" h={"1px"} borderWidth="1px" bgColor="gray" />

                        <Flex justifyContent={"space-around"}>
                            <Text fontSize={"12px"} m={"auto"}>Find us on</Text>
                            <Box m={"auto"} border={"1px solid black"} borderRadius={"5px"} alignContent={"center"}>
                                <box-icon type='logo' name='play-store'></box-icon>
                            </Box>
                            <Box m={"auto"} border={"1px solid black"} borderRadius={"5px"}>
                                <box-icon type='logo' name='apple'></box-icon>
                            </Box>
                        </Flex>
                    </Stack>
                </Box>

                <Box w={"60%"} p={5} border={"1ps soild black"} bgColor={"black"}>
                    <VStack spacing={5} bgColor={"transparent"}>
                        <Heading fontSize={"large"} color={"white"} bgColor={"transparent"}>Login/Signup</Heading>
                        <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"100%"}}>
                            <Input  color={"gray"} bgColor={"white"} borderColor={"gray.400"} fontSize={14}
                                type="text"
                                ref={inputRef}
                                placeholder="Enter Phone number" 
                                _placeholder={{ color: "gray.500" }}
                            />
                            <Text color={"red"} bg={"transparent"}>{error}</Text>
                            <Button  mt={5} type={"submit"} w={"100%"} color={"white"} bgColor={"red"} _hover={{bgColor:"none"}}>
                                Continue
                            </Button>
                        </form>
                        <Text fontSize={"small"} fontWeight={"bold"} textAlign={"center"} color={"gray"} bgColor={"transparent"}>By continuing, I accept TCP - bigbasket’s Terms and Conditions & Privacy Policy</Text>
                        <Text fontSize={"small"} fontWeight={"bold"} textAlign={"center"} color={"gray"} bgColor={"transparent"}>This site is protected by reCAPTCHA and the Google - Privacy Policy and & Terms of Service apply.</Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    </>
    )
}

export default LoginSignup;
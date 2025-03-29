import { Box, Button, Flex, Heading, Image, Input, Text, Stack, Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import "boxicons"
import { useContext, useState } from "react";

import { LoginLogoutContext } from "../ContextAPI/LoginLogoutContext";

function Navbar(){

    const { login, Logout } = useContext(LoginLogoutContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        {/* =========================Navbar for Medium and Large Screen======================= */}
        <Box top={0} 
             border={"0px solid black"}
             as="navbar"
             w={"100%"}
             display={{base:"none", sm:"none", md:"block", lg:"block"}} 
             boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
             position={"sticky"}
             zIndex={9999999}
             >
            <Flex border={"0px solid red"} w={"70%"} m={"auto"} pt={3} pb={2} justifyContent={"space-between"}>
                <Box w={"10%"}  border={"0px solid black"}>  
                    <Link to="/">
                        <Image src="https://cdn.brandfetch.io/idIM18oaEt/w/800/h/295/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"/>
                    </Link>    
                </Box>
                <Flex border={"1px solid rgb(218, 215, 215)"} w={"55%"} h={"38px"} pl={2} borderRadius={"5px"}>
                    <box-icon name='search' color="green" style={{ margin:"auto", width: "20px", height: "20px" }}></box-icon>
                    <Input placeholder="Search for Products..." _placeholder={{color:"gray"}} borderRadius={"8px"} border={"none"} h={"36px"} outline={"none"} fontSize={"14px"} _focus={{ outline: "none", boxShadow: "none" }}/>
                </Flex>
                <Flex w={"14%"} h={"38px"} bgColor={"rgb(238,238,238)"} borderRadius={"8px"} cursor={"pointer"}>
                    <Box m={"auto"} bgColor={"rgb(238,238,238)"}>
                        <box-icon type='solid' name='compass' style={{ backgroundColor:"rgb(238,238,238)" }}></box-icon>
                    </Box>
                    <Heading m={"auto"} fontSize={12} bgColor={"rgb(238,238,238)"} color={"black"}>Select Location</Heading>
                </Flex>
                <Flex h={"38px"} border={"0px solid black"} w={"15%"} justifyContent={"space-between"} borderRadius={"10px"}>
                    <Box w={"70%"} h={"38px"} bgColor={"rgb(32,32,32)"} borderRadius={"8px"}>
                        {login ? (
                            <Button onClick={Logout} h={"38px"} w={"100%"} bgColor={"red.500"} color={"white"} fontSize={12} _hover={{bgColor:"none"}}>
                                LogOut
                            </Button>
                        ) : (
                            <Link to="/login&signup">
                                <Button h={"38px"} w={"100%"} bgColor={"rgb(32,32,32)"} color={"white"} fontSize={12} _hover={{bgColor:"none"}}>
                                    Login/Sign Up
                                </Button>
                            </Link>
                        )}
                    </Box>
                    <Box w={"25%"} pt={"5%"} border={"0px solid rgb(238,238,238)"} textAlign={"center"} bgColor={"rgb(238,238,238)"} borderRadius={"8px"}>
                        <Link to="/cart">
                            <box-icon name='shopping-bag' style={{ backgroundColor:"rgb(238,238,238)" }}></box-icon>
                        </Link>
                    </Box>
                </Flex>
            </Flex>

            <Flex border={"0px solid black"} w={"70%"} m={"auto"} pt={1} pb={1} justifyContent={"space-between"}>
                <Flex w={"15%"} cursor={"pointer"} bgColor={"rgb(94,148,0)"} justifyContent={"space-around"} border={"0px solid black"} borderRadius={"5px"}>
                    <Box bg={"transparent"} border={"0px solid black"}>
                        <Text fontSize={"10px"} fontWeight={"bold"} bg={"transparent"} color={"white"}>Shop By</Text>
                        <Text fontSize={"12px"} fontWeight={"bolder"} bg={"transparent"} color={"white"}>Category</Text >
                    </Box>
                    <Box bg={"transparent"} border={"0px solid black"}>
                        <box-icon name='down-arrow'  color="white" style={{ width:"50%", background:"transparent"}}></box-icon>
                    </Box>
                </Flex>
                <Flex border={"0px solid black"} w={"60%"} justifyContent={"space-between"}>
                    <Link to="/fruits-veggies/fruits-vegetables">
                        <Text border={"0px solid black"} color={"gray.700"} fontSize={"small"} alignContent={"center"}  _hover={{ color: "rgb(94,148,0)", cursor: "pointer" }}>
                            Exotic-Fruits-Veggies
                        </Text>
                    </Link>
                    <Link to="/beverages/tea">
                        <Text border={"0px solid black"} color={"gray.700"} fontSize={"small"} alignContent={"center"}  _hover={{ color: "rgb(94,148,0)", cursor: "pointer" }}>
                            Tea
                        </Text>
                    </Link>
                    <Link to="/foodgrains-oil-masala/edible-oils-ghee/ghee-vanaspati/">
                        <Text border={"0px solid black"} color={"gray.700"} fontSize={"small"} alignContent={"center"}  _hover={{ color: "rgb(94,148,0)", cursor: "pointer" }}>
                            Ghee
                        </Text>
                    </Link>
                    <Text border={"0px solid black"} color={"gray.700"} fontSize={"small"} alignContent={"center"}  _hover={{ color: "rgb(94,148,0)", cursor: "pointer" }}>Nandini</Text>
                    <Text border={"0px solid black"} alignContent={"center"}>
                        <box-icon name='chevrons-right' color="gray.700" style={{ width:"90%"}}></box-icon>
                    </Text>
                </Flex>
                <Text border={"0px solid black"} color={"lightgray"} fontSize={"20px"} alignContent={"center"}>|</Text>
                <Flex w={"16%"} border={"0px solid black"} justifyContent={"space-between"}>
                    <Box m={"auto"} w={"40%"}>
                        <Image w={"100%"} src="https://www.bigbasket.com/media/uploads/banner_images/Smart_basket-250124-1.png"/> 
                    </Box>
                    <Box m={"auto"} w={"40%"}>
                        <Image w={"100%"} src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png"/>
                    </Box>
                </Flex>
            </Flex>
        </Box>

        {/* =========================Navbar for Base and Small Screen======================= */}
        <Box
            as="nav"
            w={{ base: "100%", md: "80%" }} // Full width on base, 80% on larger screens if needed
          
            p={2}
            position="fixed"
            top="0"
            left="0"
            bg="white"
            border="0px solid black"
            zIndex="9999"
            display={{ base: "block", md: "none" }}
            overflowY="auto"
            bgColor={"rgb(104,159,56)"}
        >
            <Flex bgColor={"transparent"} justifyContent={"space-between"}>
                <box-icon onClick={toggleSidebar} color="white" size="30px" style={{backgroundColor:"transparent"}} name='menu'></box-icon>
                <Flex bgColor={"transparent"}>
                    <box-icon type='solid' name='compass' color="white" size="30px" style={{ backgroundColor:"transparent", margin:"auto" }}></box-icon>                
                    <Box bgColor={"transparent"}>
                        <Text fontSize={"sm"} fontWeight={"bold"} color={"white"} bgColor={"transparent"}>Select Location</Text>
                        <Text fontSize={"x-small"} color={"white"} bgColor={"transparent"}>Location helps us show availabillity</Text>
                    </Box>
                </Flex>
                <box-icon name='user-circle' color="white" size="25px" style={{ backgroundColor:"transparent" }}></box-icon>
            </Flex>
            <Flex border={"1px solid rgb(218, 215, 215)"} w={"100%"} h={"38px"} pl={2} borderRadius={"5px"} bg={"white"}>
                <box-icon name='search' color="green" style={{ margin:"auto", width: "20px", height: "20px" }}></box-icon>
                <Input placeholder="Search for Products..." _placeholder={{color:"gray"}} borderRadius={"8px"} border={"none"} h={"36px"} outline={"none"} fontSize={"14px"} _focus={{ outline: "none", boxShadow: "none" }}/>
            </Flex>
        </Box>

        {/* ========================= Mobile Sidebar Drawer ======================= */}
        {isOpen && (
        <Box
        w={{ base: "80vw", md: "80%" }}
        h="100vh"
        position="fixed"
        top="0"
        left="0"
        bg="white"
        border="0px solid black"
        zIndex="9999"
        display={{ base: "block", md: "none" }}
        overflowY="auto"
        onClick={toggleSidebar}
        >
            <Flex w={"100%"}  bgColor={"rgb(32,32,32)"} p={2} justifyContent={"space-around"}>
                {login ? (
                    <Button onClick={Logout} h={"35px"} w={"50%"} bgColor={"red.500"} color={"white"} fontSize={14} _hover={{bgColor:"none"}}>
                        LogOut
                    </Button>
                ) : (
                    <Link to="/login&signup">
                        <Button h={"35px"} w={"50%"} bgColor={"rgb(32,32,32)"} color={"white"} fontSize={14} _hover={{bgColor:"none"}}>
                            Login/Sign Up
                        </Button>
                    </Link>
                )}
                <box-icon name='x' color={"red"} onClick={toggleSidebar} size={"30px"} style={{backgroundColor:"transparent"}}></box-icon>
            </Flex>
            <Flex p={2} w={"50%"} border={"0px solid black"} justifyContent={"space-between"}>
                <box-icon type='solid' name='compass' color="gray.800" size="25px" style={{ backgroundColor:"transparent"}}></box-icon>                
                <Text fontSize={"14px"} color={"black"}>Select Location</Text>
            </Flex>
            <Divider/>

            <Stack spacing={5} mt={2} p={4}>
                <Link to="/">
                    <Text cursor={"pointer"} color={"rgb(55,71,79)"} fontWeight={"bold"} fontSize={"14px"}>Home</Text>
                </Link>
                <Text cursor={"pointer"} color={"rgb(55,71,79)"} fontWeight={"bold"} fontSize={"14px"}>Smart basket / My List</Text>
                <Text cursor={"pointer"} color={"rgb(55,71,79)"} fontWeight={"bold"} fontSize={"14px"}>Shop By Category</Text>
                <Text cursor={"pointer"} color={"rgb(55,71,79)"} fontWeight={"bold"} fontSize={"14px"}>Offers</Text>
                <Text cursor={"pointer"} color={"rgb(55,71,79)"} fontWeight={"bold"} fontSize={"14px"}>The Beauty Store</Text>
                <Text cursor={"pointer"} color={"rgb(55,71,79)"} fontWeight={"bold"} fontSize={"14px"}>bb Lifestyle</Text>
            </Stack>
        </Box>
        )}
        </>
    )
}

export default Navbar;
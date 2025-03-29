import { Box, Card, Image, Text, Flex, Grid, GridItem, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function GheeVanaspati(){
    const [ gheeVanaspatiData, setGheeVanaspatiData ] = useState([])

    useEffect(() => {
        fetchGheeVanaspatiData()
    }, [])

    async function fetchGheeVanaspatiData(){
        try {
            const res = await axios({
                method: "get",
                url: `https://bigbasket-bc.onrender.com/ghee-vanaspati`
            })
            const {data} = res.data
            console.log(data)
            setGheeVanaspatiData(data)
        } catch (error) {
            console.log(`Error fetching Fruits and Vegetables ${error.message}`)
        }
    }
    return(
        <>
        <Box bgColor={"rgb(241, 239, 239)"} pt={5}>
                    <Box w={["100%", "90%", "90%", "70%"]} m={"auto"} bg={"transparent"}>
                        <Flex to="/" border={"0px solid black"} w={[ "60%", "50%", "40%", "30%"]} justifyContent={"space-between"} bg={"transparent"}>
                            <box-icon name='home-alt' style={{height:"20px",  background:"transparent"}} ></box-icon>
                            <Link to="/">
                                <Text fontSize={"small"} color={"gray"} fontWeight={"bold"} bg={"transparent"}>Home</Text>
                            </Link>
                            <Text fontSize={"small"} color={"gray"} fontWeight={"bold"} bg={"transparent"}>/</Text>
                            <Text fontSize={"small"} color={"gray"} fontWeight={"bold"} bg={"transparent"}>Ghee Vanaspati</Text>
                        </Flex>
                        <Text mt={5} fontSize={"large"} color={"gray"}  bg={"transparent"}>Ghee Vanaspati</Text>
        
                        <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns={["repeat(2,1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                            rowGap={6}
                            columnGap={5}
                            mt={10}
                            bg={"transparent"}>
                        {gheeVanaspatiData.map((product) => {
                            return(
                                <>
                                <Link to={`/product-detail/${product.category}/${product._id}`} key={product.id}>
                                    <Card border={"0px solid black"} p={3} bg={"white"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                                        <GridItem border={"0px solid black"} p={5} boxShadow={"rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"}>
                                               <Image border={"0px solid black"} m={"auto"} w={"100%"}
                                                    src={product.imgurl}
                                               />
                                        </GridItem>
                                        <GridItem border={"0px solid black"}>
                                            <Text border={"0px solid black"} mt={1} color={"gray"} fontSize={"small"}>
                                                {product.cmpnyname}
                                            </Text>
                                            <Text border={"0px solid black"} h={"50px"} mt={1} fontSize={"14px"} isTruncated noOfLines={2} overflow={"hidden"} whiteSpace={"none"} textOverflow={"ellipsis"}>
                                                {product.productname}
                                            </Text>
                                            <Flex w={"60%"} justifyContent={"space-between"} border={"0px solid black"}>
                                                <Box w={"40%"} h={"10px"} border={"0px solid black"} borderRadius={"20px"} mb={4}>
                                                    <Text textAlign={"center"} bgColor={"lightgreen"} borderRadius={"20px"} color={"darkgreen"} fontSize={"12px"}>
                                                        {product.starRating}
                                                    </Text>
                                                </Box>
                                                <Text fontSize={"12px"}>
                                                    {product.NumRating}
                                                </Text>
                                            </Flex>
                                            <Text border={"0px solid black"} p={"2%"} color={"gray"} fontSize={"12px"} borderRadius={"5px"} backgroundColor={"rgb(247,247,247)"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}>
                                                {product.quantity}
                                            </Text>
                                            <Flex mt={2} h={"100px"}>
                                                <Text mr={2} fontWeight={"bold"} fontSize={"medium"}>
                                                    ₹{product.price}
                                                </Text>
                                                <Text color={"GrayText"} fontSize={"small"} textDecoration={"line-through"}>
                                                    {product.mrp}
                                                </Text>
                                            </Flex>
                                            <Flex justifyContent={"space-between"}>
                                                <Box border={"1px solid gray"} w={"18%"} pt={2} pl={"3%"} borderRadius={"8px"}>
                                                    <box-icon name='bookmark' type="solid" size="20px"></box-icon>
                                                </Box>
                                                <Button w={"80%"} h={"35px"} fontSize={"14px"} color={"red"} border={"1px solid red"} bgColor={"white"}
                                                _hover={{bgColor:"red", color:"white"}}
                                                >
                                                    Add
                                                </Button>
                                            </Flex>
                                        </GridItem>
                                    </Card>
                                </Link>
                                </>
                            )
                        })}
                        </Grid>
                    </Box>
                </Box>
        </>
    )
}

export default GheeVanaspati;
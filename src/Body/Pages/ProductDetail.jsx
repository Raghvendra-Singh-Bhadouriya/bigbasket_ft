import { Box, Heading, Text, Image, Flex, Stack, Button } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(){

    const [ productDetail, setProductDetail ] = useState([])
    const { category, id } = useParams()

    async function fetchProductDetail(category, id){
        try {
            const res = await axios({
                method: "get",
                url:`https://bigbasket-bc.onrender.com/product-detail/${category}/${id}`
            })
            console.log(res.data.data)
            setProductDetail(res.data.data)
        } catch (error) {
            console.log("Error in fetched product details", error.message)
        }
    }

    useEffect(() => {
        fetchProductDetail(category, id)
    }, [category, id])

    return(
        <>
        <Box pt={20}>
            <Flex w={"60%"} m={"auto"} >
                <Box border={"0px solid black"} w={"50%"} p={5} boxShadow = {"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"}>
                    <Image w={"100%"}
                        src={productDetail.imgurl}
                    />
                </Box>
                <Box border={"0px solid black"} w={"60%"} p={5}>
                    <Stack spacing={5}>
                        <Text fontSize={"small"} textDecoration={"underline"} color={"gray"}>{productDetail.cmpnyname}</Text>
                        <Heading fontSize={"large"}>{productDetail.productname}, {productDetail.quantity}</Heading>
                        <Flex w={"40%"} justifyContent={"space-between"} border={"0px solid black"}>
                            <Box w={"40%"} h={"10px"} border={"0px solid black"} borderRadius={"20px"} mb={4}>
                                <Text textAlign={"center"} bgColor={"lightgreen"} borderRadius={"20px"} color={"darkgreen"} fontSize={"14px"}>
                                    {productDetail.starRating}
                                </Text>
                            </Box>
                            <Text fontSize={"14px"} textDecoration={"underline"}>
                                {productDetail.NumRating}
                            </Text>
                        </Flex>
                        <Text color={"gray"} textDecoration={"line-through"} fontSize={"14px"} fontWeight={"bold"}>
                            MRP:{productDetail.mrp}
                        </Text>
                        <Flex w={"40%"} justifyContent={"space-between"}>
                            <Heading fontSize={"large"}>Price: ₹{productDetail.price}</Heading>
                            <Text fontSize={"small"} color={"gray"}>(₹{productDetail.wetprice})</Text>
                        </Flex>
                        <Text fontSize={"small"} color={"green"}>You Save:{productDetail.off}</Text>
                        <Text fontSize={"small"} color={"gray"}>{productDetail.taxes}</Text>
                        <Flex justifyContent={"space-between"}>
                            <Button w={"45%"} color={"white"} bgColor={"red"} _hover={{bgColor:"none"}}>
                                Add to basket
                            </Button>
                            <Button w={"45%"} border={"1px solid gray"}>
                                Save for later
                            </Button>
                        </Flex> 
                    </Stack>
                </Box>
            </Flex>
        </Box>
        </>
    )
}

export default ProductDetail;
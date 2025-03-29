import { Box, Heading, Card, Image, Flex, Grid } from "@chakra-ui/react"
import "./Slider.css"
import { topOffers, fruitAndVeg, dailyStaples, beverages, snacksStore, cleanAndHousehold, beautyAndHygiene, homeAndKitchen, offAd } from "../DbData/db"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
      };

    return(
        <>
        <Box border={"0px solid black"}>
            <Box border={"0px solid green"} w={{base:"95%", md:"90%", lg:"70%"}} m={"auto"}>

                <Heading fontSize={"x-large"} mt={"5%"}>Top Offers</Heading>
                <Grid templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
              rowGap={5}
              mt={5} 
                      mb={5} 
                >
                    {topOffers.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={"90%"} borderRadius={"10px"} 
                                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                                      _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                                      >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Heading fontSize={"x-large"}>Fruits and Vegetables</Heading>
                <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
                rowGap={5}
                mt={5} mb={5} justifyContent={"space-between"}>
                    {fruitAndVeg.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={"90%"} borderRadius={"10px"} 
                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                            >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Heading fontSize={"x-large"}>Your Daily staples</Heading>
                <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }}
                rowGap={5}
                mt={5} mb={5} justifyContent={"space-between"}>
                    {dailyStaples.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={{base:"90%", lg:"85%"}} borderRadius={"10px"} 
                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                            >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Heading fontSize={"x-large"}>Beverages</Heading>
                <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }}
                rowGap={5}
                mt={5} mb={5} justifyContent={"space-between"}>
                    {beverages.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={{base:"90%", lg:"85%"}} borderRadius={"10px"} 
                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                            >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Heading fontSize={"x-large"}>Snacks Store</Heading>
                <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
                rowGap={5}
                mt={5} mb={5} justifyContent={"space-between"}>
                    {snacksStore.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={"90%"} borderRadius={"10px"} 
                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                            >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Heading fontSize={"x-large"}>Clean & Household</Heading>
                <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
                rowGap={5}
                mt={5} mb={5} justifyContent={"space-between"}>
                    {cleanAndHousehold.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={"90%"} borderRadius={"10px"} 
                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                            >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Heading fontSize={"x-large"}>Beauty and Hygiene</Heading>
                <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }}
                rowGap={5}
                mt={5} mb={5} justifyContent={"space-between"}>
                    {beautyAndHygiene.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={{base:"90%", lg:"85%"}} borderRadius={"10px"} 
                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                            >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Heading fontSize={"x-large"}>Home And Kitchen</Heading>
                <Grid
                templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" }}
                rowGap={5}
                mt={5} mb={5} justifyContent={"space-between"}>
                    {homeAndKitchen.map((topoffer) => {
                        return(
                            <>
                            <Card id={topoffer.id} w={{base:"90%", lg:"85%"}} borderRadius={"10px"} 
                            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            _hover={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px"}}
                            >
                                <Image src={topoffer.imgurl} borderRadius={"10px"}/>
                            </Card>
                            </>
                        )
                    })}
                </Grid>

                <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                    <Slider {...settings}>
                        {offAd.map((offerad) => {
                            return(
                                <>
                                <Image src={offerad.imgurl} borderRadius={"15px"}/>
                                </>
                            )
                        })}
                    </Slider>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Home;

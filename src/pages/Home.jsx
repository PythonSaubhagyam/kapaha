import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  FaHeartbeat,
  FaThumbsUp,
  FaUniversalAccess,
  FaUserMd,
  FaUserPlus,
  FaBlind,
  FaHeart,
} from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import ProductListSection from "../components/ProductListSection";
import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";

const imageInfo = [
  {
    src: require("../assets/Home/OC.png"),
    name: "NON-GMO Product",
  },
  {
    src: require("../assets/Home/natural & Organic.png"),
    name: "Ethical & Natural",
  },
  {
    src: require("../assets/Home/love.png"),
    name: "Vegetarian",
  },
  {
    src: require("../assets/Home/best service.png"),
    name: "Quality you'll Love Guaranteed",
  },
];

const Details = [
  {
    id: 1,
    alt_text: "Image1",
    image: require("../assets/Home/banner 111.jpg"),
    display_status: true,
    image_url: "/shop?page=1&category=573",
    sose_sequence: 1,
  },
  {
    id: 2,
    alt_text: "Image1",
    image: require("../assets/Home/bannner 222.jpg"),
    display_status: true,
    image_url: "/shop?page=1&category=573",
    sose_sequence: 2,
  },
];

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState(Details);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    //getHomePageData();
    getBlogs();
  }, []);

  async function getHomePageData() {
    const response = await client.get("/home");
    if (response.data.status === true) {
      setHome(response.data);
    }
    setLoading(false);
  }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
    setLoading(false);
  }

  return (
    <>
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners} />
        )}
        {/* <Image w={"100%"} h={489} src={require("../assets/Home/1.jpg")} /> */}
      </Container>

      <Container
        maxW={"container.xl"}
        mb={8}
        mt={2}
        px={0}
        textAlign={"center"}
      >
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
          fontWeight={500}
          color={"text.500"}
          bgColor={"bg.500"}
          textAlign={{ base: "center", md: "start" }}
          px={{ base: 2, md: 8 }}
          py={4}
          my={7}
        >
          About कपा:
        </Text>
        <Text
          color={"text.300"}
          px={{ base: 15, lg: 20 }}
          fontSize={{ base: "sm", lg: "lg" }}
          textAlign={"justify"}
        >
          A Manufacturer and Exporter of Knitted garments focusing /
          specialising in Cotton and Bamboo clothing. Over 7 years of experience
          in working with Top Brands in India. We assure our customers of the
          highest quality and outstanding service.
          <br/><br/>
          Management structure : Our Company is committed to total quality
          control & timely shipments.
          <br/><br/>
          We have professional merchandisers who handle all details of specific
          customers, which ensures clear - communication & execution of orders .
          We specialise in the middle to higher end of market . We understand
          the International Market & the needs of customers . We are regularly
          making photo & salesmen samples for our customer as per their
          requirements.
          <br />
          <br/>
        </Text>
        

        <Link
          fontWeight={700}
          color={"brand.500"}
          as={RouterLink}
          to={"/about-us"}
          border={"1px"}
          borderColor={"brand.500"}
          p={3}
          borderRadius={"10px"}
          _hover={{textDecoration:"none",bgColor:"brand.500",color:"white"}}
        >
          Read more
        </Link>
      </Container>

      <Container mb={5} px={0} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={require("../assets/Home/cotton mask.jpg")}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />

        <UnorderedList m={{md:3,base:4}}>
          <ListItem m={2}>
            This Face Mask are made with 2 layers of white cotton.
          </ListItem>
          <ListItem m={2}>
            {" "}
            2 layer filtration system, helps to block harmful dust particles &
            droplets Anti-pollution.{" "}
          </ListItem>
          <ListItem m={2}>
            {" "}
            This mask are anti-dust, reusable & washable and Its face coverage
            is wide and maximum protection with soft elastic ear loops.
          </ListItem>
          <ListItem m={2}>
            This mask is great for protecting your airways from dust, allergens,
            chemicals and smoke to help you breathe easier and stay germ-free.
          </ListItem>
        </UnorderedList>

        <LazyLoadImage
          src={require("../assets/Home/right wrong wrong.jpg")}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />
        <LazyLoadImage
          src={require("../assets/Home/nocolor.jpg")}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />
        <Flex flexDirection={{md:"row",base:"column"}} alignItems={"center"} justifyContent={"space-between"}>
          <UnorderedList m={3} width={{md:"48%",base:"90%"}}>
            <ListItem m={2}>
              <b>Care Instructions :-</b> Laundry Wash, In Cool Water, Do Not
              Use Brush
            </ListItem>
            <ListItem m={2}>
              <b>Fabric :-</b> Cotton Blend
            </ListItem>
            <ListItem m={2}>
              <b>Size :-</b> For Adults
            </ListItem>
            <ListItem m={2}>
              <b>Gender :-</b> Unisex
            </ListItem>
            <ListItem m={2}>
              <b>Colour :-</b> White
            </ListItem>
            <ListItem m={2}>
              <b>Unifit :-</b> Fits all face types.
            </ListItem>
          </UnorderedList>
          <Image
            src={require("../assets/Home/mask mm.png")}
            width={{md:445,base:200}}
            height={{md:345,base:150}}
            alt=""
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Flex>
        <Link
          fontWeight={600}
          color={"brand.500"}
          as={RouterLink}
          to={"/"}
          border={"1px"}
          borderColor={"brand.500"}
          px={3}
          py={2}
          _hover={{bgColor:"brand.500",color:"#fff",textDecoration:"none"}}
          borderRadius={"10px"}
        >
          Buy now
        </Link>
       
        <Image my={5}  w={{md:"65%",base:"90%"}} src={require("../assets/Home/kapah_icon.jpg")} />
      </Container>

      <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={2}>
        <SimpleGrid
          columns={[2, 3, null, 4]}
          px={6}
          maxW={"container.xl"}
          my={6}
          backgroundColor={"bg.500"}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              82062+
            </StatNumber>
            <StatHelpText color="gray.600">Ethical Farmers</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              8745+
            </StatNumber>
            <StatHelpText color="gray.600">Satisfied Clients</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              17+
            </StatNumber>
            <StatHelpText color="gray.600">Stores</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              30+
            </StatNumber>
            <StatHelpText color="gray.600">Countries</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Container>
     
      <Container maxW={{ base: "100vw", md: "container.xl" }} px={0}>
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            fontSize={{md:33,base:20}}
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            OUR SERVICES ARE AVAILABLE IN
          </Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <LazyLoadImage
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/Map.webp"
            }
            w={{ base: "100%", md: "100%" }}
            alt=""
            py={4}
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Box>
      
      </Container>
      <Footer />
      {/* </>
      )} */}
    </>
  );
}

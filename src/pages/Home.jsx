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
import ScrollToTop from "../components/ScrollToTop";
import LoginModal from "../components/LoginModal";
import checkLogin from "../utils/checkLogin";

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
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  const [sections, setSections] = useState([]);
  const [AboutSection, setAboutSection] = useState();
  const [MaskSection, setMaskSection] = useState();
  const [PrecausionSection, setPrecausionSection] = useState();
  const [MainProductSection, setMainProductSection] = useState();
  const [NonGmoSection, setNonGmoSectionSection] = useState();
  const [statisticsSection, setStatisticsSection] = useState([]);
  const loginInfo = checkLogin();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const checkOrSetUDIDInfo = CheckOrSetUDID();
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );

  const [servicesSection, setServicesSection] = useState();

  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    const init = async () => {
      await CheckOrSetUDID();
    };

    init();
    //getHomePageData();
    getBanners();
    getBlogs();
    getLowerSection();
    getUpper();
    getStatisticsSection();

    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);

  async function getBanners() {
    setLoading(true);
    try {
      const response = await client.get("/ecommerce/banners/?sequence=Upper");

      if (response.data.status === true) {
        setBanners(response?.data?.banner);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  }

  async function getStatisticsSection() {
    const params = {};
    const response = await client.get("/statistics-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setStatisticsSection(response?.data?.data);
    }
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

  async function getLowerSection() {
    const params = {};
    const response = await client.get("/lower-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setSections(response.data.data);

      const ourServicesSection = response.data.data?.filter(
        (section) => section.id === 2
      );

      setServicesSection(ourServicesSection);
    }
  }

  const getUpper = async () => {
    const response = await client.get("/kapaha-section");

    if (response.data.status === true) {
      setSections(response.data.data);

      const ourAboutSection = response.data.data?.filter(
        (section) => section.id === 1
      );
      const ourMaskSection = response.data.data?.filter(
        (section) => section.id === 2
      );
      const ourPrecausionSection = response.data.data?.filter(
        (section) => section.id === 3
      );
      const ourMainProductSection = response.data.data?.filter(
        (section) => section.id === 4
      );
      const ourNonGmoSectionSection = response.data.data?.filter(
        (section) => section.id === 5
      );

      setAboutSection(ourAboutSection);
      setMaskSection(ourMaskSection);
      setPrecausionSection(ourPrecausionSection);
      setMainProductSection(ourMainProductSection);
      setNonGmoSectionSection(ourNonGmoSectionSection);
    }
  };

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
          <Carousel banners={banners?.length > 0 && banners} />
        )}
        {/* <Image w={"100%"} h={489} src={require("../assets/Home/1.jpg")} /> */}
      </Container>
      {AboutSection?.length > 0 &&
        AboutSection[0]?.is_visible_on_website === true && (
          <Container
            maxW={"container.xl"}
            mb={8}
            //mt={2}
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
              // my={7}
            >
              {AboutSection?.length > 0 && AboutSection[0]?.label}
            </Text>
            <Text
              color={"text.300"}
              px={{ base: 15, lg: 20 }}
              fontSize={{ base: "sm", lg: "lg" }}
              textAlign={"justify"}
              whiteSpace={"pre-line"}
            >
              {AboutSection?.length > 0 && AboutSection[0]?.description}
            </Text>
            <Box mt={5}>
              <Link
                fontWeight={700}
                color={"brand.500"}
                as={RouterLink}
                to={"/about-us"}
                border={"1px"}
                borderColor={"brand.500"}
                p={3}
                borderRadius={"10px"}
                _hover={{
                  textDecoration: "none",
                  bgColor: "brand.500",
                  color: "white",
                }}
              >
                Read more
              </Link>
            </Box>
          </Container>
        )}
      {MaskSection?.length > 0 &&
        MaskSection[0]?.is_visible_on_website === true && (
          <Container mb={5} px={0} maxW={"container.xl"} centerContent>
            <LazyLoadImage
              src={MaskSection?.length > 0 && MaskSection[0]?.image}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />{" "}
          </Container>
        )}
      {PrecausionSection?.length > 0 &&
        PrecausionSection[0]?.is_visible_on_website === true && (
          <Container mb={5} px={0} maxW={"container.xl"} centerContent>
            <Text m={{ md: 3, base: 4 }} whiteSpace="pre-line">
              {PrecausionSection?.length > 0 &&
                PrecausionSection[0]?.description}
            </Text>

            <LazyLoadImage
              src={
                PrecausionSection[0]?.images?.length > 0 &&
                PrecausionSection[0]?.images[0]?.image
              }
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
            <LazyLoadImage
              src={
                PrecausionSection[0]?.images?.length > 0 &&
                PrecausionSection[0]?.images[1]?.image
              }
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Container>
        )}
      {MainProductSection?.length > 0 &&
        MainProductSection[0]?.is_visible_on_website === true && (
          <Container mb={5} px={0} maxW={"container.xl"} centerContent>
            <Flex
              flexDirection={{ md: "row", base: "column" }}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                m={3}
                width={{ md: "48%", base: "90%" }}
                whiteSpace="pre-line"
              >
                {MainProductSection?.length > 0 &&
                  MainProductSection[0]?.description}
              </Text>
              <Image
                src={MainProductSection[0]?.image}
                width={{ md: 445, base: 200 }}
                height={{ md: 345, base: 150 }}
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
              _hover={{
                bgColor: "brand.500",
                color: "#fff",
                textDecoration: "none",
              }}
              borderRadius={"10px"}
            >
              Buy now
            </Link>
          </Container>
        )}

      {NonGmoSection?.length > 0 &&
        NonGmoSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} py={0} centerContent>
            <Image
              my={5}
              w={{ md: "65%", base: "90%" }}
              src={NonGmoSection[0]?.image}
            />
          </Container>
        )}

    
      {statisticsSection?.length > 0 && (
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
            {statisticsSection?.length > 0 &&
              statisticsSection?.map((data) => (
                <Stat>
                  <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>
                    {data?.value}
                  </StatNumber>
                  <StatHelpText color="gray.600">{data?.name}</StatHelpText>
                </Stat>
              ))}
          </SimpleGrid>
        </Container>
      )}
      {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              my={"5"}
              pb={"10px"}
            >
              {servicesSection?.length > 0 && servicesSection[0].label}
            </Heading>

            <Box display={"flex"} justifyContent={"center"}>
              <LazyLoadImage
                src={
                  servicesSection?.length > 0 &&
                  servicesSection[0]?.images[0].image
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
        )}
      {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )}
      <ScrollToTop />
      <Footer />

      {/* </>
      )} */}
    </>
  );
}

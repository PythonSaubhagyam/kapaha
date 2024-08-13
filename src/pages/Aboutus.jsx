import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      <Container maxW={"container.xl"} alignContent={"flex-start"}>
        <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
      </Container>
      <Container maxW={"container.xl"} py={1} px={0} position="relative">
        <Image src="https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/aboutUs.jpg" />

        <Text
          pb={2}
          color={"brand.100"}
          textAlign={"center"}
          fontSize={{ lg: "7xl", md: "5xl", base: "xl" }}
          fontWeight="600"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          // Optional: Add background to improve text readability
        >
          About Us
        </Text>
      </Container>
      <Container maxW={"container.xl"} mb={4} px={{md:0,base:8}} centerContent>
       
      
        <VStack maxW={"6xl"} mt={3} mb={7}>
          <Text fontWeight={600} fontSize={"2xl"} color={"text.300"}>
            WHY COTTON ?
          </Text>
          <Box color={"text.300"} textAlign={"justify"}>
            The concern for a life devoid of the use of extremely harmful toxic
            chemicals, the need for an eco-friendly industrial and agricultural
            culture and an increasing awareness of depleting natural resources
            and the consequences therein-these are factors which are shaping the
            life styles of people world wide. It is in this context that the
            relevance of cotton becomes important.
            <br />
            <br />
            Cotton is grown and processed without toxic chemicals that can be
            absorbed easily when in contact with the user's skin. Pesticides,
            fertilizers and chemicals used to grow and process conventional
            cotton fabrics may go directly to the users blood stream, which
            consequently affect's the body's organs and tissues.
            <br />
            <br />
            Besides the naturally soft cotton fabric is a lot more comfortable
            to use and is available at competitive prices.
            <br />
            <br />
            Take a look at some hard facts given below :
            <br />
            <br />
            <ul style={{ marginLeft: 45 }}>
              <li>
                Most of the chemicals used in conventional farming were first
                developed for warfare!
              </li>
              <li>
                An estimated 25 million people worldwide are poisoned by
                pesticides every year!
              </li>
              <li>
                25% of the pesticides and fertilizers used in the world are
                sprayed in conventional cotton crops even though these crops
                occupy just 3% of the world’s farmland.
              </li>
              <li>
                Over 0.75 kgs of toxic chemicals are used to grow the cotton
                needed for a conventional cotton sheet set! About 0.5kgs to make
                a T-shirt and pair of jeans.
              </li>
              <li>
                Some of these chemicals and pesticides are among those
                classified by the United States - Environmental Protection
                Agency.
              </li>
            </ul>
            <br />
            So, here is to a safer, better world for our children and us. Let us
            make the earth safer for farm workers and preserve the soil for
            long-term fertility.
            <br />
            <br />
            Our mission and appeal is to encourage more and more people globally
            to use cotton wear and fabrics.
          </Box>

          <br />
        </VStack>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default Aboutus;

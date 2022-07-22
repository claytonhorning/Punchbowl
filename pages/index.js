import { Box, Container } from "@chakra-ui/react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/Home/Hero";
import ReviewsSection from "../components/Home/Reviews";
import OurWork from "../components/Home/OurWork";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import Map from "../components/Home/Map";
import MeetTeam from "../components/Home/MeetTeam";

export default function Home() {
  return (
    <Layout title="Home">
      <Box
        bgColor={"black"}
        position={"absolute"}
        top={0}
        zIndex={"-1"}
        width={"100%"}
        height={{ base: "102vh", md: "78vh" }}
      >
        <video className={styles.video} autoPlay loop muted>
          <source src={"./drone-vid.mp4"} type="video/mp4" />
        </video>
      </Box>
      <Container maxW={"1500px"}>
        <HeroSection />
        {/* <ReviewsSection /> */}
        <OurWork />
      </Container>
      <Banner />
      <Container maxW={"1500px"}>
        <Services />
      </Container>
      <Map />
      <Container maxW={"1500px"}>
        <MeetTeam />
      </Container>
    </Layout>
  );
}

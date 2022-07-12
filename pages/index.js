import { Box, Container } from "@chakra-ui/react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import ReviewsSection from "../components/ReviewsSection";
import OurWork from "../components/OurWorkSection";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import ServiceAreas from "../components/ServiceAreasSection";
import Footer from "../components/Footer";
import MeetTeam from "../components/MeetTeam";

export default function Home() {
  return (
    <Layout title="Home">
      <Box
        bgColor={"black"}
        position={"absolute"}
        top={0}
        zIndex={"-1"}
        width={"100%"}
        height={{ base: "95vh", md: "78vh" }}
      >
        <video className={styles.video} autoPlay loop muted>
          <source src={"./drone-vid.mp4"} type="video/mp4" />
        </video>
      </Box>
      <Container maxW={"1500px"}>
        <HeroSection />
        <ReviewsSection />
        <OurWork />
      </Container>
      <Banner />
      <Container maxW={"1500px"}>
        <ServicesSection />
      </Container>
      <ServiceAreas />
      <Container maxW={"1500px"}>
        <MeetTeam />
      </Container>
      <Footer />
    </Layout>
  );
}

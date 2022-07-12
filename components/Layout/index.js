import { Box, Container } from "@chakra-ui/react";
import CustomHead from "../Head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <CustomHead title={title} />
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}

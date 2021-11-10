import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Header } from "../Shared/Header/Header";
import { Footer } from "../Shared/Footer/Footer";

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Box fontFamily="Jost" textAlign="center">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

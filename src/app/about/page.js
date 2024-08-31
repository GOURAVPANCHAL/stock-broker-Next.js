"use client";
import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Header from "../Header/page";
import Footer from "../Footer/page";
import "../globals.css";
import onlineImage from '../assets/online-image.jpeg';
import Image from "next/image";
import Head from "next/head";
import { useRouter } from 'next/navigation'; // Updated import

const About = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About Us - NXTGEN Broker</title>
        <meta name="description" content="Learn about NXTGEN Broker, our story, what we do, and who we are. Explore our commitment to providing top-notch trading services." />
        <meta name="keywords" content="about us, NXTGEN Broker, trading services, financial markets, stock trading" />
        <meta name="author" content="NXTGEN Broker" />
      </Head>
      <Header />
      <Box className="tradeandinvestment">
        <Container>
          <Typography variant="h2">
            <b>About Us</b>
          </Typography>
          <Typography variant="h5">
            NXTGEN Broker and the Right to Development
          </Typography>
        </Container>
      </Box>
      
      <Box
        component="section"
        sx={{
          backgroundColor: "beige",
          padding: { xs: "2rem 0", md: "4rem 0" },
        }}
        id="about"
      >
        <Grid
          container
          spacing={{ xs: 2, md: 9 }}
          justifyContent="center"
          alignItems="center"
          maxWidth="lg"
          mx="auto"
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", textAlign: "center" }}>
              <Image
                src={onlineImage}
                alt="image"
                style={{
                  width: "100%",
                  maxWidth: 350,
                  height: '100%',
                  borderRadius: "0.75rem",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
                  border: "6px solid var(--white-color)",
                }}
              />
              <Box
                sx={{
                  width: 240,
                  height: 615,
                  backgroundColor: "var(--body-color)",
                  position: "absolute",
                  top: "-4rem",
                  right: "-5.5rem",
                  borderRadius: "0.75rem",
                  borderBottom: "6px solid var(--first-color)",
                }}
              />
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: "var(--first-color)",
                  rotate: "-30deg",
                  position: "absolute",
                  right: "-4rem",
                  top: "4.5rem",
                }}
              >
                <Box
                  sx={{
                    content: '""',
                    position: "absolute",
                    width: 16,
                    height: 16,
                    border: "3px solid var(--black-color)",
                    left: -5,
                    top: -5,
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: 80,
                  right: "-2rem",
                  top: "8rem",
                  height: "2px",
                  backgroundColor: "var(--first-color)",
                  position: "absolute",
                }}
              />
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  backgroundColor: "var(--first-color)",
                  right: "-.75rem",
                  bottom: "1.5rem",
                  position: "absolute",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={{ color: '#9ad953' }}>
              Our Company Story
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "var(--title-color)" }}
            >
              What We Do
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "var(--title-color)", mb: 5 }}
            >
              NXTGEN Broker (formerly known as XYZ Securities Pvt. Ltd.) began its journey in 2012. As a premier stock broking house in India, NXTGEN Broker offers a comprehensive range of investment opportunities, including Equities, Derivatives, Currency, Commodities, IPOs, and Mutual Funds.
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "var(--title-color)" }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "var(--title-color)", mb: 5 }}
            >
              At NXTGEN Broker, our mission is to empower investors with cutting-edge trading software and effective investment tools. Our focus is on delivering exceptional trading experiences that help you optimize your investment strategies and achieve your financial goals. With a commitment to innovation and customer satisfaction, we strive to provide solutions that cater to both novice and experienced investors. Join us and experience a new era of trading excellence.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                style={{
                  color: "rgb(154 217 83)",
                  borderColor: "rgb(154 217 83)",
                  textTransform: "none",
                }}
                onClick={() => router.push("/open_account")}
              >
                Open An Account
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default About;

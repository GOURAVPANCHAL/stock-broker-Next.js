"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Correctly import Image from next/image
import Head from "next/head";
import homeImage from "../../../public/Images/profitmax-app.png";
// import company1 from "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729783/nse_ewl8ov.png";
// import company2 from "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729814/bse_q14vk6.jpg";
// import company3 from "../../../public/Images/nsx.png";
// import company4 from "../../../public/Images/mcx.jpg";
import "./page.css";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          NXTGEN Broker - Trade Smartly with Trusted Stock Broker Services
        </title>
        <meta
          name="description"
          content="Experience seamless trading with NXTGEN Broker, your trusted partner in the stock market. We offer reliable stock broker services to help you make informed decisions and achieve your financial goals."
        />
        <meta
          name="keywords"
          content="NXTGEN Broker, stock trading, stock broker services, online trading, investment, financial goals, reliable broker, trading platform"
        />
        <meta name="author" content="NXTGEN Broker" />
        <meta
          property="og:title"
          content="NXTGEN Broker - Trade Smartly with Trusted Stock Broker Services"
        />
        <meta
          property="og:description"
          content="Seamless trading experience with NXTGEN Broker. Reliable stock broker services to achieve your financial goals."
        />
        <meta property="og:image" content="/path-to-image/og-image.jpg" />
        <meta property="og:url" content="https://www.nxtgenbroker.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NXTGEN Broker - Trade Smartly with Trusted Stock Broker Services"
        />
        <meta
          name="twitter:description"
          content="NXTGEN Broker offers reliable stock broker services for seamless trading and informed decision-making."
        />
        <meta name="twitter:image" content="/path-to-image/twitter-image.jpg" />
      </Head>

      <Box sx={{ backgroundColor: "#1C2534" }}>
        <Container id="Home">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginTop: { xs: "1rem", sm: "3rem", md: "5rem" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "36px", sm: "3rem", md: "3rem" },
                    fontWeight: 700,
                    color: "white",
                  }}
                  mb={3}
                >
                  Trade Smartly with Trusted Stock Broker Services
                </Typography>
                <Typography
                  mb={3}
                  sx={{
                    fontSize: { xs: "16px", sm: "20px", md: "20px" },
                    color: "#CFCFD1",
                  }}
                >
                  Experience seamless trading with our reliable stock broker
                  services, designed to help you make informed decisions and
                  achieve your financial goals with confidence.
                </Typography>
                <Box sx={{ display: { xs: "grid", sm: "grid", md: "flex" } }}>
                  <Button
                    onClick={() => router.push("/contact")}
                    sx={{
                      mb: { xs: "1rem", sm: "1rem" },
                      width: { xs: "100%", md: "37%", sm: "100%" },
                      fontSize: { xs: "14px", sm: "14px", md: "16px" },
                      color: "white",
                      padding: "16px 24px",
                      border: "1px solid white",
                      borderRadius: "8px",
                      textTransform: "capitalize",
                    }}
                  >
                    Contact <ArrowForwardIcon sx={{ ml: "7px" }} />
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item md={1}></Grid>

            <Grid item xs={12} md={5}>
              <Box mt={5}>
                <Image
                  alt="home image"
                  src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729652/profitmax-app_nqrknv.png"
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            padding: { xs: "20px 10px", md: "20px" },
            marginTop: { xs: "3rem", sm: "3rem", md: "5rem" },
            backgroundColor: "#222D40",
          }}
        >
          <Container>
            <Grid
              container
              spacing={3}
              sx={{
                textAlign: "center",
                justifyContent: "space-between",
              }}
            >
              {["https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729783/nse_ewl8ov.png", "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729814/bse_q14vk6.jpg", "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729925/nsx_udtfqd.png", "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729959/mcx_wtevdo.jpg"].map(
                (company, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Image
                      className="companyImage"
                      alt={`Company ${index + 1} image`}
                      src={company}
                      layout="responsive"
                      width={250}
                      height={150}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box
        sx={{
          pb: { xs: "3rem", sm: "4rem", md: "4rem" },
          pt: { xs: "3rem", sm: "4rem", md: "4rem" },
          backgroundColor: "#F8F8F8",
        }}
      >
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Box>
                <Image
                  alt="home2 image"
                  src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726730150/home2_jumwb3.webp"
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </Box>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "28px", sm: "44px", md: "44px" },
                  fontWeight: 600,
                  marginTop: { xs: "2rem" },
                }}
              >
                About NXTGEN Broker
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "20px" },
                  color: "#57585D",
                  mt: 3,
                }}
              >
                <b>NXTGEN Broker</b> (formerly known as XYZ Securities Pvt.
                Ltd.) began its journey in 2012. As a premier stock broking
                house in India, NXTGEN Broker offers a comprehensive range of
                investment opportunities, including Equities, Derivatives,
                Currency, Commodities, IPOs, and Mutual Funds.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "20px" },
                  color: "#57585D",
                  mt: 3,
                }}
              >
                At NXTGEN Broker, our mission is to empower investors with
                cutting-edge trading software and effective investment tools.
                Our focus is on delivering exceptional trading experiences that
                help you optimize your investment strategies and achieve your
                financial goals.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
          textAlign: "center",
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        <Box>
          <Image
            width={800}
            height={600}
            alt="conferencing"
            src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726734673/responsive_rl2ujo.webp"
            layout="responsive"
          />
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", sm: "44px", md: "44px" },
              marginTop: { xs: "2rem" },
              fontWeight: 600,
            }}
          >
            Powerful Virtual Conferencing Platform Solution
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "20px" },
              color: "#57585D",
              mt: 3,
            }}
          >
            Dedicated spaces that make it easy to come together.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;

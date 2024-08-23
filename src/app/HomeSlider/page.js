"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Correctly import Image from next/image
import "./page.css";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Box sx={{ backgroundColor: "#1C2534" }}>
        <Container id="Home">
          <Grid
            id="home_Section"
            container
            // sx={{
            //   flexDirection: {
            //     xs: "column-reverse",
            //     sm: "column-reverse",
            //     md: "row", // Changed from 'inherit' to 'row'
            //   },
            // }}
          >
            <Grid id="homeContent" item xs={12} md={6}>
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

            <Grid id="homeImage" item xs={12} md={5}>
              <Box mt={5}>
                <Image
                  alt="home image"
                  src="/Image.webp" // Ensure that the image path is correct
                  width={800} // Set the correct width
                  height={600} // Set the correct height
                  layout="responsive"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Grid
          container
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
              {["slack", "netflix", "google", "airbnb", "unicef", "adobe", "microsoft", "ship"].map(
                (company, index) => (
                  <Grid item xs={6} md={1} key={index}>
                    <Image
                      alt={`${company} image`}
                      src={`/${company}.webp`} // Ensure image paths are correct
                      width={146}
                      height={94}
                      layout="responsive"
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Container>
        </Grid>
      </Box>

      <Box
        sx={{
          pb: { xs: "3rem", sm: "4rem", md: "4rem" },
          pt: { xs: "3rem", sm: "4rem", md: "4rem" },
          backgroundColor: "#F8F8F8",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={5}>
              <Box>
                <Image
                  alt="home2 image"
                  src="/home2.webp" // Ensure image path is correct
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </Box>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "28px", sm: "44px", md: "44px" },
                  fontWeight: 600,
                  marginTop: { xs: "2rem" },
                }}
              >
                About NXTGEN broker
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "20px" },
                  color: "#57585D",
                  mt: 3,
                }}
              >
                <b>NXTGEN broker</b> is designed to be inclusive, by being able
                to use your own device to help hybrid-conference teams create,
                collaborate, and celebrate together.
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
            src="/responsive.webp"
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
            Powerful virtual conferencing platform solution
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

"use client"
import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import Header from "../Header/page";
import Footer from "../Footer/page";
import "../globals.css";
const About = () => {
  return (
    <>
      <Header />
      <Box className="tradeandinvestment">
        <Container>
          <Typography variant="h2">
            <b>About Us</b>
          </Typography>
          <Typography variant="h5">
            NXTGEN broker and the right to development
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
              <img
                src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3Njk4OTB8&ixlib=rb-4.0.3&q=85"
                alt="image"
                style={{
                  width: "100%",
                  maxWidth: 350,
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
            <Typography variant="h5" style={{color:'#9ad953'}}>
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
             Trading is the art and science of buying and selling financial instruments, such as stocks bonds currencies.
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
             Trading in financial markets involves a wide range of strategies that traders employ to make informed decisions. From trading to swing trading and long-term investing, each strategy has its own set of principles and risk factors.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                style={{
                  color: "rgb(154 217 83)",
                  borderColor: "rgb(154 217 83)",
                  textTransform: "none",
                }}
                onClick={() => router.push("/contact")}
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

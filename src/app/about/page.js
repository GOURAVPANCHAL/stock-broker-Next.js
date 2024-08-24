import React from "react";
import { Container, Typography, Grid, Paper, Box, Avatar } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Header from "../Header/page";
import Footer from "../Footer/page";
import '../globals.css'
const AboutPage = () => {
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
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h5"
          align="center"
          paragraph
          sx={{ color: grey[700] }}
        >
          At <b>NXTGEN broker</b>, we are committed to providing innovative
          solutions and expert insights to help you navigate the world of
          investing.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: 3,
                textAlign: "center",
                color: grey[800],
                boxShadow: 3,
                backgroundColor: blue[50],
                borderRadius: 2,
              }}
            >
              <Avatar
                src="/path-to-your-image/mission.jpg" // Replace with your image path
                sx={{ width: 100, height: 100, mb: 2, mx: "auto" }}
              />
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is to empower investors with the tools and insights
                needed to make informed decisions. We offer real-time data and
                innovative solutions to guide your financial journey and help
                you achieve your goals.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: 3,
                textAlign: "center",
                color: grey[800],
                boxShadow: 3,
                backgroundColor: blue[50],
                borderRadius: 2,
              }}
            >
              <Avatar
                src="/path-to-your-image/team.jpg" // Replace with your image path
                sx={{ width: 100, height: 100, mb: 2, mx: "auto" }}
              />
              <Typography variant="h4" gutterBottom>
                Our Team
              </Typography>
              <Typography variant="body1" paragraph>
                Our team consists of seasoned professionals with expertise in
                finance, technology, and market analysis. We are dedicated to
                providing outstanding service and ensuring you have a seamless
                experience with us.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

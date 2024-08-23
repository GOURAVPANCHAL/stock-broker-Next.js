"use client";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import "../Footer/footer.css";

const Footer = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box style={{ backgroundColor: '#1C2534' }}>
        <Container style={{ marginTop: "5rem" }}>
          <Grid container spacing={2}>
            <Grid
              sx={{ display: { xs: "none", md: "block", sm: "block" } }}
              item
              xs={12}
              md={3}
            >
              <Typography color="rgb(154, 217, 83)" fontSize="20px" fontWeight="500">
                NXTGEN <span style={{ color: 'white' }}> broker</span>
              </Typography>
              <Typography fontSize="18px" color="#9A9A9A">
                Made around the world.
              </Typography>
            </Grid>
            <Grid
              sx={{ display: { xs: "block", md: "none", sm: "none" } }}
              item
              xs={12}
              md={3}
            >
              <Typography fontSize="28px" fontWeight="600">
                <Image
                  alt="vector"
                  src="/Vector.webp" // Use the correct path for your image
                  width={100} // Adjust the width as needed
                  height={100} // Adjust the height as needed
                /> EverntUp.
              </Typography>
              <Typography mt={1} mb={4} fontSize="16px" color="#9A9A9A">
                Made around the world.
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography
                variant="h6"
                fontSize="20px"
                fontWeight="600"
                mb={3}
                color="white"
              >
                Products
              </Typography>
              <ul className="footerul">
                <li key="conference">Conference</li>
                <li key="pricing">Pricing</li>
                <li key="solution">Solution</li>
              </ul>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography
                variant="h6"
                fontSize="20px"
                fontWeight="600"
                color="white"
                mb={3}
              >
                Company
              </Typography>
              <ul className="footerul">
                <li key="about">About</li>
                <li key="contact">Contact</li>
                <li key="career">Careers</li>
                <li key="blog">Blog</li>
              </ul>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography
                variant="h6"
                fontSize="20px"
                fontWeight="600"
                color="white"
                mb={3}
              >
                Support
              </Typography>
              <ul className="footerul">
                <li key="support">Support</li>
                <li key="policy">Policy</li>
                <li key="talk">Talk to Sales</li>
              </ul>
            </Grid>
            <Grid item md={3}>
              <Typography mb={3} fontSize="19px" fontWeight="600" color="white">
                Subscribe to our newsletter.
              </Typography>
              <Typography mb={2} fontSize="16px" color="white" lineHeight="2">
                Want to stay up to date with news and updates about our product? Subscribe.
              </Typography>
              <TextField
                style={{ width: "100%", color: 'white' }}
                id="outlined-basic"
                label="email@provider.com"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />
        </Container>

        <Container style={{ paddingBottom: "1rem", color: 'white' }}>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item md={2} xs={12}>
              <Typography fontSize="16px" color="#57585D">
                © 2022 NXTGEN broker, Inc.
              </Typography>
            </Grid>
            <Grid item mt={2} mb={2} xs={12} md={7}>
              <Box
                sx={{ display: { xs: "inline-grid", sm: "flex", md: "flex" } }}
                justifyContent="space-evenly"
              >
                <Typography fontSize="16px" color="#57585D">
                  Privacy Policy
                </Typography>
                <Typography fontSize="16px" color="#57585D">
                  Terms of Service
                </Typography>
                <Typography fontSize="16px" color="#57585D">
                  Cookie Settings
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormControl style={{ width: "65%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Language
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Select Language"
                    onChange={handleChange}
                  >
                    <MenuItem value={"English"}>English(US)</MenuItem>
                    <MenuItem value={"Hindi"}>Hindi</MenuItem>
                    <MenuItem value={"Sanskrit"}>Sanskrit</MenuItem>
                    <MenuItem value={"Japnish"}>Japnish</MenuItem>
                    <MenuItem value={"Aribian"}>Aribian</MenuItem>
                    <MenuItem value={"Chinese"}>Chinese</MenuItem>
                    <MenuItem value={"Franch"}>Franch</MenuItem>
                    <MenuItem value={"Japani"}>Japani</MenuItem> {/* Fixed typo */}
                  </Select>
                </FormControl>
                <Typography>
                  <TwitterIcon style={{ color: "#57585D" }} />
                </Typography>
                <Typography>
                  <FacebookIcon style={{ color: "#57585D" }} />
                </Typography>
                <Typography>
                  <LinkedInIcon style={{ color: "#57585D" }} />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

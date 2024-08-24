"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Tab,
  Tabs,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import Header from "../Header/page";
import Footer from "../Footer/page";
import "../globals.css";
import invest from "../assets/invest2.png";
import Image from "next/image";
function ApplicationForm() {
  const [tabValue, setTabValue] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header />
      <Box>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#2E3B55" }}>
              Invest in Tomorrow
            </Typography>
            <Typography variant="h6" sx={{ color: "#4CAF50" }}>
              Open Your <strong>Free</strong> Demat & Trading Account Now!
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="application tabs"
                centered
                sx={{ mb: 2, backgroundColor: "#1C2534", boxShadow:'0 2px 10px #e5e5e5',  borderRadius: "2rem" }}
              >
                <Tab
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "2rem",
                  }}
                  label="New Application"
                />
                <Tab
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "2rem",
                  }}
                  label="Resume Application"
                />
              </Tabs>
                  {tabValue === 0 && (
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        New Application Details
                      </Typography>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        placeholder="Enter your 10-digit mobile number"
                        variant="outlined"
                        margin="normal"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Email ID"
                        placeholder="Enter your email Id"
                        variant="outlined"
                        margin="normal"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 2,
                          py: 1.5,
                          backgroundColor: "#1C2534",
                          "&:hover": { backgroundColor: "#9ad953" },
                        }}
                        disabled={!mobileNumber || !emailId}
                      >
                        Get OTP
                      </Button>
                      <Typography
                        variant="caption"
                        display="block"
                        sx={{ mt: 1, color: "#757575" }}
                      >
                        OTP will be sent to you on the mobile number provided
                      </Typography>
                    </Box>
                  )}
                  {tabValue === 1 && (
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Resume Application Details
                      </Typography>
                      {/* Add the content for the Resume Application tab here */}
                      <Typography variant="body1" gutterBottom>
                        Please provide your application reference number to
                        resume.
                      </Typography>
                      <TextField
                        fullWidth
                        label="Reference Number"
                        placeholder="Enter your application reference number"
                        variant="outlined"
                        margin="normal"
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 2,
                          py: 1.5,
                          backgroundColor: "#1C2534",
                          "&:hover": { backgroundColor: "#1C2534" },
                        }}
                      >
                        Resume
                      </Button>
                    </Box>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={invest} // Replace with the path to your image
                      alt="Illustration"
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default ApplicationForm;

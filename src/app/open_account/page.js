"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import "../globals.css";
// import invest from "../../../public/Images/invest2.png";
import Image from "next/image";

function ApplicationForm() {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h4" mb={5} gutterBottom sx={{ color: "#2E3B55" }}>
              Trading Patience & Consistency Are The Key Of Success
            </Typography>
            {/* <Typography variant="h6" sx={{ color: "#4CAF50" }}>
              Open Your <strong>Free</strong> Demat & Trading Account Now!
            </Typography> */}
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Fill Your Details
                    </Typography>
                    <form
                      action="https://api.web3forms.com/submit"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="access_key"
                        value="93050634-19bf-4b2c-82ee-e55ebea824b9"
                      />
                      <TextField
                        fullWidth
                        label="Name"
                        placeholder="Enter your name"
                        variant="outlined"
                        margin="normal"
                        name="name"
                        type="text"
                      />
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        placeholder="Enter your 10-digit mobile number"
                        variant="outlined"
                        margin="normal"
                        name="mobileNumber"
                        type="tel"
                      />
                      <TextField
                        fullWidth
                        label="Email ID"
                        placeholder="Enter your email Id"
                        variant="outlined"
                        margin="normal"
                        name="emailId"
                        type="email"
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
                        type="submit"
                      >
                        Submit
                      </Button>
                    </form>
                  </Box>
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
                      src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726734734/invest2_qsejv4.png"
                      alt="Illustration"
                      width={400}
                      height={400}
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
    </>
  );
}

export default ApplicationForm;

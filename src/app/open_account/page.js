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
import invest from "../assets/invest2.png";
import Image from "next/image";

function ApplicationForm() {
  const [tabValue, setTabValue] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
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
                  
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        New Application Details
                      </Typography>
                      <TextField
                        fullWidth
                        label="Name"
                        placeholder="Enter your name"
                        variant="outlined"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
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
                        Submit
                      </Button>
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
    </>
  );
}

export default ApplicationForm;

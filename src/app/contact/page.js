"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Container,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsApp,
  LocationOn,
  Email,
  Phone,
} from "@mui/icons-material";
import "../globals.css";
import Head from "next/head";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - NXTGEN Broker</title>
        <meta
          name="description"
          content="Get in touch with NXTGEN Broker for any inquiries or support. We aim to respond within 24 hours."
        />
        <meta
          name="keywords"
          content="contact, NXTGEN Broker, support, inquiry, stock broker"
        />
        <meta name="author" content="NXTGEN Broker" />
        <meta property="og:title" content="Contact Us - NXTGEN Broker" />
        <meta
          property="og:description"
          content="Contact NXTGEN Broker for any questions or support. We're here to help!"
        />
        <meta property="og:image" content="/path-to-image/contact-og.jpg" />
        <meta
          property="og:url"
          content="https://www.nxtgenbroker.com/contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - NXTGEN Broker" />
        <meta
          name="twitter:description"
          content="Get in touch with NXTGEN Broker for any inquiries or support. We aim to respond within 24 hours."
        />
        <meta
          name="twitter:image"
          content="/path-to-image/contact-twitter.jpg"
        />
      </Head>
      <Box className="tradeandinvestment">
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            <b>Contact Us</b>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            NXTGEN broker and the right to development
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fafafa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: "white", padding: 4, boxShadow: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  Let&apos;s get in touch
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 3 }}>
                  If you have questions or would like more information on our
                  works, please complete the form and we&apos;ll aim to get back
                  to you within 24 hours.
                </Typography>
                <Box sx={{ marginBottom: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <LocationOn sx={{ marginRight: 1 }} />
                    <Typography variant="body1">
                      H-106 G-01, BALAJI ENCLAVE, GOVINDPURM, GHAZIABAD, Uttar
                      Pradesh, India 201013
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <Email sx={{ marginRight: 1 }} />
                    <Typography variant="body1">
                      <Link
                        href="mailto:mdnrabhi00@gmail.com"
                        sx={{ color: "black", textDecoration: "none" }}
                      >
                        mdnrabhi00@gmail.com
                      </Link>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <Phone sx={{ marginRight: 1 }} />
                    <Typography variant="body1">9458434778</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: "#1C2534", padding: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", marginBottom: 2 }}
                >
                  Contact us
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    type="text"
                    name="name"
                    fullWidth
                    label="Username"
                    variant="outlined"
                    sx={{
                      marginBottom: 2,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fafafa" },
                        "&:hover fieldset": { borderColor: "#1abc9c" },
                      },
                      input: { color: "#fff" },
                      label: { color: "#fafafa" },
                    }}
                  />
                  <TextField
                    name="email"
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    sx={{
                      marginBottom: 2,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fafafa" },
                        "&:hover fieldset": { borderColor: "#1abc9c" },
                      },
                      input: { color: "#fff" },
                      label: { color: "#fafafa" },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    name="number"
                    type="tel"
                    variant="outlined"
                    sx={{
                      marginBottom: 2,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fafafa" },
                        "&:hover fieldset": { borderColor: "#1abc9c" },
                      },
                      input: { color: "#fff" },
                      label: { color: "#fafafa" },
                    }}
                  />
                  <TextField
                    fullWidth
                    name="message"
                    type="text"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      marginBottom: 2,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#fafafa" },
                        "&:hover fieldset": { borderColor: "#1abc9c" },
                      },
                      textarea: { color: "#fff" },
                      label: { color: "#fafafa" },
                    }}
                  />
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#1C2534",
                      borderColor: "#fafafa",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#1C2534",
                        borderColor: "#fafafa",
                      },
                    }}
                  >
                    Send
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;

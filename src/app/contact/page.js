"use client";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { Map as MapIcon, Send as SendIcon } from "@mui/icons-material";
import { useState } from "react";
import Header from "../Header/page";
import Footer from "../Footer/page";
const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [helpBox, setHelpBox] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          padding: "50px 80px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          height: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center", mb: 2, fontWeight: 500, color: "#4F4F4F" }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "#464646", mb: 3 }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
          sapiente.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58365.19068196581!2d89.1033283!3d23.8958441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe965536b7d61f%3A0x28fea367efdb38c9!2sKushtia!5e0!3m2!1sen!2sbd!4v1588845495032!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                label="How we can help?"
                multiline
                rows={4}
                variant="outlined"
                value={helpBox}
                onChange={(e) => setHelpBox(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                sx={{ display: "flex", alignItems: "center" }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;

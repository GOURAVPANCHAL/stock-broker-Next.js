import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
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
import Header from "../Header/page";
import Footer from "../Footer/page";
import "../globals.css";
const Contact = () => {
  return (
    <>
      <Header />
      <Box className="tradeandinvestment">
        <Container>
          <Typography variant="h2">
            <b>Contact Us</b>
          </Typography>
          <Typography variant="h5">
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
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: "white", padding: 4, boxShadow: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  Let's get in touch
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 3 }}>
                  If you have questions or would like more information on our
                  works, please complete the form and we'll aim to get back to
                  you within 24 hours.
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
                        sx={{ color: "black" }}
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

                {/* <Box>
                  <Typography variant="body2" sx={{ marginBottom: 1 }}>
                    Connect with us:
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      href="https://www.facebook.com/mediamanadvertise"
                      target="_blank"
                    >
                      <Facebook
                        sx={{
                          color: "#fff",
                          backgroundColor: "#1C2534",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com/Pk94935427"
                      target="_blank"
                    >
                      <Twitter
                        sx={{
                          color: "#fff",
                          backgroundColor: "#1C2534",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      />
                    </IconButton>
                    <IconButton
                      href="https://www.instagram.com/mediamanadvertising?igsh=MXdhbWQzZnMwYnQ5Yw=="
                      target="_blank"
                    >
                      <Instagram
                        sx={{
                          color: "#fff",
                          backgroundColor: "#1C2534",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      />
                    </IconButton>
                    <IconButton
                      href="https://www.linkedin.com/in/pardeep-kumar-4279726a/"
                      target="_blank"
                    >
                      <LinkedIn
                        sx={{
                          color: "#fff",
                          backgroundColor: "#1C2534",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      />
                    </IconButton>
                    <IconButton
                      href="https://www.youtube.com/@mediaman569"
                      target="_blank"
                    >
                      <YouTube
                        sx={{
                          color: "#fff",
                          backgroundColor: "#1C2534",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      />
                    </IconButton>
                    <IconButton
                      href="https://api.whatsapp.com/send?phone=919729606097"
                      target="_blank"
                    >
                      <WhatsApp
                        sx={{
                          color: "#fff",
                          backgroundColor: "#1C2534",
                          borderRadius: "5px",
                          padding: "4px",
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box> */}
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
                <Box component="form" noValidate autoComplete="off">
                  <TextField
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;

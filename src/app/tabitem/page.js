"use client";
import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import whyTrade from "../../../public/Images/why_trade.png";
// import whyTradebg from "../../../public/Images/why_trade_bg.png";
import "../globals.css";

export default function WhyTrade() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();

  return (
    <Container maxWidth="xxl" sx={{ background: "#1c2534e0", color: "white" }}>
      <Grid container spacing={3} justifyContent="center">
        {/* Image Section */}
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xxl={5}
          order={{ xs: 2, lg: 0 }}
          sx={{
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out",
            },
            textAlign: { xs: "center", lg: "left" }, // Center image on small screens
          }}
        >
          <Box
            className="why-trade__thumbs"
            display="flex"
            alignItems="flex-end"
            justifyContent="center" // Center image horizontally on small screens
            height="100%"
            position="relative"
            zIndex={0}
            sx={{ pl: { sm: 5, lg: 0 }, pb: { xs: 3, lg: 0 } }} // Add padding on small screens
          >
            <Image
              src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726730427/why_trade_tgec9o.png"
              alt="Trade Genius Image"
              width={isMobile ? 300 : 500} // Adjust width for mobile devices
              height={isMobile ? 300 : 500} // Adjust height for mobile devices
              layout="intrinsic"
            />
            {/* <Image
              className="tabitemsimage"
              src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726730428/why_trade_bg_edhqjq.png"
              alt="Background Image"
              layout="intrinsic"
              height={600}
              width={700}
              style={{
                position: "absolute",
                zIndex: -1,
                left: isMobile ? "10px" : 100, // Adjust right position for mobile devices
                bottom: 0,
                top: 0,
                paddingTop: isMobile ? "10px" : "15px", // Adjust paddingTop for mobile devices
                display: isMobile ? "none" : "flex", // Hide the image on mobile devices
                paddingRight: isMobile ? 0 : { md: "5px", xxl: 0 },
              }}
            /> */}
          </Box>
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} lg={6} xxl={7}>
          <Grid
            container
            spacing={3}
            pt={{ xs: 5, lg: 15 }}
            pb={{ xs: 5, lg: 15 }}
          >
            <Grid item xs={12} xxl={8} offsetXxl={2}>
              <Box className="why-trade__part">
                <Typography
                  variant="subtitle1"
                  component="span"
                  className="heading fs-five"
                >
                  <b>Why Trade With</b>
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  className="title mt-5 mb-3"
                >
                  <b>Trade Genius</b>
                </Typography>
                <Typography className="description">
                  Trading is the art and science of buying and selling financial
                  instruments, such as stocks, bonds, and currencies.
                </Typography>
                <Button
                  onClick={() => router.push("/contact")}
                  variant="outlined"
                  style={{
                    color: "white",
                    borderColor: "black",
                    textTransform: "none",
                    fontSize: "14px",
                  }}
                  className="cmn-btn secondary-link fs-six-up gap-2 gap-lg-3 align-items-center mt-5 text-black"
                  endIcon={<i className="ti ti-arrow-narrow-right fs-four"></i>}
                  sx={{ mt: { xs: 3, lg: 5 } }} // Adjust margin-top for different screen sizes
                >
                  Learn more
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              xxl={12}
              mt={{ xs: 5, md: 8, xxl: 3 }}
              sx={{
                textAlign: { xs: "center", lg: "left" }, // Center text on small screens
              }}
            >
              <Box
                className="why-trade__part"
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "center", lg: "flex-start" }} // Center on small screens
              >
                <Box className="content">
                  <Typography
                    variant="h3"
                    component="h3"
                    className="title mb-3"
                  >
                    <b>Trade Apex</b>
                  </Typography>
                  <Typography className="description">
                    Trading is the art and science of buying and selling
                    financial instruments, such as stocks, bonds, currencies,
                    commodities, and cryptocurrencies, with the aim of making a
                    profit. It&apos;s a dynamic and multifaceted profession that
                    attracts professionals from around the world.
                  </Typography>
                  <Button
                    onClick={() => router.push("/contact")}
                    variant="outlined"
                    style={{
                      color: "white",
                      borderColor: "black",
                      textTransform: "none",
                      fontSize: "14px",
                    }}
                    className="cmn-btn secondary-link fs-six-up gap-2 gap-lg-3 align-items-center mt-5"
                    endIcon={
                      <i className="ti ti-arrow-narrow-right fs-four"></i>
                    }
                    sx={{ mt: { xs: 3, lg: 5 } }} // Adjust margin-top for different screen sizes
                  >
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

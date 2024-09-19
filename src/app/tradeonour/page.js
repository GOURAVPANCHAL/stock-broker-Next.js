import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
// import trade from "../../../public/Images/trade_on2.webp";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const Page = () => {
  return (
    <Box className="tradeour" sx={{ backgroundColor: "black", padding: "2rem 0" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726730246/trade_on2_e6am8g.webp"
                alt="Trade Platform"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ color: "white" }}>
            <Box sx={{ padding: { xs: "1rem", md: "2rem" } }}>
              <Typography
                variant="h6"
                sx={{ color: "var(--tradeHeading-color)", fontWeight: "bold" }}
              >
                Trade On Our
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                World Class Platform
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Trading in financial markets involves a wide range of
                strategies that traders employ to make informed decisions.
                From day trading to swing trading and long-term investing, each
                strategy has its own set of principles and risk factors.
              </Typography>
              <Box
                mt={5}
                sx={{ display: "grid", gap: "15px", alignItems: "center" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    fontSize: "16px",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <TaskAltRoundedIcon sx={{ color: "var(--tradeHeading-color)" }} /> 
                  Charts Trading
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    fontSize: "16px",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <TaskAltRoundedIcon sx={{ color: "var(--tradeHeading-color)" }} /> 
                  Understanding Trading Strategies
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    fontSize: "16px",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <TaskAltRoundedIcon sx={{ color: "var(--tradeHeading-color)" }} /> 
                  Risk Management in Trading
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    fontSize: "16px",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <TaskAltRoundedIcon sx={{ color: "var(--tradeHeading-color)" }} /> 
                  Technical vs. Fundamental Analysis
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page;

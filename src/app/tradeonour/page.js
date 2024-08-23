import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import trade from "../assets/trade_on2.webp";
import Image from "next/image";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
const page = () => {
  return (
    <>
      <Box className="tradeour" sx={{ background: "black" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: { xs: "0rem", md: "2rem", sm: "2rem" } }}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  src={trade}
                  alt="John Doe's Profile Picture"
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} style={{ color: "white" }}>
              <Box sx={{ padding: { xs: "0rem", md: "2rem", sm: "2rem" } }}>
                <Typography
                  variant="h6"
                  style={{ color: "var(--tradeHeading-color)" }}
                >
                  <b>Trade On Our</b>
                </Typography>
                <Typography variant="h4">World Class Platform</Typography>
                <Typography variant="body1" className="paragraph">
                  Trading in financial markets involves a wide range of
                  strategies that traders employ to make informed decisions.
                  From trading to swing trading and long-term investing, each
                  strategy has its own set of principles and risk factors.
                </Typography>
                <Box
                  mt={5}
                  style={{ gap: "15px", display: "grid", alignItems: "center" }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      display: "flex",
                      fontSize: "16px",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <TaskAltRoundedIcon
                      style={{ color: "var(--tradeHeading-color)" }}
                    />{" "}
                    Charts trading
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      display: "flex",
                      fontSize: "16px",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <TaskAltRoundedIcon
                      style={{ color: "var(--tradeHeading-color)" }}
                    />{" "}
                    Understanding Trading Strategies
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      display: "flex",
                      fontSize: "16px",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <TaskAltRoundedIcon
                      style={{ color: "var(--tradeHeading-color)" }}
                    />{" "}
                    Risk Management in Trading
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      display: "flex",
                      fontSize: "16px",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <TaskAltRoundedIcon
                      style={{ color: "var(--tradeHeading-color)" }}
                    />{" "}
                    Technical vs. Fundamental Analysis
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default page;

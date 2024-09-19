"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
// import faqimage from "../../../public/Images/faq.jpg";
import '../globals.css'

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1c2534e0",
        color: "white",
        py: 8,
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        <b>Frequently Asked Questions</b>
      </Typography>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Image
              src="https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726729507/faq_m2f1co.jpg"
              alt="FAQ Image"
              layout="responsive"
              width={600}
              height={400}
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                bgcolor: "#f4f4f9",
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
              }}
            >
              {[
                {
                  panel: "panel1",
                  question: "What is a stock broker and why do I need one?",
                  answer:
                    "A stock broker facilitates the buying and selling of stocks and other securities on behalf of investors. You need a stock broker to access the stock market, execute trades, and manage your investment portfolio with expert guidance.",
                },
                {
                  panel: "panel2",
                  question: "How do I open a trading account with NXTGEN Broker?",
                  answer:`Opening a trading account is simple. You can visit our "Open an Account" page, fill out the required details, submit the necessary documents (ID proof, address proof, bank details), and we’ll guide you through the verification process.`,
                },
                {
                  panel: "panel3",
                  question: "What are the charges for trading with NXTGEN Broker?",
                  answer:`We charge a competitive brokerage fee on each trade. For detailed information on our fees, please refer to the "Pricing" section on our website, or contact our customer service for personalized support.`,
                },
                {
                  panel: "panel4",
                  question: "Is my investment safe with NXTGEN Broker?",
                  answer:"Yes, your investments are completely secure with us. NXTGEN Broker operates under the guidelines set by regulatory authorities, ensuring that your funds and investments are protected at all times.",
                },
              ].map(({ panel, question, answer }) => (
                <Accordion
                  key={panel}
                  expanded={expanded === panel}
                  onChange={handleChange(panel)}
                  sx={{
                    bgcolor: "#ffffff",
                    borderRadius: 1,
                    mb: 2,
                    boxShadow:
                      expanded === panel
                        ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                        : "none",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#2c3e50" }} />}
                    aria-controls={`${panel}a-content`}
                    id={`${panel}a-header`}
                    sx={{
                      bgcolor: "#1C2534",
                      color: "#ffffff",
                      borderRadius: 1,
                      "&:hover": {
                        bgcolor: "#154f8c", // Adjusted hover color
                        color: "#ffffff",
                      },
                    }}
                  >
                    <Typography variant="h6">{question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#34495e" }}>{answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;

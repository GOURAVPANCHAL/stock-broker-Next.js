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
import faqimage from "../assets/faq.jpg"; // Update with your image path
import '../globals.css'
const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="faqpage">
      <Typography className="faqheading" variant="h2" align="center" gutterBottom>
        <b>
          <span style={{ color: "white" }}> Frequently Asked</span> Questions
        </b>
      </Typography>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Image
              src={faqimage}
              alt="FAQ Image"
              layout="responsive"
              height={"auto"}
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
            className="faqbox"
              sx={{
                bgcolor: "#f4f4f9",
                borderRadius: 2,
                boxShadow: 3,
                
              }}
            >
              {[
                {
                  panel: "panel1",
                  question: "What is the purpose of this pen?",
                  answer:
                    "This pen is designed to provide web developers with boilerplate code for a FAQ Accordion.",
                },
                {
                  panel: "panel2",
                  question: "What is an accordion?",
                  answer:
                    "An accordion is a vertically stacked list of headers that users can click on to reveal more information.",
                },
                {
                  panel: "panel3",
                  question: "How can I customize the accordion?",
                  answer:
                    "You can customize the accordion by modifying the CSS styles and changing the HTML structure as per your needs.",
                },
                {
                  panel: "panel4",
                  question: "Is this accordion responsive?",
                  answer:
                    "Yes, this accordion is designed to be responsive and will adjust its layout based on the screen size.",
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
                        bgcolor: "rgb(154 217 83)",
                        color: "#1C2534",
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

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";

// Data for testimonials
const testimonials = [
  {
    name: "Gourav Panchal",
    review: `NXTGEN Broker has transformed my investment strategy. Their tools and insights make trading seamless and intuitive. I'm consistently seeing better returns!`,
    image: "https://labmantra.com/static/media/p1.4684c8065083eb48e739.jpg",
    testimonial:
      "Regular investor using NXTGEN Broker for portfolio management.",
  },
  {
    name: "Harsh Vardhan",
    review: `I've never felt more confident with my trades. NXTGEN Broker offers real-time data and expert advice that have helped me make informed decisions every step of the way.`,
    image: "https://labmantra.com/static/media/p2.e79d43cdba0e4009f862.jpeg",
    testimonial:
      "Active trader relying on NXTGEN Broker for data-driven strategies.",
  },
  {
    name: "Naman",
    image:
      "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726737035/client4_zgrooe.png",
    review:
      "What sets NXTGEN Broker apart is their personalized support and cutting-edge technology. It’s helped me manage my investments more efficiently than ever.",
    testimonial:
      "Long-time trader using NXTGEN Broker’s advanced tools for management.",
  },
  {
    name: "Karan Sehmbi",
    image:
      "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726737035/client3_l944me.png",
    review: `The level of transparency and detailed market insights provided by NXTGEN Broker has been unmatched. It’s the perfect tool for both seasoned and new traders.`,
    testimonial:
      "Professional trader who trusts NXTGEN Broker’s transparency and insights.",
  },
  {
    name: "Deepak Kumar",
    image:
      "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726737035/client2_kvopcn.png",
    review:
      "I’ve tried several platforms, but NXTGEN Broker truly stands out for its ease of use, comprehensive features, and reliable service. Highly recommended!",
    testimonial:
      "Experienced investor enjoying NXTGEN Broker’s streamlined platform.",
  },
  {
    name: "Anish Solanki",
    image:
      "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726737035/client1_izzxae.png",
    review:
      "NXTGEN Broker has made trading so much simpler. The intuitive interface and expert insights have significantly boosted my confidence and success in the market.",
    testimonial:
      "Enthusiastic trader benefiting from NXTGEN Broker’s simplified trading platform.",
  },
];

const Testimonial = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f4f8", padding: "50px 0" }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: "#003873", fontWeight: "bold" }}
        >
          Our Happy Customers
        </Typography>
        <Box sx={{ textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]} // Correctly import Swiper modules
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    padding: "20px",
                    margin: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "left",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        marginBottom: "20px",
                        position: "relative",
                        paddingLeft: "30px",
                        "&::before": {
                          content: '"“"',
                          fontSize: "3rem",
                          color: "#003873",
                          position: "absolute",
                          left: 0,
                          top: "-10px",
                        },
                      }}
                    >
                      {testimonial.testimonial}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        marginBottom: "20px",
                        position: "relative",
                        paddingLeft: "30px",
                        "&::before": {
                          content: '"“"',
                          fontSize: "3rem",
                          color: "#003873",
                          position: "absolute",
                          left: 0,
                          top: "-10px",
                        },
                      }}
                    >
                      Review : {testimonial.review}
                    </Typography>
                    <Grid container alignItems="center">
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60, marginRight: "15px" }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: "#003873", marginBottom: "0" }}
                        >
                          {testimonial.name}
                        </Typography>
                      </Box>
                    </Grid>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;

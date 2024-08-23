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
    name: "Harsh Vardhan",
    image: "https://labmantra.com/static/media/p1.4684c8065083eb48e739.jpg",
    testimonial:
      "The customer service was exceptional, and the products exceeded my expectations. I highly recommend this company to anyone looking for quality.",
  },
  {
    name: "Gaourav",
    image: "https://labmantra.com/static/media/p2.e79d43cdba0e4009f862.jpeg",
    testimonial:
      "I have been using these products for months now, and I must say they are top-notch. The durability and design are just perfect!",
  },
  {
    name: "Ashish",
    image: "https://labmantra.com/static/media/p1.4684c8065083eb48e739.jpg",
    testimonial:
      "Fantastic quality and creativity in the products. My kids absolutely love them, and they are very safe to use.",
  },
  {
    name: "Naman",
    image: "https://labmantra.com/static/media/p2.e79d43cdba0e4009f862.jpeg",
    testimonial:
      "The delivery was fast, and the packaging was excellent. The products themselves are wonderful, and I will definitely be a returning customer.",
  },
  {
    name: "Karan Sehmbi",
    image: "https://labmantra.com/static/media/p1.4684c8065083eb48e739.jpg",
    testimonial:
      "These products have made a significant difference in my daily routine. The quality is outstanding, and the customer support is very responsive.",
  },
  {
    name: "Deepak Kumar",
    image: "https://labmantra.com/static/media/p2.e79d43cdba0e4009f862.jpeg",
    testimonial:
      "I bought several items, and all of them were excellent. The attention to detail and the craftsmanship are evident in each product.",
  },
  {
    name: "Anish Solanki",
    image: "https://labmantra.com/static/media/p1.4684c8065083eb48e739.jpg",
    testimonial:
      "Amazing products! They are very well made and have quickly become a favorite in our household. Highly recommended!",
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
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
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
                        <Typography
                          variant="body2"
                          sx={{ color: "#6c757d", marginTop: "5px" }}
                        >
                          Customer
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

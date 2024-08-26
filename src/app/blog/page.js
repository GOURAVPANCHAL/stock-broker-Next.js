import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import Header from "../Header/page";
import Footer from "../Footer/page";
import "../globals.css";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpeg";

const BlogPage = () => {
  const posts = [
    {
      image: blog1,
      title: "Understanding Stock Market Trends",
      summary:
        "A comprehensive guide to understanding the latest stock market trends and how to leverage them for investment.",
      link: "#",
    },
    {
      image: blog2,
      title: "Top 5 Investment Strategies for 2024",
      summary:
        "Discover the top investment strategies for 2024 to maximize your returns and minimize risks.",
      link: "#",
    },
    {
      image: blog3,
      title: "How to Build a Diversified Portfolio",
      summary:
        "Learn the importance of diversification and how to build a portfolio that balances risk and reward.",
      link: "#",
    }
  ];

  return (
    <>
      <Header />
      <Box className="tradeandinvestment">
        <Container>
          <Typography variant="h2">
            <b>Blog</b>
          </Typography>
          <Typography variant="h5">
            NXTGEN broker and the right to development
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h5"
          align="center"
          paragraph
          sx={{ color: grey[700] }}
        >
          Stay updated with the latest insights, trends, and strategies in the
          world of investing. Our blog covers a wide range of topics to help you
          make informed decisions.
        </Typography>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 10,
                  },
                  animation: "fadeIn 1s ease-in-out",
                }}
              >
                <Box sx={{ position: "relative", height: 140 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    style={{
                      transition: "transform 0.3s ease",
                    }}
                    className="card-image"
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.summary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;

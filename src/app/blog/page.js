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
import "../globals.css";
// import blog1 from "../../../public/Images/blog1.jpg";
// import blog2 from "../../../public/Images/blog2.jpg";
// import blog3 from "../../../public/Images/blog3.jpeg";
import Head from "next/head";

const BlogPage = () => {
  const posts = [
    {
      image:
        "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726728651/blog1_lescrj.jpg",
      title: "Understanding Stock Market Trends",
      summary:
        "A comprehensive guide to understanding the latest stock market trends and how to leverage them for investment.",
      link: "#",
    },
    {
      image:
        "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726728650/blog2_y3pvrg.jpg",
      title: "Top 5 Investment Strategies for 2024",
      summary:
        "Discover the top investment strategies for 2024 to maximize your returns and minimize risks.",
      link: "#",
    },
    {
      image:
        "https://res.cloudinary.com/dnv1sgfjx/image/upload/v1726728650/blog3_p0ivey.jpg",
      title: "How to Build a Diversified Portfolio",
      summary:
        "Learn the importance of diversification and how to build a portfolio that balances risk and reward.",
      link: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - NXTGEN Broker</title>
        <meta
          name="description"
          content="Read the latest blog posts from NXTGEN Broker about stock market trends, investment strategies, and portfolio management."
        />
        <meta
          name="keywords"
          content="blog, stock market trends, investment strategies, diversified portfolio, NXTGEN Broker"
        />
        <meta name="author" content="NXTGEN Broker" />
        <meta property="og:title" content="Blog - NXTGEN Broker" />
        <meta
          property="og:description"
          content="Stay updated with the latest insights, trends, and strategies in the world of investing with NXTGEN Broker's blog."
        />
        <meta property="og:image" content="/path-to-image/blog-og.jpg" />
        <meta property="og:url" content="https://www.nxtgenbroker.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - NXTGEN Broker" />
        <meta
          name="twitter:description"
          content="Read the latest blog posts from NXTGEN Broker about stock market trends, investment strategies, and portfolio management."
        />
        <meta name="twitter:image" content="/path-to-image/blog-twitter.jpg" />
      </Head>
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
    </>
  );
};

export default BlogPage;

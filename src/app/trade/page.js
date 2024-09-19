import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "../globals.css";

function Page() {
  return (
    <>
      <Box className="tradeandinvestment" mb={5} sx={{ backgroundColor: "#F5F5F5", padding: "20px" }}>
        <Container>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Trade and Investment
          </Typography>
          <Typography variant="h5" sx={{ color: "#9ad953" }}>
            NXTGEN broker and the right to development
          </Typography>
        </Container>
      </Box>

      <Container>
        <Box>
          <Typography variant="h6" sx={{ color: "#9ad953" }}>
            Sure! Trade and investment are fundamental concepts in economics and
            finance. Here’s a brief overview:
          </Typography>
          <Typography variant="h4" mt={5} sx={{ fontWeight: "bold" }}>
            Trade
          </Typography>
          <Typography className="paragraph">
            Trade involves the exchange of goods and services between entities,
            which can be individuals, companies, or countries. Trade can be
            classified into two main types:
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Domestic Trade:
            <span className="headingcolors">
              Transactions that occur within the same country.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            International Trade:
            <span className="headingcolors">
              Transactions that occur between different countries.
            </span>
          </Typography>
          <Typography variant="h5" mt={5} sx={{ fontWeight: "bold" }}>
            Key Aspects of Trade:
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Imports and Exports:
            <span className="headingcolors">
              Goods and services bought from and sold to other countries.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Trade Agreements:
            <span className="headingcolors">
              Treaties between countries that outline how trade will be
              conducted, including tariffs, quotas, and other trade regulations.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Balance of Trade:
            <span className="headingcolors">
              The difference between the value of a country’s exports and
              imports. A trade surplus occurs when exports exceed imports, while
              a trade deficit occurs when imports exceed exports.
            </span>
          </Typography>
        </Box>
        <Box mt={5}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Investment
          </Typography>
          <Typography className="paragraph">
            Investment refers to the allocation of resources, such as money,
            with the expectation of generating a profit or achieving future
            benefits. Investments can be made in various asset classes and
            sectors.
          </Typography>
          <Typography variant="h5" mt={5} sx={{ fontWeight: "bold" }}>
            Types of Investments:
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Stocks:
            <span className="headingcolors">
              Shares in a company that represent ownership and can provide
              dividends and capital gains.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Bonds:
            <span className="headingcolors">
              Debt securities issued by corporations or governments that pay
              interest over time.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Real Estate:
            <span className="headingcolors">
              Properties or land purchased for rental income or capital
              appreciation.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Mutual Funds and ETFs:
            <span className="headingcolors">
              Investment funds that pool money from multiple investors to invest
              in a diversified portfolio of assets.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Startups and Venture Capital:
            <span className="headingcolors">
              Investing in early-stage companies with high growth potential.
            </span>
          </Typography>
          <Typography variant="h5" mt={5} sx={{ fontWeight: "bold" }}>
            Investment Strategies:
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Long-Term Investing:
            <span className="headingcolors">
              Buying and holding assets for an extended period to benefit from
              long-term growth.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Short-Term Trading:
            <span className="headingcolors">
              Frequent buying and selling of assets to take advantage of
              short-term market movements.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Diversification:
            <span className="headingcolors">
              Spreading investments across various asset classes to reduce risk.
            </span>
          </Typography>

          <Typography variant="h5" mt={5} sx={{ fontWeight: "bold" }}>
            Risks and Rewards:
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Risk:
            <span className="headingcolors">
              The possibility of losing some or all of the invested capital.
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#003873" }}>
            Return:
            <span className="headingcolors">
              The profit earned from an investment. Higher potential returns
              often come with higher risk.
            </span>
          </Typography>

          <Typography variant="h5" mt={5}>
            If you have specific questions about trade, investment strategies,
            or anything related to these topics, feel free to ask!
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Page;

"use client";
import React from "react";
import "./servic.css";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  return (
    <>
      <section className="container">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: "#003873", fontWeight: "bold" }}
        >
          Feature & Facilities
        </Typography>
        <section className="card__container">
          <div className="card__bx" style={{ "--clr": "#89ec5b" }}>
            <div className="card__data">
              <div className="card__icon">
                <i className="fa-solid fa-paintbrush"></i>
              </div>
              <div className="card__content">
                <h3>Trade & Invest</h3>
                <p>
                  Empower your financial future with smart trading strategies
                  and diverse investment opportunities tailored to grow your
                  wealth
                </p>
                <a href="#" onClick={() => router.push("/trade")}>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="card__bx" style={{ "--clr": "#eb5ae5" }}>
            <div className="card__data">
              <div className="card__icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="card__content">
                <h3>Mutual Funds & SIP</h3>
                <p>
                  Optimize your savings with Mutual Funds and SIPs, offering a
                  disciplined approach to investing with potential for high
                  returns and diversification.
                </p>
                <a href="#" onClick={() => router.push("/mutualfunds")}>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="card__bx" style={{ "--clr": "#89ec5b" }}>
            <div className="card__data">
              <div className="card__icon">
                <i className="fa-solid fa-paintbrush"></i>
              </div>
              <div className="card__content">
                <h3>Insurance</h3>
                <p>
                  Empower your financial future with smart trading strategies
                  and diverse investment opportunities tailored to grow your
                  wealth
                </p>
                <a href="#" onClick={() => router.push("/insurance")}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Page;

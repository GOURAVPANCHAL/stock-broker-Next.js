"use client";
import React from "react";
import "../service/service.css";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const page = () => {
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
                <i className="fa-solid fa-chart-line"></i> {/* Changed icon */}
              </div>
              <div className="card__content">
                <Typography variant="h3">Trade & Invest</Typography>
                <Typography>
                  Empower your financial future with smart trading strategies
                  and diverse investment opportunities tailored to grow your
                  wealth.
                </Typography>
                <a onClick={() => router.push("/trade")}>Read More</a>
              </div>
            </div>
          </div>
          <div className="card__bx" style={{ "--clr": "#eb5ae5" }}>
            <div className="card__data">
              <div className="card__icon">
                <i className="fa-solid fa-cogs"></i> {/* Changed icon */}
              </div>
              <div className="card__content">
                <Typography variant="h3">Mutual Funds & SIP</Typography>
                <Typography>
                  Optimize your savings with Mutual Funds and SIPs, offering a
                  disciplined approach to investing with potential for high
                  returns and diversification.
                </Typography>
                <a onClick={() => router.push("/mutualfunds")}>Read More</a>
              </div>
            </div>
          </div>
          <div className="card__bx" style={{ "--clr": "#ff6f61" }}>
            <div className="card__data">
              <div className="card__icon">
                <i className="fa-solid fa-shield-alt"></i> {/* Changed icon */}
              </div>
              <div className="card__content">
                <Typography variant="h3">Insurance</Typography>
                <Typography>
                  Secure your future with our comprehensive insurance solutions.
                  From life and health to property and auto, we provide tailored
                  coverage to safeguard you and your loved ones.
                </Typography>
                <a onClick={() => router.push("/insurance")}>Read More</a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default page
// TradingViewWidget.jsx
"use client";
import { Container } from "@mui/material";
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "details": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <Container  className="sipgraph">
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "400px", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "400px", width: "100%" }}
        ></div>
      </div>
    </Container>
  );
}

export default memo(TradingViewWidget);

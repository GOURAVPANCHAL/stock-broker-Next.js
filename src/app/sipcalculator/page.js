"use client"
import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SIPCalculator = () => {
  const [investment, setInvestment] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [duration, setDuration] = useState('');
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState({});

  const calculateSIP = () => {
    const monthlyRate = rateOfReturn / 12 / 100;
    const months = duration * 12;
    const futureValue = investment * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
    setResult(futureValue.toFixed(2));

    // Generate data for the graph
    const labels = Array.from({ length: months }, (_, i) => i + 1);
    const data = labels.map((month) =>
      (investment * (((1 + monthlyRate) ** month - 1) / monthlyRate) * (1 + monthlyRate)).toFixed(2)
    );

    setChartData({
      labels: labels.map(label => `Month ${label}`),
      datasets: [
        {
          label: 'Investment Growth Over Time',
          data: data,
          borderColor: '#ff6f61',
          backgroundColor: 'rgba(255, 111, 97, 0.2)',
          borderWidth: 3,
          pointRadius: 4,
          pointBackgroundColor: '#ff6f61',
          pointBorderColor: '#ffffff',
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#ff8f81',
          fill: true,
          tension: 0.3, // Curved lines
        },
      ],
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: '16px', background: 'linear-gradient(145deg, #e0e0e0, #ffffff)', boxShadow: '10px 10px 20px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'var(--tradeHeading-color)' }}>
          SIP Calculator
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Monthly Investment"
                variant="outlined"
                fullWidth
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                InputProps={{ style: { fontSize: '1.2rem' } }}
                sx={{ background: '#f9f9f9', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Rate of Return (Annual %)"
                variant="outlined"
                fullWidth
                value={rateOfReturn}
                onChange={(e) => setRateOfReturn(e.target.value)}
                InputProps={{ style: { fontSize: '1.2rem' } }}
                sx={{ background: '#f9f9f9', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Investment Duration (Years)"
                variant="outlined"
                fullWidth
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                InputProps={{ style: { fontSize: '1.2rem' } }}
                sx={{ background: '#f9f9f9', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 4,
              p: 1.5,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              backgroundColor: 'var(--main-bg-color)',
              boxShadow: '0px 10px 15px rgba(154, 217, 83, 0.4)',
              '&:hover': {
                backgroundColor: '#86c847',
                boxShadow: '0px 15px 20px rgba(134, 200, 71, 0.6)',
              },
            }}
            onClick={calculateSIP}
          >
            Calculate
          </Button>
        </Box>
        {result && (
          <>
            <Card elevation={6} sx={{ mt: 5, p: 4, borderRadius: '12px', background: 'linear-gradient(145deg, #ffffff, #f3f3f3)' }}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'var(--tradeHeading-color)' }}>
                  Estimated Future Value
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h2" align="center" sx={{ fontWeight: 'bold', color: '#28a745', fontSize: '3rem' }}>
                  ₹ {result}
                </Typography>
                <Typography variant="subtitle1" align="center" sx={{ mt: 2, color: '#6c757d', fontStyle: 'italic' }}>
                  Based on your monthly investment of ₹{investment}, at an annual return rate of {rateOfReturn}%, over a period of {duration} years.
                </Typography>
              </CardContent>
            </Card>
            <Box sx={{ mt: 5, p: 2, backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
              <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', color: 'var(--tradeHeading-color)', mb: 3 }}>
                Investment Growth Over Time
              </Typography>
              <Line
                data={chartData}
                options={{
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top',
                      labels: {
                        color: '#ff6f61',
                        font: {
                          size: 14,
                        },
                      },
                    },
                    tooltip: {
                      backgroundColor: '#ff6f61',
                      titleFont: { size: 16 },
                      bodyFont: { size: 14 },
                      callbacks: {
                        label: (context) => `₹${context.raw}`,
                      },
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        color: '#6c757d',
                      },
                    },
                    y: {
                      grid: {
                        color: '#f3f3f3',
                      },
                      ticks: {
                        color: '#6c757d',
                        callback: (value) => `₹${value}`,
                      },
                    },
                  },
                }}
              />
            </Box>
          </>
        )}
      </Paper>
    </Container>





  );
};

export default SIPCalculator;

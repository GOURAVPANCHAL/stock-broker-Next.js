"use client"
import React from 'react';
import { Container, Grid, Typography, TextField, Button, IconButton, Paper, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Facebook, Twitter, Instagram, WhatsApp } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import Header from "../Header/page";
import Footer from "../Footer/page";
import "../globals.css"
import Link from 'next/link';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_fpov9gw', 'template_xc2bkvg', e.target, 'XUVn19ukgXJ6JwkkR')
          .then((result) => {
              toast.success("Send Successfully !!");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <>  <Header />
        <Box className="tradeandinvestment" mb={5}>
        <Container>
          <Typography variant="h2">
            <b>Contact</b>
          </Typography>
          <Typography variant="h5">
            NXTGEN broker and the right to development
          </Typography>
        </Container>
      </Box>
            <ToastContainer />
            <Container component="section" sx={{ py: 6, bgcolor: 'background.default' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Typography variant="h4" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Have questions or feedback? Feel free to reach out to us.
                            </Typography>
                            <Typography className='contactLinks' variant="body1" paragraph>
                                Email: <Link  href="mailto:vigazwood@gmail.com">vigazwood@gmail.com</Link>
                            </Typography>
                            <Typography className='contactLinks' variant="body1" paragraph>
                                Phone: <Link  href="tel:+919953091185">+91-9953091185</Link>, <Link  href="tel:+919716628415">+91-9716628415</Link>
                            </Typography>
                            <Typography className='contactLinks' variant="body1" paragraph>
                                Address: <Link  href="https://maps.app.goo.gl/ZKWJpaLf9GFd5SGe7" target="_blank" rel="noopener noreferrer">1/38, WHS Timber Market, Kirti Nagar, Delhi -110015</Link>
                            </Typography>
                            <div>
                                <IconButton href="#" color="primary"><Facebook /></IconButton>
                                <IconButton href="#" color="primary"><Twitter /></IconButton>
                                <IconButton href="#" color="primary"><Instagram /></IconButton>
                                <IconButton href="https://api.whatsapp.com/send?phone=919953091185" target="_blank" rel="noopener noreferrer" color="primary"><WhatsApp /></IconButton>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper component="form" onSubmit={sendEmail} sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <TextField label="Your Name" name="from_name" required margin="normal" variant="outlined" />
                            <TextField label="Your Email" name="email_from" type="email" required margin="normal" variant="outlined" />
                            <TextField label="Your Message" name="message" multiline rows={5} required margin="normal" variant="outlined" />
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                                Send Message
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7596364818637!2d77.1295738749569!3d28.636965183880445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033df49cd0c1%3A0x41feaa690bdeeba9!2sMadhav%20Tradelink!5e0!3m2!1sen!2sin!4v1714646482841!5m2!1sen!2sin"
                            width="100%" height="450" style={{ border: 0 }}
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;

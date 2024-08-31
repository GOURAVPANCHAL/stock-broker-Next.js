import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../globals.css";
const page = () => {
  return (
    <div>
      <Box className="tradeandinvestment" mb={5}>
        <Container>
          <Typography variant="h2">
            <b>Insurance</b>
          </Typography>
          <Typography variant="h5">
            NXTGEN broker and the right to development
          </Typography>
        </Container>
      </Box>
      <Container>
        <Box>
          <Typography variant="h6" style={{ color: "#9ad953" }}>
            It looks like you might be interested in insurance services.
            Insurance can cover a wide range of needs, including health, auto,
            home, life, and more. Here’s a brief overview of some common types:
          </Typography>
          <Typography variant="h1" mt={5}>
            <b>Health Insurance</b>
          </Typography>
          <Typography className="paragraph">
            Covers medical expenses for illnesses, injuries, and other
            health-related issues. This can include doctor visits, hospital
            stays, prescriptions, and sometimes preventive care.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" mt={5}>
            <b>Auto Insurance</b>
          </Typography>

          <Typography variant="h6" className="paragraph">
            Provides coverage for cars and drivers. It typically includes
            liability coverage (for damages or injuries you cause to others),
            collision coverage (for damage to your own vehicle), and
            comprehensive coverage (for non-collision-related incidents like
            theft or natural disasters).
          </Typography>
          <Typography variant="h5" mt={5}>
            <b>Home Insurance</b>
          </Typography>

          <Typography variant="h6" className="paragraph">
            Protects against damage to your home and belongings due to events
            like fire, theft, or natural disasters. It also often includes
            liability protection in case someone is injured on your property.
          </Typography>
          <Typography variant="h5" mt={5}>
            <b>Life Insurance</b>
          </Typography>

          <Typography variant="h6" className="paragraph">
            Offers financial support to beneficiaries in the event of the
            policyholder’s death. It can be used to cover living expenses,
            debts, or other financial needs of the family.
          </Typography>
          <Typography variant="h5" mt={5}>
            <b>Disability Insurance</b>
          </Typography>

          <Typography variant="h6" className="paragraph">
          Provides income replacement if you are unable to work due to illness or injury. This can be short-term or long-term, depending on the policy.

          </Typography>
          <Typography variant="h5" mt={5}>
            <b>Travel Insurance</b>
          </Typography>

          <Typography variant="h6" className="paragraph">
          Covers unexpected events while traveling, such as trip cancellations, lost luggage, or medical emergencies abroad.
          </Typography>
          <Typography variant="h5" mt={5}>
            <b>Business Insurance</b>
          </Typography>

          <Typography variant="h6" className="paragraph">
          Includes various types of coverage for businesses, such as general liability, property insurance, and workers’ compensation.

          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default page;

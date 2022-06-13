import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import classes from "./services.module.css";

const SERVICES_DATA = [
  {
    text:
      "Information about your service",
    heading: "Technology",
    path: "#more"
  },
  {
    text:
    "Information about your service",
    heading: "Trade - Import and Export",
    path: "#products-and-partnerships"
  },
  {
    text:
    "Information about your service",
    heading: "Ecommerce",
    path: "#online-store"
  },
  {
    text:
    "Information about your service",
    heading: "Agri-Food",
    path: "#more"
  }
];
const Services = () => {
  return (
    <Box
      as="section"
      id="services"
      sx={styles.services}
      className={classes.services}
    >
      <Container>
        <BlockTitle
          title="What We Do"
          text="This is what we do!"
        />
        <Grid sx={styles.grid} className={classes.title}>
          {SERVICES_DATA.map(({ text, heading, path }, index) => (
            <ServiceCard
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"]
  },
  grid: {
    gridGap: "40px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"]
  }
};

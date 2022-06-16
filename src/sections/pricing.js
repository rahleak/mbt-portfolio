import React, { useState } from "react";
import { keyframes } from "@emotion/core";
import { Box, Container, Grid, Button, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import PriceCard from "components/cards/price-card";
import fairTrade from "assets/ft.png";
import boxes from "assets/boxes.svg";
import handShake from "assets/hand-shake.svg";

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: "About Fair Trade",
    icon: fairTrade,
    amount: "29.99/mo",
    options: [
      {
        status: true,
        label:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc."
      }
    ]
  },
  {
    recommended: "",
    title: "Products From Our Fair Trade Partners",
    icon: boxes,
    amount: "49.99/mo",
    options: [
      {
        status: true,
        label: "Product #1"
      },
      {
        status: true,
        label: "Product #2"
      },
      {
        status: true,
        label: "Product #3"
      },
      {
        status: true,
        label: "Product #4"
      },
      {
        status: true,
        label: "Product #5"
      },
      {
        status: true,
        label: "Product #6"
      }
    ]
  }
];

const PRICE_YEARLY_DATA = [
  {
    recommended: null,
    title: "About Our Partnerships",
    icon: handShake,
    amount: "99.99/yr",
    options: [
      {
        status: true,
        label:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc."
      }
    ]
  }
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: "monthly",
    pricingPlan: PRICE_MONTHLY_DATA
  });

  const handlePlan = (plan) => {
    if (plan === "monthly") {
      setPlan({
        ...plan,
        active: "monthly",
        pricingPlan: PRICE_MONTHLY_DATA
      });
    }
    if (plan === "yearly") {
      setPlan({
        ...plan,
        active: "yearly",
        pricingPlan: PRICE_YEARLY_DATA
      });
    }
  };
  return (
    <Box as="section" sx={styles.pricing}>
      <Container id="products-and-partnerships">
        <BlockTitle title="Our Products and Partnerships" text="" />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan("monthly")}
            className={`${plan.active === "monthly" ? "active" : ""}`}
          >
            Products
          </Button>
          <Button
            onClick={() => handlePlan("yearly")}
            className={`${plan.active === "yearly" ? "active" : ""}`}
          >
            Partnerships
          </Button>
        </Box>
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ["20px", null, null, null, "200px", null, "240px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
  },
  btnWrap: {
    width: "302px",
    height: "60px",
    mt: ["-20px", null, null, "0px"],
    mb: ["40px", null, null, "60px"],
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    p: "7px",
    mx: "auto",
    button: {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "5px",
      color: "#0F2137",
      letterSpacing: "-0.24px",
      fontSize: "16px",
      fontWeight: 500,
      position: "relative",
      outline: "none",
      fontFamily: "DM Sans",
      transition: "all 500ms ease",
      "&.active": {
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
        backgroundColor: "#ffffff"
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)"
      }
    }
  },
  grid: {
    width: "100%",
    maxWidth: "960px",
    mx: ["auto"],
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`
      }
    }
  }
};

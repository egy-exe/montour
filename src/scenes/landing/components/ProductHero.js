import * as React from "react";
import Button from "../../../components/onepirate/Button";
// import Typography from "../../../components/onepirate/Typography";
import ProductHeroLayout from "../../../layouts/ProductHeroLayout";

const backgroundImage =
  "https://www.falstaff-travel.com/wp-content/uploads/2023/01/shutterstock_2040388133.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "bottom",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      {/* <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography> */}
      <Button
        color="primary"
        variant="contained"
        size="large"
        component="a"
        href="/"
        sx={{
          minWidth: 600,
          opacity: 0.6,
          backgroundColor: "white",
          color: "black",
        }}
      >
        Хайх...
      </Button>
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}

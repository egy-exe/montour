import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ProductHero from "./components/ProductHero";
import TopBar from "../../components/TopBar";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Landing() {
  return (
    <>
      {/* header */}
      <TopBar />
      <main>
        {/* Hero unit */}
        <ProductHero />
        <Container
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Typography sx={{ pt: 5 }} variant="h4" align="center">
            Санал болгох аялалууд
          </Typography>
        </Container>
        <Container sx={{ py: 5 }}>
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    width: 260,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  elevation={0}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                    sx={{ borderRadius: "50%", width: 170, height: 170 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ alignItems: "center" }}
                    >
                      Heading
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "#333333", p: 6 }} component="footer">
        <Typography variant="h6" color="#DDDDDD" align="center" gutterBottom>
          Montour
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#DDDDDD"
          component="p"
        >
          We love our users!
        </Typography>
        <Typography variant="body2" color="#DDDDDD" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            Montour
          </Link>{" "}
          2023
          {"."}
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}

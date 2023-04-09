import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
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
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    width: 200,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda voluptatum quod commodi quia eos, temporibus nam
                      quisquam.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Contact</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Montour
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We love our users!
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            Montour
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}

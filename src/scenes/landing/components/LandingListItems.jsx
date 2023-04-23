import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const LandingListItems = (props) => {
  console.log("orgil::::::::::::::::", props.cards);
  return (
    <>
      <Container
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Typography sx={{ pt: 5 }} variant="h4" align="center">
          {props.header}
        </Typography>
      </Container>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={5}>
          {props.cards.map((card, i) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Link href={card.link} underline="none">
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
                    image={`/assets/${card.image}`}
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
                      {card.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default LandingListItems;

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "../components/MKBox";
import MKTypography from "../components/MKTypography";
import MKButton from "../components/MKButton";

// Images

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function failfail() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Box component="img" src="/assets/logo.png" sx={{ height: 70 }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Work with an amazing design
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            opacity={0.8}
            mt={1}
            mb={3}
          >
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game
          </MKTypography>
          <MKButton
            color="default"
            sx={{ color: ({ palette: { dark } }) => dark.main }}
          >
            create account
          </MKButton>
          <MKTypography variant="h6" color="white" mt={8} mb={1}>
            Find us on
          </MKTypography>
          <MKBox display="flex" justifyContent="center" alignItems="center">
            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="#"
              mr={3}
            >
              <i className="fab fa-facebook" />
            </MKTypography>
            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="#"
              mr={3}
            >
              <i className="fab fa-instagram" />
            </MKTypography>
            <MKTypography
              component="a"
              variant="body1"
              color="white"
              href="#"
              mr={3}
            >
              <i className="fab fa-twitter" />
            </MKTypography>
            <MKTypography component="a" variant="body1" color="white" href="#">
              <i className="fab fa-google-plus" />
            </MKTypography>
          </MKBox>
        </Grid>
      </Container>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      ></Card>
      <MKBox pt={6} px={1} mt={6}>
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
      </MKBox>
    </>
  );
}

export default failfail;

import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box className="footer" component="footer" sx={{ p: 6 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Montour
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        We love our users!
      </Typography>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Montour
        </Link>{" "}
        2023
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;

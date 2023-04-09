import { AppBar, Box, Link, Toolbar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const rightIcon = {
  mr: 3,
  color: "black",
  height: 30,
  width: 30,
};

const TopBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/assets/logo.png"
          sx={{ height: 70, paddingLeft: 15 }}
        />
        <Link
          variant="h6"
          underline="none"
          href="/"
          sx={{ fontSize: 20, color: "#FF7E06", fontWeight: "bold" }}
        >
          {"Зочид буудал"}
        </Link>
        <Link
          variant="h6"
          underline="none"
          href="/"
          sx={{ fontSize: 20, color: "#FF7E06", fontWeight: "bold" }}
        >
          {"Амралтын газар"}
        </Link>
        <Link
          variant="h6"
          underline="none"
          href="/"
          sx={{ fontSize: 20, color: "#FF7E06", fontWeight: "bold" }}
        >
          {"Аялалын компани"}
        </Link>
        <Box>
          <PersonIcon sx={rightIcon} />
          <SearchIcon sx={rightIcon} />
          <LanguageIcon sx={rightIcon} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

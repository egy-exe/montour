import { AppBar, Box, Divider, Link, Toolbar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const rightIcon = {
  mr: 3,
  color: "black",
  height: 25,
  width: 25,
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
          sx={{ height: 65, paddingLeft: 12 }}
        />
        <Box
          sx={{
            justifyContent: "space-around",
            width: "45%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Link
            variant="h6"
            underline="none"
            href="/"
            sx={{ fontSize: 17, color: "#f05821", fontWeight: "bold" }}
          >
            {"Зочид буудал"}
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link
            variant="h6"
            underline="none"
            href="/"
            sx={{ fontSize: 17, color: "#f05821", fontWeight: "bold" }}
          >
            {"Амралтын газар"}
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link
            variant="h6"
            underline="none"
            href="/"
            sx={{ fontSize: 17, color: "#f05821", fontWeight: "bold" }}
          >
            {"Аялалын компани"}
          </Link>
        </Box>
        <Box>
          <SearchIcon sx={rightIcon} />
          <LanguageIcon sx={rightIcon} />
          <PersonIcon sx={rightIcon} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

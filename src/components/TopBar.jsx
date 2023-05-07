import { AppBar, Box, Button, Divider, Link, Toolbar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import LocaleContext from "../LocaleContext";
import i18n from "../utils/i18n";

const rightIcon = {
  mr: 3,
  color: "black",
  height: 25,
  width: 25,
};

const TopBar = () => {
  const { locale } = useContext(LocaleContext);
  const changeLocale = (l) => {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  };

  const { t } = useTranslation();

  return (
    <AppBar position="fixed" className="ww-100">
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
        <Link href="/">
          <Box
            component="img"
            src="/assets/logo.png"
            sx={{ height: 65, paddingLeft: 12 }}
          />
        </Link>
        <Box
          sx={{
            justifyContent: "space-around",
            width: "45%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Link
            className="top-bar"
            variant="h6"
            underline="none"
            href="/hotels"
          >
            {t("hotel", "Hotel")}
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link className="top-bar" variant="h6" underline="none" href="/">
            {t("resort", "Resort")}
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link className="top-bar" variant="h6" underline="none" href="/">
            {t("agency", "Agency")}
          </Link>
        </Box>
        <Box>
          <SearchIcon sx={rightIcon} />
          <LanguageIcon sx={rightIcon} />
          <Button onClick={changeLocale("en")}>EN</Button>
          <PersonIcon sx={rightIcon} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

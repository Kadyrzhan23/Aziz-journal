import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, InputLabel, Select } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

export default function Header2() {
  let selectedLanguage = window.localStorage.getItem('selectedLanguage');
  const [width, setWidth] = useState(window.innerWidth);
  const [lang, setLang] = useState(selectedLanguage !== null ? selectedLanguage : "ru");
  const { i18n, t } = useTranslation();
  const pages = [
    { name: t("linkHome"), path: "home" },
    { name: t("linkPosts"), path: "posts" },
    { name: t("linkAbout"), path: "about" },
    { name: t("linkContacts"), path: "contacts" },
  ];
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const langChange = (event) => {
    // console.log(event.target.value);
    const language = event.target.value;
    selectedLanguage = language
    window.localStorage.setItem("selectedLanguage",language)
    setLang(language);
    i18n.changeLanguage(language);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {width > 670 ? (
          <>
            {pages.map((page, index) => (
              <button
                className={styles.link}
                key={page}
                onClick={() => {
                  navigate(index === 0 ? "/" : `/${page.path}`);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name.toLocaleUpperCase()}
              </button>
            ))}
            {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">language</InputLabel>
              <Select
                defaultChecked={"ru"}
                label="language"
                value={lang}
                labelId="demo-select-small-label"
              >
                <MenuItem value={"ru"}>ru</MenuItem>
                <MenuItem value={"uz"}>uz</MenuItem>
                <MenuItem value={"uz"}>uz</MenuItem>
                <MenuItem value={"kz"}>kz</MenuItem>
              </Select>
            </FormControl> */}
            <span>
              <select onChange={langChange} value={lang}>
                <option value={"ru"}>ru</option>
                <option value={"en"}>en</option>
                <option value={"uz"}>uz</option>
                <option value={"kz"}>kz</option>
              </select>
            </span>
          </>
        ) : (
          <>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                color: "text.primary",
              }}
              className=""
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="red"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(index === 0 ? "/" : `/${page.path}`);
                    }}
                  >
                    <Typography textAlign="center">
                      {page.name.toUpperCase()}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <span className={styles.lang}>
              <select onChange={langChange} value={lang}>
                <option value={"ru"}>ru</option>
                <option value={"en"}>en</option>
                <option value={"uz"}>uz</option>
                <option value={"kz"}>kz</option>
              </select>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

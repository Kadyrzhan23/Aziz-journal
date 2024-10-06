import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/18n";
import { AnimatePresence, motion } from "framer-motion";
// import { Example } from "./burger/Example";

export default function Header2() {
  const { t } = useTranslation();
  let selectedLanguage = window.localStorage.getItem("selectedLanguage");
  const [activeIndex, setActive] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [lang, setLang] = useState(
    selectedLanguage !== null ? selectedLanguage : "ru"
  );
  const pages = [
    { name: t("linkHome"), path: "home" },
    { name: t("linkPosts"), path: "posts" },
    { name: t("linkAbout"), path: "about" },
    { name: t("linkContacts"), path: "contacts" },
  ];
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [setAnchorElUser] = React.useState(null);
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
    selectedLanguage = language;
    window.localStorage.setItem("selectedLanguage", language);
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
          <AnimatePresence>
            {
            pages.map((item, index) => (
              <NavItem
                key={item.name}
                item={item}
                isSelected={activeIndex === index}
                handleClick={() => setActive(index)}
              />
            ))}
            <button className="btn">{t("btnHeader")}</button>
            <span>
              <select onChange={langChange} value={lang}>
                <option value={"ru"}>ru</option>
                <option value={"en"}>en</option>
                <option value={"uz"}>uz</option>
                <option value={"kz"}>kz</option>
              </select>
            </span>
          </AnimatePresence>
        ) : (
          <>
          {/* <Example/> */}
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
            <button className="btn">{t("btnHeader")}</button>
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

function NavItem({ item, isSelected, handleClick }) {
  return (
    <motion.div
      onClick={handleClick}
      className={styles.navItem}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "#0056D6" : "#000" }}
    >
      {isSelected && <ActiveLine/>}
      {item.name.toUpperCase()}
    </motion.div>
  );
}

function ActiveLine() {
  return (
    <motion.div
      layoutId="activeItem"
      style={{
        width: "25px",
        height: "2px",
        position: "absolute",
        bottom: "8px",
        backgroundColor: "#0056D6",
      }}
    />
  );
}

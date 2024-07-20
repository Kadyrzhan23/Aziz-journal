import React from "react";
import styles from "./Layout.module.css";
import Header from "../header/Header2";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Header />
      {/* <CssBaseline />
      <Container maxWidth="xl" className="pt-4">
        <Box sx={{ bgcolor: "#cfe8fc", minHeight: "90vh" }}> */}
        <div className={styles.container}>
          <Outlet />
        </div>
        {/* </Box>
      </Container> */}
      <Footer />
    </>
  );
}

"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { FaClock } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Language as LanguageIcon } from "@mui/icons-material";

const info = [
  {
    icon: <FaClock size={20} />,
    title: "Sunday - Thursday 08:00 - 20:00",
    subTitle: "Friday and Saturday - CLOSED",
  },
  {
    icon: <BiSupport size={20} />,
    title: "+ 0800 2466 7921",
    subTitle: "Dr.Ahmed@example.com",
  },
  {
    icon: <MdLocationPin size={20} />,
    title: "34th Avenue",
    subTitle: "New York, W2 3XE",
  },
];

const navList = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/about" },
  { title: "SERVICES", link: "/services" },
  { title: "BLOG", link: "/blog" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* For larger screens (Desktop, Laptop) */}
      <AppBar
        position="static"
        color="default"
        sx={{
          display: { xs: "none", md: "block" },
          backgroundColor: "#fff",
        }}
      >
        {/* Top Bar with Logo and Info */}
        <Box component="header" sx={{ padding: "10px 70px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            {/* Logo Section */}
            <Grid item xs={6} sm={3}>
              <Link href="/" color="inherit" underline="none">
                <img
                  src="/images/logo.png"
                  alt="Your Company Logo"
                  style={{ height: "50px" }}
                />
              </Link>
            </Grid>

            {/* Info Section */}
            <Grid item xs={6} sm={9}>
              <Grid container justifyContent="flex-end" spacing={5}>
                {info.map((item, index) => (
                  <Grid item key={index}>
                    <Box display="flex" alignItems="start">
                      {item.icon}
                      <Box ml={2}>
                        <Typography variant="body1">{item.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.subTitle}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Divider />
        {/* Bottom Bar with Navigation */}
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              padding: "10px 46px",
            }}
          >
            <Box component="nav" sx={{ display: "flex", gap: "15px" }}>
              {navList.map((navItem, index) => (
                <Button key={index} href={navItem.link} color="inherit">
                  {navItem.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<LanguageIcon />}
              >
                Change Language
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#333" }}>
                Book Appointment
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* For smaller screens (Mobile) */}
      <AppBar
        position="static"
        color="default"
        sx={{ display: { xs: "block", md: "none" }, padding: "10px 20px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" color="inherit" underline="none">
            <img
              src="/images/logo.png"
              alt="Your Company Logo"
              style={{ height: "50px" }}
            />
          </Link>

          {/* Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 320 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <IconButton
            onClick={() => toggleDrawer(false)}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Navigation Links */}
          <List>
            {navList.map((navItem, index) => (
              <ListItem button component="a" href={navItem.link} key={index}>
                <ListItemText primary={navItem.title} />
              </ListItem>
            ))}
          </List>

          {/* Info inside Drawer on mobile */}
          <List>
            {info.map((item, index) => (
              <ListItem key={index}>
                <Box display="flex" alignItems="start">
                  {item.icon}
                  <Box ml={2}>
                    <Typography variant="body1">{item.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.subTitle}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            ))}

            {/* Language and Book Appointment Buttons */}
            <ListItem button sx={{ marginTop: 5 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#333" }}
                fullWidth
              >
                Book Appointment
              </Button>
            </ListItem>

            <ListItem button>
              <Button
                startIcon={<LanguageIcon />}
                variant="outlined"
                color="inherit"
                fullWidth
              >
                Change Language
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

"use client";

import React from "react";
import { Grid, Typography, Link, Box, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Image from "next/image"; // استخدم Image من Next.js عشان تحسين الأداء

const Footer = () => {
  return (
    <footer className="px-[20px] py-[50px] md:p-[70px] text-[#f4f4f5] bg-[#1c1c1e] ">
      <Grid container spacing={5} justifyContent="center">
        {/* Logo Section */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Image
            src="/images/light-logo.png" // مسار اللوجو
            alt="180 Degree Logo"
            width={150}
            height={50} // تأكد من ضبط الحجم حسب اللوجو
            style={styles.logo}
          />
        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            style={styles.heading}
          >
            About Us
          </Typography>
          <Typography variant="body2" color="textSecondary" style={styles.text}>
            We are a leading company in delivering top-notch services in the
            industry. Our mission is to provide quality, trust, and innovation
            in everything we do.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            style={styles.heading}
          >
            Quick Links
          </Typography>
          <Box component="nav" aria-label="footer navigation">
            <ul style={styles.ul}>
              <li>
                <Link href="/about" color="inherit" style={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" color="inherit" style={styles.link}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" style={styles.link}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" color="inherit" style={styles.link}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Box>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} sm={12}>
          <Box mt={3} display="flex" justifyContent="center">
            <Link
              href="https://facebook.com"
              color="inherit"
              aria-label="Facebook"
              target="_blank"
              rel="noopener"
              style={styles.iconLink}
            >
              <Facebook style={styles.icon} />
            </Link>
            <Link
              href="https://twitter.com"
              color="inherit"
              aria-label="Twitter"
              target="_blank"
              rel="noopener"
              style={styles.iconLink}
            >
              <Twitter style={styles.icon} />
            </Link>
            <Link
              href="https://instagram.com"
              color="inherit"
              aria-label="Instagram"
              target="_blank"
              rel="noopener"
              style={styles.iconLink}
            >
              <Instagram style={styles.icon} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider style={styles.divider} />

      {/* Copyright */}
      <Box mt={3} textAlign="center">
        <Typography variant="body2" color="textSecondary" style={styles.text}>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </Typography>
      </Box>
    </footer>
  );
};

const styles = {
  logo: {
    marginBottom: "20px", // شوية مساحة تحت اللوجو
  },
  heading: {
    color: "#f4f4f5", // لون العناوين
    fontWeight: "bold",
  },
  text: {
    color: "#b0b0b0", // لون النص الثانوي
  },
  link: {
    color: "#f4f4f5", // لون الروابط
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#50b7f5",
    },
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    lineHeight: "2.5",
  },
  icon: {
    fontSize: "28px",
    marginRight: "20px",
    color: "#f4f4f5",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#50b7f5",
    },
  },
  iconLink: {
    color: "#f4f4f5",
    "&:hover": {
      color: "#50b7f5",
    },
  },
  divider: {
    backgroundColor: "#444",
    marginTop: "30px",
  },
};

export default Footer;

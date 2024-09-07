import React from "react";
import { Grid, Paper, Typography, Avatar, Box } from "@mui/material";

const teamMembers = [
  {
    name: "John Doe",
    image: "/images/background.png", // Replace with actual image paths
  },
  {
    name: "Jane Smith",
    image: "/images/background.png",
  },
  {
    name: "Bob Johnson",
    image: "/images/background.png",
  },
  {
    name: "Alice Brown",
    image: "/images/background.png",
  },
];

const Team = () => {
  return (
    <section className="p-[24px] md:p-[70px]">
      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <div className="w-[70px] h-[2px] bg-[#3C3D37] mx-auto  mb-[32px] md:mb-[50px] " />
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid
            item
            xs={12} // On mobile: 1 per row
            sm={6} // On mobile: 2 per row
            md={3} // On desktop: 4 per row
            key={index}
          >
            <Box style={styles.paper}>
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 150, height: 150, marginBottom: 2 }}
              />
              <Typography variant="h6">{member.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

const styles = {
  paper: {
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    height: "100%",
  },
};

export default Team;

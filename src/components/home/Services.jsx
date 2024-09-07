import React from "react";
import { Box, Button, Stack, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function Services() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8]; // Example array for grid items

  return (
    <section className="p-[20px] md:p-[70px] flex flex-col-reverse lg:flex-row gap-5 bg-[#f9f9f9]">
      <Stack
        flex={4}
        sx={{
          border: "1px solid #ECDFCC",
          borderRadius: "15px",
          p: "24px",
        }}
      >
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid
              item
              xs={12} // 1 items per row on mobile (each takes 12/12 of the row)
              sm={6} // 2 items per row on desktop (each takes 6/12 of the row)
              md={3} // 4 items per row on desktop (each takes 3/12 of the row)
              key={index}
            >
              <Paper style={{ padding: "20px", textAlign: "center" }}>
                Item {item}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Box flex={1}>
        <Typography className="font-bold text-[20px]" component={"h2"}>
          WHAT 180 DEGREE PROVIDES
        </Typography>
        <Typography py={1} className="text-[16px]" component={"p"}>
          See who we are and <br className="hidden lg:block" /> what we do
        </Typography>
        <Button
          sx={{ color: "#3C3D37", borderColor: "#3C3D37", p: 0 }}
          //   variant="outlined"
          endIcon={<FaArrowRightLong />}
        >
          View More
        </Button>
      </Box>
    </section>
  );
}

export default Services;

import { Stack } from "@chakra-ui/react";
import { Button, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <section className="background-section">
      <Stack
        direction={"column"}
        spacing={16}
        className="background-content ml-[20px] md:ml-[300px]"
      ></Stack>
    </section>
  );
}

export default Hero;

import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

function About() {
  return (
    <section className="p-[20px] md:p-[70px] flex flex-col lg:flex-row gap-5">
      <Box flex={1}>
        <Typography className="font-bold text-[20px]" component={"h2"}>
          WHO WE ARE
        </Typography>
        <Typography py={1} className="text-[16px]" component={"p"}>
          See who we are and <br className="hidden lg:block" /> what we do
        </Typography>
        <Button
          sx={{ color: "#3C3D37", borderColor: "#3C3D37", p: 0 }}
          endIcon={<FaArrowRightLong />}
        >
          View More
        </Button>
      </Box>

      <Stack
        direction={"row"}
        flex={4}
        sx={{
          border: "1px solid #ECDFCC",
          borderRadius: "15px",
          p: "24px",
          gap: { md: 5 },
        }}
      >
        <div className="w-[200px] h-[300px] bg-[gray] rounded flex-[1] hidden lg:block relative">
          <div className="w-[100%] h-[100%] bg-[red] absolute top-[-50px] left-[-50px] rounded" />
        </div>
        <article className="lg:flex-[2]">
          <h3 className="font-bold  text-[18px] lg:text-[24px] mb-3">
            Heading Title
          </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose
          </p>
        </article>
      </Stack>
    </section>
  );
}

export default About;

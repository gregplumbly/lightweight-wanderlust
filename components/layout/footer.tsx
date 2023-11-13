import React from "react";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
    }}
  >
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        sx={{ mr: 1 }}
      >
        Parakeets AI, Weybridge, Surrey, UK
      </Typography>
    </Container>
  </Box>
);

export default Footer;

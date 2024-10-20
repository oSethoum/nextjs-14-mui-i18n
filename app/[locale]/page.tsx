import Image from "next/image";
import styles from "./page.module.css";
import { Box, TextField } from "@mui/material";

export default function Home() {
  return (
    <Box p={2}>
      <TextField placeholder="Enter your username" label="Username" />
    </Box>
  );
}

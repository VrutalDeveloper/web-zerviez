import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { headerStyles as styles } from "./HomeHeader.styles";

const HomeHeader: FC = (props) => (
  <Box {...props} sx={styles.container}>
    <Typography variant="h4">ZErviEZ</Typography>

    <Typography variant="subtitle1" sx={styles.subtitle}>
      Easy web services
    </Typography>
  </Box>
);

export default HomeHeader;

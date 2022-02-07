import { Box, BoxProps } from "@mui/material";
import { FC } from "react";
import { layoutStyles as styles } from "./Layout.styles";

const Layout: FC<BoxProps> = ({ sx, children }) => {
  const containerStyles = { ...styles.container, ...sx };

  return <Box sx={containerStyles}>{children}</Box>;
};

export default Layout;

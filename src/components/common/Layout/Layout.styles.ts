import { createNamedStyles } from "../../../utils/createNamedStyles";

export const layoutStyles = createNamedStyles({
  container: {
    maxWidth: (theme) => theme.breakpoints.values.xl,
    width: "100%",
    m: "0px auto",
  },
});

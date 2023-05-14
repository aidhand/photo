import { styled } from "@stitches/react";
import colors from "tailwindcss/colors";

export const Button = styled("button", {
  border: "1px solid",
  borderColor: colors.stone[500],
  "&:hover": {
    backgroundColor: colors.stone[100],
  },
});

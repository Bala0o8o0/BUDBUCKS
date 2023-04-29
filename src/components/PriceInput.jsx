import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BnbInput = styled("input")({
  fontSize: 24,
  color: "#00ff4a",
  fontWeight: 500,
  padding: "12px 90px 12px 16px",
  textAlign: "start",
  borderRadius: 10,
  border: "1px solid #00ff4a",
  background: "black",
  width: "100%",
  outline: "none",
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
    MozAppearance: "textfield",
  },
});

export default function PriceInput({ value, max, onChange = () => { } }) {
  return (
    <Box position="relative">
      <BnbInput
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Typography
        fontSize={20}
        position="absolute"
        top={16}
        right={19}
        fontWeight={200}
        color="#00ff4a"
      >
        MATIC
      </Typography>
    </Box>
  );
}

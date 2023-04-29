import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  backdropFilter: "blur(28px)", // Set the blur radius to 48px
  backgroundColor: "rgba(0, 0, 0, 0.1)",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 10,
  fontWeight: 300,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #00ff4a",
  background: "black",
  width: "100%",
  outline: "none",
  color: theme.palette.primary.main,
}));

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;

  return (
    <CardWrapper>
      <CardContent style={{ paddingLeft: 8, paddingRight: 8 }}>
        <Typography gutterBottom variant="h5" textAlign="center">
          Referral Link
        </Typography>
        <Input value={address ? link : ""} readOnly />
        <Typography
          textAlign="center"
          variant="body2"
          marginTop={2}
          paddingX={3}
        >
          Earn 12% of the MATIC used to Buy Bud  from anyone who uses your
          referral link
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}

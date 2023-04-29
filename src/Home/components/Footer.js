import Grid from "@mui/material/Grid";
import { config } from "../../config";
import esIcon from "../assets/ESIcon.png";
import tgIcon from "../assets/TGIcon.png";
import twIcon from "../assets/TWIcon.png";

export default function Footer() {
  return (
    <>
      <Grid container justifyContent="center" spacing={2} marginTop={12}>
        <Grid item>
          <a href={config.scanLink} target="__blank">
            <img src={esIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/" target="__blank">
            <img src={tgIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://twitter.com" target="__blank">
            <img src={twIcon} alt="" width={48} height={48} />
          </a>
        </Grid>
      </Grid>

      <footer style={{ textAlign: "center", marginTop: "24px" }}>
        <p style={{ fontWeight: "bold", color: "#00ff4a", fontFamily: "Audiowide" }}>2023 Bud Bucks All Rights Reserved Build With
          💚 By 0x👾BAl4</p>
      </footer>


    </>
  );
}

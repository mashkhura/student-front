import React from 'react'
import { Paper, Grid, Typography, Link } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Stack } from "@mui/system";
function Footer() {
  return (
    <Paper sx={{ backgroundColor: "common.black", width: "100%", padding: 1 }}>
        <Grid container style={{ minHeight: "18vh" }}>
            <Grid item md={12}>
                testtt
            </Grid>
            <Grid item md={12}>
            <Stack
            direction="row"
            gap={2}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Link href="#">
              <FacebookRoundedIcon
                sx={{ color: "common.white", fontSize: "50px" }}
              />
            </Link>
            <Link href="#">
              <InstagramIcon sx={{ color: "common.white", fontSize: "50px" }} />
            </Link>
          </Stack>
          <Stack
            direction="row"
            gap={1}
            pl="1rem"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            <CopyrightIcon sx={{ color: "common.white", fontSize: 10 }} />
            <Typography
              color="common.white"
              variant="subtitle2"
              sx={{ fontSize: 10 }}
            >
              {`${new Date().getFullYear()}  Student Vault`}
            </Typography>
          </Stack>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default Footer
import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Grid container gap={2} className={styles.topCardsContainer}>
        <Grid>
          <Paper className={styles.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={styles.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={styles.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={styles.dataCard}>xs=12</Paper>
      </Grid>
    </Box>
  );
};
export default Dashboard;

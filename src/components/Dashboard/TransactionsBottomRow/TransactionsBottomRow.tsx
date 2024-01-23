import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";
import styles from "./TransactionsBottomRow.module.css";

const TransactionsBottomRow = () => {
  return (
    <Grid container className={styles.bottomRow}>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionsBottomRow;

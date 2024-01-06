import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";
import styles from "./TransactionsBottomRow.module.css";

const TransactionsBottomRow = () => {
  return (
    <Grid container className={styles.bottomRow}>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionsBottomRow;

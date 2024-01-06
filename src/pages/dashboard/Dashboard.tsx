import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import styles from "./Dashboard.module.css";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionsBottomRow from "@/components/Dashboard/TransactionsBottomRow";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        {/* Data Ribbon - showing numerical stats */}
        <DataRibbon />
        {/* Transactions per day - graph - numerical cards */}
        <TransactionsPerDay />
      </Grid>
      {/* Transactions Doughnut Charts Bottom Row - a few doughnut charts to break down some data into fractions*/}
      <TransactionsBottomRow />
    </Box>
  );
};
export default Dashboard;

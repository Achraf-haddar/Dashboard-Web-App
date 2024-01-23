import React from "./index";
import { Grid } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard";
import styles from "./DataRibbon.module.css";

const DataRibbon = () => {
  return (
    <Grid container className={styles.dataRibbon}>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The totals of all the company products in the current financial year"
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DataCard
          title={"Total Value"}
          value={"$25,732.53"}
          description={"The total sales of the current financial year"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DataCard
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <DataCard
          title={"Conversion rate"}
          value={"0.61%"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;

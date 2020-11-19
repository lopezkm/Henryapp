import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";
export default function Loading() {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CircularProgress color="inherit" />
        <span style={{ display: "block", marginTop: "2rem" }}>Cargando</span>
      </div>
    </Backdrop>
  );
}

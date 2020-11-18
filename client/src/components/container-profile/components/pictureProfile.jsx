import React from "react";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fotos from "../../home/images/cin.jpg";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useStyles } from "../styles";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

export default function PictureProfile() {
  const classes = useStyles();
  const [values, setValues] = useState({
    shortDescription: "",
  });
  const [state, setState] = useState({
    editandoShort: false,
  });

  const startEditN = () => {
    setState({
      editandoShort: true,
    });
  };
  const stopEditN = () => {
    setState({
      editandoShort: false,
      pictureShow: false,
    });
  };
  const handleChange = (event) => {};

  return (
    <React.Fragment>
      <Avatar
        alt="Remy Sharp"
        src={Fotos}
        style={{
          width: "160px",
          height: "160px",
          border: "none",
          outline: "none",
          backgroundColor: "lightgray",
          position: "absolut",
        }}
      />
      <Typography>
        {state.editandoShort ? (
          <TextField
            onChange={(e) => handleChange(e)}
            name="name"
            value=""
            placeholder="Futura Desarrolladora"
          />
        ) : (
          "Futura Desarrolladora"
        )}
      </Typography>
      <div className="mt-3 d-flex justify-content-end">
        <Fab size="small" color="primary" aria-label="edit">
          <AddAPhotoIcon />
        </Fab>
        <Fab size="small" color="primary" aria-label="edit">
          <DeleteIcon />
        </Fab>
        {state.editandoShort ? (
          <Fab size="small" color="primary" aria-label="edit">
            <CheckIcon onClick={() => stopEditN()} />
          </Fab>
        ) : (
          <Fab size="small" color="primary" aria-label="edit">
            <EditIcon onClick={() => startEditN()} />
          </Fab>
        )}
      </div>
    </React.Fragment>
  );
}

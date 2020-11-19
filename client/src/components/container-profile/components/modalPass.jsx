import React from "react";
import { useStyles } from "../styles";

import Modal from "@material-ui/core/Modal";
import {
  FormControl,
  Grid,
  Button,
  TextField,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

export default function ModalPass({ handleClose }) {
  const classes = useStyles();

  return (
    <Modal className={classes.modalDisplay} onClose={handleClose}>
      <div className={classes.paperModal}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    </Modal>
  );
}

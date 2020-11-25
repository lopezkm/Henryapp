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
import Tooltip from "@material-ui/core/Tooltip";
import FileUpload from "../../container-uploadPhoto/apollo";

export default function PictureProfile({user}) {
  const [open, setOpen]=useState(false);
  const classes = useStyles();
  const [values, setValues] = useState({ shortDescription:"" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [state, setState] = useState({
    editandoShort: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      shortDescription: value,
    });
  };

  const startEditN = () => {
    setState({
      editandoShort: true,
    });
  };
  const stopEditN = () => {
    setState({
      editandoShort: false,
    });
  };
  function validate(values) {
    let errors = {};
    if (values.shortDescription.length > 15) {
      errors.shortDescription =
        "This field cannot have more than 15 characters";
    }
    return errors;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const valid = setErrors(validate(values));
    setIsSubmitting(true);
  };
  function submit() {
    console.log(values.shortDescription);
  }

  return (
    <React.Fragment>
      <Avatar
        className={classes.profileCenter}
        alt="Remy Sharp"
        src={imgUrl? imgUrl.src:Fotos}
        style={{
          width: "130px",
          height: "130px",
          border: "none",
          outline: "none",
          backgroundColor: "lightgray",
          position: "absolut",
        }}
      />
      <Typography className={classes.profileCenter}>
        {state.editandoShort ? (
          <TextField
            onChange={(e) => handleChange(e)}
            name="name"
            placeholder="Breve descripción"
          />
        ) : (
          user.user.shortDescription
        )}
      </Typography>
      <div className={classes.profileCenter}>
        <Fab
          size="small"
          color="primary"
          aria-label="edit"
          className={classes.profileButton}
        >
          <Tooltip title="Agregar foto" 
          onClick={()=>setOpen(true)}>
            <AddAPhotoIcon />
          </Tooltip>
        </Fab>
        <Fab
          size="small"
          color="primary"
          aria-label="edit"
          className={classes.profileButton}
        >
          <Tooltip title="Eliminar foto">
            <DeleteIcon />
          </Tooltip>
        </Fab>
        {state.editandoShort ? (
          <Fab size="small" color="primary" aria-label="edit">
            <Tooltip title="Enviar">
              <CheckIcon onClick={(e) => stopEditN()} />
            </Tooltip>
          </Fab>
        ) : (
          <Fab size="small" color="primary" aria-label="edit">
            <Tooltip title="Editar subtítulo">
              <EditIcon onClick={() => startEditN()} />
            </Tooltip>
          </Fab>
        )}
      </div>
      {open?<FileUpload setImgUrl={setImgUrl} setOpen={setOpen}/>:<></>}
    </React.Fragment>
  );
}

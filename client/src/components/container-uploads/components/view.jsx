import React from 'react';
import AcceptMaxFiles from "./fileUpload"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  hover,
  setHover,
  handleClose,
  uploadFile,
  data,
}) {
  return (
    <div>
   
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
              
      >
      
        <DialogTitle id="alert-dialog-slide-title">{"Deseas subir un archivo?"}</DialogTitle>
        <DialogContent>
        <AcceptMaxFiles
        hover={hover}
        setHover={setHover}
        uploadFile={uploadFile}
        data={data}
        >
  
     
        </AcceptMaxFiles>
        </DialogContent>
    
      </Dialog>
    
    </div>
  );
}
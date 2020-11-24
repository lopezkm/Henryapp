import React, { useState } from "react";
import View from "./components/view";
import { useSnackbar } from "notistack";

const Container = ({ abrir, uploadFile, data, setImgUrl }) => {
  const [open, setOpen] = useState(true);
  const [hover, setHover] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  if (data && data.imageUploader.src) {
    abrir(false);
    setImgUrl(data.imageUploader);
    enqueueSnackbar("Tu foto fue subida con éxito", {
      variant: "success",
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    abrir(false);
  };

  return (
    <div>
      <View
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        hover={hover}
        setHover={setHover}
        uploadFile={uploadFile}
        data={data}
      />
    </div>
  );
};
export default Container;

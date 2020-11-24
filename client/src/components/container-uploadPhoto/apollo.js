import React from "react";
import { useMutation, gql } from "@apollo/client";
import FileUploadContainer from "./container";

const UPLOAD_PHOTO = gql`
  mutation photoUpload($file: Upload!) {
    photoUpload(file: $file) {
      src
      thumbsrc
    }
  }
`;

export default function FileUpload({ setOpen }) {
  const [uploadFile, { data }] = useMutation(UPLOAD_PHOTO);

  return (
    <div>
      <FileUploadContainer
        abrir={setOpen}
        uploadFile={uploadFile}
        data={data}
      />
    </div>
  );
}

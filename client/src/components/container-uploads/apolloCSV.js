import React from "react";
import { useMutation, gql } from "@apollo/client";
import FileUploadContainer from "./container";

const UPLOAD_FILE = gql`
  mutation uploadCSV($file: Upload!) {
    uploadCSV(file: $file) {
      mailed
    }
  }
`;

export default function FileUpload({ setOpen }) {
  const [uploadFile, { data }] = useMutation(UPLOAD_FILE);

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

import React from "react";
import { useMutation, gql } from "@apollo/client";
import FileUploadContainer from "./container";

const UPLOAD_PHOTO = gql`
  mutation imageUploader($file: Upload!) {
    imageUploader(file: $file) {
      src
    }
  }
`;

export default function FileUpload({ setOpen, setImgUrl }) {
  const [uploadFile, { data }] = useMutation(UPLOAD_PHOTO);

  return (
    <div>
      <FileUploadContainer
        abrir={setOpen}
        uploadFile={uploadFile}
        data={data}
        setImgUrl={setImgUrl}
      />
    </div>
  );
}

/*{
    update: (cache, { data: { createCohort } }) => {
      cache.modify({
        fields: {
          cohorts(existingCohorts = []) {
            const newCohortRef = cache.writeFragment({
              data: createCohort,
              fragment: gql`
                fragment NewCohort on Cohort {
                  _id
                  name
                  startingDate
                }
              `,
            });
            return [...existingCohorts, newCohortRef];
          },
        },
      });
    },
  });*/

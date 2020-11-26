import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import LectureContainer from "./container.js";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Autorenew from "@material-ui/icons/Autorenew";
// import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "./stylesGeneral";

const GET_LECTURES = gql`
  query lectures {
    lectures {
        name
        embededLink
        description
        teoriaLink
    }
  }
`;

const CREATE_LECTURE = gql`
  mutation createLecture($name: String!, $embededLink: String!, $description: String!, $teoriaLink: String!) {
    createLecture(name: $name, embededLink: $embededLink, description: $description, teoriaLink: $teoriaLink) {
      name
      embededLink
      description
      teoriaLink
      _id
    }
  }
`;

export const LectureApollo = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_LECTURES);

  const [createLectureMutation] = useMutation(CREATE_LECTURE, {
    update: (cache, { data: { createLecture } }) => {
      cache.modify({
        fields: {
          lectures(existingLectures = []) {
            const newLectureRef = cache.writeFragment({
              data: createLecture,
              fragment: gql`
                fragment NewLecture on Lecture {
                  _id
                  name
                  embededLink
                  description
                  teoriaLink
                }
              `,
            });
            return [...existingLectures, newLectureRef];
          },
        },
      });
    },
  });

  if (loading)
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

  if (error) return "Error: Something went wrong!";

  const createNewLecture = (name, embededLink, description, teoriaLink) => {
    createLectureMutation({
      variables: {
        name,
        description,
        embededLink,
        teoriaLink
      },
      optimisticResponse: {
        _id: `optimisticId_${Date.now()}`,
        name,
        embededLink,
        description,
        teoriaLink
      },
    });
  };

  return (
    <LectureContainer lectures={data.lectures} createNewLecture={createNewLecture} />
  );
};

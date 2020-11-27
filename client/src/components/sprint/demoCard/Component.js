/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export const Component = (props) => (
  <Card className={"MuiNewsCard--02"}>
    <CardMedia
      component={"img"}
      className={"MuiCardMedia-root"}
      src={
        "https://www.infobae.com/new-resizer/wNewuFFPsDff-YIQk-Y1poh_Ugg=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/13164503/inteligencia-artificial.jpg"
      }
    />
    <CardContent className={"MuiCardContent-root"}>
      <Typography
        className={"MuiTypography--heading"}
        color={"inherit"}
        variant={"h3"}
        gutterBottom
      >
        {props.name}
      </Typography>
      <Typography className={"MuiTypography--subheading"} color={"inherit"}>
        {props.description}
      </Typography>
      <Typography className={"MuiTypography--subheading"} color={"inherit"}>
        Duración: {props.duration}
      </Typography>
      <Typography
        className={"MuiTypography--explore"}
        color={"inherit"}
        variant={"caption"}
      >
      </Typography>
    </CardContent>
  </Card>
);

Component.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiNewsCard--02": {
        maxWidth: 304,
        margin: "auto",
        position: "relative",
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        boxShadow: "0 16px 40px -12.125px rgba(0,0,0,0.3)",
        borderRadius: 0,
        "&:hover": {
          "& .MuiTypography--explore": {
            transform: "scale(1.2)"
          }
        },
        "& button": {
          marginLeft: 0
        },
        "& .MuiCardMedia-root": {
          height: "100%"
        },
        "& .MuiCardContent-root": {
          position: "absolute",
          bottom: 0,
          padding: muiBaseTheme.spacing.unit * 3,
          color: muiBaseTheme.palette.common.white,
          textAlign: "center",
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
            letterSpacing: 0.5,
            marginBottom: "40%"
          },
          "& .MuiTypography--explore": {
            marginBottom: 16,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            letterSpacing: 2
          }
        }
      }
    }
  }
});
Component.metadata = {
  name: "News Card II",
  description: "Best for Blog"
};

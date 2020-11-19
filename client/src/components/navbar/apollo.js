import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import NavBar from "./navbar";

const GET_PROFILE = gql`
  query me{
    me{
      inscriptionDate
      name
      lastname
      email
      rol 
      title
      shortDescription
      description
      gitHubLink
      link
    }
  }
`;

export const NavbarApollo = () => {

 const { loading, error, data } = useQuery(GET_PROFILE);
 console.log("Mi data en apollo", data.me);
 return (
    <NavBar user={data.me} />
 )

}
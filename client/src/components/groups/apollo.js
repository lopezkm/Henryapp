import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import GroupsContainer from "./container";

const LIST_COHORTS = gql`
  query cohorts { 
      cohorts {
          name
          startingDate
          users {
              _id
              name
            }
        }
  }
`;

const CREATE_GROUP=gql`
mutation createGroup($name:String!, $PM:String!){
  createGroup(name:$name, PM:$PM){
    name
    PM
  }
}
`;


const LIST_GROUPS= gql`
query groups { 
    groups {
        name
        PM
        _id
      }
}
`;

const ADD_GROUP_COHORT=gql`
mutation addGroupToCohort($cohortId:String!, $groupId:String!){
  addGroupToCohort (cohortId: $cohortId, groupId: $groupId){
    name
    _id
  }
}
`;


export const GroupsApollo = () => {
    const {data: cohorts, error: cohortsQueryError, loading: cohortsQueryLoading}= useQuery(LIST_COHORTS);
   
    const {data: groups, error: groupsQueryError, loading: groupsQueryLoading}=useQuery(LIST_GROUPS);

    const [createGroupMutation ]= useMutation(CREATE_GROUP, {
      refetchQueries: [
        {query: LIST_GROUPS}
      ]
    })

    // const [createGroupMutation ]= useMutation(CREATE_GROUP, {
    //   update(cache, {data: {createGroupMutation} }) {
    //     const newGroupFromResponse= createGroupMutation
    //     const existingGroups= cache.readQuery({query: LIST_GROUPS,
    //     });
    //     if (existingGroups && newGroupFromResponse){
    //       cache.writeQuery({
    //         query: LIST_GROUPS,
    //         data: {
    //           groups: [
    //             ...existingGroups,
    //             newGroupFromResponse,
    //           ],
    //         },
    //       });
    //     }
    //   }
    // }
    // )
    
    // const [createGroupMutation]= useMutation(CREATE_GROUP, {
    //   update(cache, { data: { createGroupMutation } })  {
    //     cache.modify({
    //       fields: {
    //         groups(existingGroupRefs = [], { readField }) {
    //           const newGroupRef = cache.writeFragment({
    //             data: createGroupMutation,
    //             fragment: gql`
    //               fragment NewGroup on Group {
    //                 name
    //                 PM
    //               }
    //             `,
    //           });
    //           return [...existingGroupRefs, newGroupRef];
    //         },
    //       },
    //     });
    //   },
    // });

    if(cohortsQueryLoading) {
        console.log('cargando');
    } else if(cohortsQueryError) {
        console.log('ocurrió un error');
    } else {
       const response = cohorts.cohorts;
        console.log(response);
    }

    if(groupsQueryLoading) {
      console.log('cargando response2');
  } else if(groupsQueryError) {
      console.log('ocurrió un error en la response2');
  } else {
     const listgroups = groups;
      console.log(listgroups);
  }

    const createNewGroup = (name, PM) => {
      console.log(name);
      console.log(PM);
      createGroupMutation({
        variables: {
          name,
          PM
        },
        optimisticResponse: {
          _id: `optimisticId_${Date.now()}`,
          name,
          PM
        },
      });
    };

  return (
    <GroupsContainer
    response={cohorts && cohorts.cohorts}
    createNewGroup= {createNewGroup}
    listgroups={groups && groups.groups}
    />
  );
};

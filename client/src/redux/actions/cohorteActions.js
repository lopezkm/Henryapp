import {
    GET_COHORT,
    GET_COHORTS,
    CREATE_COHORT,
    DELETE_COHORT
}
from "./actionTypes";
//import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const getCohorts= (dispatch)=> {

    gql `{
        {
            cohorts {
                startingDate
                name
            }
        }
    }`
    .then(()=> {
        dispatch({
            
        })
    })
} 

export const getCohort= gql `{

}`

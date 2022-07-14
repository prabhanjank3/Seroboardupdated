import axios from "axios";
import { getNextSunday } from "utils/commonfunctions"
import { getDateInFormat, getMonday } from "utils/commonfunctions"

const setStartDateAC = (d) => {
    return {
        type: "SET_STARTDATE",
        payload:{
            startdate:d
        }
    }
}
const setCloseDateAC = (d) => {
    return {
        type: "SET_CLOSEDATE",
        payload:{
            closeDate:d
        }
    }
}
const setDataAC = (data) => {
    return {
        type: "SET_DATA",
        payload:{
            data:data
        }
    }
}
const setLoadingOnAC = () => {
    return {type:"LOADING_ON"};
}
const setLodingOffAC = () => {
    return {type: "LOADING_OFF"};
}
export const setStartDate = (startdate) => {
        return function (dispatch){
            dispatch(setStartDateAC(startdate))
        }
}
export const setCloseDate = (closedate) => {
    return function (dispatch) {
        dispatch(setCloseDateAC(closedate))
    }
}
export const setData = (data) => {
    return function (dispatch){
        dispatch(setDataAC(data))
    }
}
export const loadInitialData = () => {
    return function (dispatch){
    dispatch(setLoadingOnAC());
    axios.get('http://localhost:3004'+'/dashboard').then(resp => {
        dispatch(setData(resp.data));
    }).then(() => {
        dispatch(setLodingOffAC());
    })
    }
}
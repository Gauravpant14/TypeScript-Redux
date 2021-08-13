import { Action } from '../Action/index';
import axios from 'axios'
import { ActionType } from '../Action-types/index'
import { Dispatch } from 'redux'

export const fetchAllPostRequest = () => {
    return {
        type: ActionType.POSTPENDING
    }
}

export const fetchAllPostSuccess = (data: any) => {
    return {
        type: ActionType.GETALLPOST,
        payload : data,
    }
}

export const fetchAllPostErr = (error: string) => {
    return {
        type: ActionType.POSTERR,
        payload : error,
    }
}



export const getAllData = () => {
    return async(dispatch: Dispatch<Action>) => {
        dispatch(fetchAllPostRequest())
        try{
        const response = await axios.get("http://localhost:5000/allpost/",{
            headers: {
              authorization: localStorage.getItem('auth'),
            },
          })    
        console.log(response)
        dispatch(fetchAllPostSuccess(response.data))    
        }
        catch (error){
            console.log(error)
        }

    }
}
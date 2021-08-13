import { ActionType } from './../Action-types/index';
import { Action } from '../Action/index';
import axios from 'axios'
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

export const deletePostSuccess = (data:any) => {
    return {
        type: ActionType.DELETE_POST_SUCCESS,
        payload: data,
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

export const deletePost = (id: any) => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            const res = await axios.delete(`http://localhost:5000/allpost/${id}`)
            if(res.status === 200){
              alert(res.data.message)
              dispatch(deletePostSuccess(id))
            }
            if(res.status === 404){
              
            }
            
        }
        catch(error){
            alert(error);
        }
    }
}
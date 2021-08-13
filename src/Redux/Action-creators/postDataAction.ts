import { Action } from './../Action/index';
import axios from 'axios'
import { ActionType } from '../Action-types/index'
import { Dispatch } from 'redux'

export const postDataReq = () => {
    return {
        type: ActionType.POST_DATA_REQUEST
    }
}

export const postDataSuccess = (data: any) => {
    return {
        type: ActionType.POST_DATA_SUCCESS,
        payload: data
    }
}

export const postDataFailure = (error: string) => {
    return {
        type: ActionType.POST_DATA_FAILURE,
        payload: error
    }
}

export const postUserData = (data:any) => {
    console.log(data,"data in post action")
    return async(dispatch : Dispatch<Action>) => {
        dispatch(postDataReq());
        try {
          const response = await axios.post(
            "http://localhost:5000/createpost",
            data,
            {
              headers: {
                authorization: localStorage.getItem("auth"),
              },
            }
          );
          console.log(response, "response from create post api ====>");
    
          if (response.status === 200) {
            alert("Succesfully Posted");
          }
    
          //   toast.success(response.data.message);
          //   history.push("/login");
        } catch (error) {
          console.log(error.response, " resonse from error");
          //   toast.error(error.response.data.error);
          // dispatch(fetchDataFailure(error));
        }
    }
}
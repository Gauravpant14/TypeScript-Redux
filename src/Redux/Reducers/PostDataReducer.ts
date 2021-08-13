import { Action } from "../Action"
import { ActionType } from './../Action-types/index';
export interface stateType {
    loading : boolean
    postedData: string
    error: string
}


const intialState = {
    loading : false,
    postedData: '',
    error:'',

}

const PostDataReducer = (state: stateType = intialState, action: Action) => {
    switch(action.type){
        case ActionType.POST_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionType.POST_DATA_SUCCESS:
            return {
                loading: false,
                postedData: action.payload,
                error:null
            }
        case ActionType.POST_DATA_FAILURE:
            return {
                loading: false,
                postedData:null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default PostDataReducer
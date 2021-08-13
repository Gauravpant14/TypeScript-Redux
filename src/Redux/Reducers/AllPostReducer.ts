import { ActionType } from './../Action-types/index';
import { Action } from "../Action"

export interface stateType {
    loading : boolean
    posts: postType[]
    error: string
}

export interface postType {
    body: string
    _id: any
    title: string
    userId: number
}

const intialState = {
    loading : false,
    posts: [],
    error:'',

}

const AllPostReducer = (state: stateType = intialState, action: Action) => {
    switch (action.type){
        case ActionType.GETALLPOST:
            return {
                loading: false,
                posts: action.payload,
                error: null,
            }
        case ActionType.POSTPENDING:
            return {
                ...state,
                loading : true
            }  
        case ActionType.POSTERR:
            return {
                loading: false,
                posts: null,
                error: action.payload,
            }
        case ActionType.DELETE_POST_SUCCESS:
            return{
                posts : state.posts.filter((e) => e._id !== action.payload)
            }          
        default:
            return state;
    }
}

export default AllPostReducer;
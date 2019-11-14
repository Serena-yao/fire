import {govList} from '../services'
export default {
    namespace:'gov',
    state:{
        list:[],
        type:'',
        info:{}
    },
    effects:{
        *getGovList({payload},{call,put}){
            let res=yield call(govList,1,2);
            yield put({
                type:'changeList',
                payload:res.data.list
            })
        }
    },
    reducers:{
        changeList(state,{payload}){
            return {...state,list:payload}
        },
        goDetail(state,{payload}){
            let {type, info} = payload;
            return {...state, type, info}
        }
    }
}
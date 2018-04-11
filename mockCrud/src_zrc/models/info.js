import Methods from '../services/info'
const { searchInfoList,addInfoFunc,deleteInfoFunc,updateInfoFunc } = Methods
export default {
  namespace: 'info',

  state: {
    infoList: [],
    isShowAddModel:false,
    isShowUpdateModel:false,
    user:{
      id:0,
      name:"",
      categoryName:""
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({type: 'searchInfo'})
    },
  },
  effects: {
    * searchInfo(payload, { call, put, select }) {
      let infoList = yield call(searchInfoList)
      yield put({ type: 'setData', payload: { infoList,isShowModel:false } })
    },
    * addInfo(payload, { call, put, select }) {
     let userinfo = yield select(state=>state.info)
     let user =userinfo.user
      yield call(addInfoFunc,{user})
      yield put({ type: 'searchInfo'})
      yield put({ type: 'setData',payload:{isShowAddModel:payload.isShowAddModel}})
    },
    * deleteInfo(payload, { call, put, select }) {
      let {id} = payload
  
      yield call(deleteInfoFunc,{id})
      yield put({ type: 'searchInfo'})
    },
    * updateInfo(payload, { call, put, select }) {
      let userinfo = yield select(state=>state.info)
      let user =userinfo.user
      yield call(updateInfoFunc,{user})
      yield put({ type: 'searchInfo'})
      yield put({ type: 'setData',payload:{isShowUpdateModel:false}})
    },


  },
  reducers: {
    setData(state, { payload }) {
      return { ...state, ...payload };
    },

  },

} 
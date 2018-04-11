import { routerRedux } from 'dva/router';
import git from '../services/git';

export default {
  namespace: 'mainpage',
  state: {
    dataSource: [],
    user: {
      id: '',
      name: '',
      categoryName: ''
    }
  },
  subscriptions: {
    init({ dispatch }) {
      dispatch({ type: 'seek' })
    },
  },
  effects: {
    // 查找
    *seek(payload, { call, put }) {
      console.log('跳转到查找')
      const pack = yield call(git.seekList)
      const { content, totalPages } = pack
      console.log('查找的结果1', content, '3', totalPages)
      //   yield put(routerRedux.push('/'))
      yield put({
        type: 'setseek',
        payload: {
          dataSource: content, totalPages
        }
      })
    },
    // 跳转到添加页面
    *addBu(payload, { put }) {
      yield put(routerRedux.push('/add'))
    },
    // 跳转到修改页面
    *updatepage(payload, { put }) {
      console.log('跳转修改页面')
      const { user } = payload
      console.log(user)
      yield put({ type: 'updateuser', user })
      yield put(routerRedux.push('/update'))
    },
    // 删除
    *deleteFu(payload, { call, put }) {
      console.log('models-service之前')
      yield call(git.deleteData, payload)
      //   const pac = yield call(git.seekList)
      //   const { content, totalPages } = pac
      //   console.log('ertyui98765', content, totalPages)
      yield put({ type: 'seek' })
    },
    // 修改
    *updateFu(payload, { call, put }) {
      const { user } = payload
      console.log('修改', user)
      yield call(git.updateData, { user })
      yield put(routerRedux.push('/'))
      yield put({ type: 'seek' })
    },
    // 添加
    *addInfo(payload, { call, put }) {
      const { user } = payload
      yield call(git.addData, {user})
      yield put(routerRedux.push('/'))
      yield put({ type: 'seek' })
    }

  },
  reducers: {
    setseek(state, { payload }) {
      return { ...state, ...payload };
    },
    updateuser(state, { user }) {
      return { ...state, user }
    }
  },
}

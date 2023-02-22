# react中的redux
redux是一个状态管理工具库

::: code-group
```ts [main.ts]
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

```ts [./store/index.ts]
import { configureStore } from '@reduxjs/toolkit' //因为官方推荐使用toolkit
import counterReducer from './modules/counter'
export const store=configureStore({ // configureStore类似createStore     
  reducer:counterReducer            //原来需要使用combineReducers合并reducers
                                    //还需要使用applyMiddleware 添加thunk来处理异步函数
})
```

```ts [./store/modules/counter.ts]
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
export const counterSlice=createSlice({  
  name:'counter',
  initialState:{
    value: 0,
    data:[]
  },
  reducers:{
      increment(state,action){
         state.value+=action.payload
      }
  },
  extraReducers(builder){
      builder.addCase(fetchUsers.fulfilled,(state, action)=>{
          state.data = action.payload
      })    //监听请求成功
      builder.addCase(fetchUsers.rejected, (state, action) => {
    }) //监听请求失败
  }
})


//创建异步函数
export const fetchUsers = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('xxxx/api/xxx')
  return response.json()
})

export default counterSlice.reducer
```

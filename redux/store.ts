
import { configureStore } from '@reduxjs/toolkit'
import navDropdownReducer from './slices/navDropdownSlice'

export const store = configureStore({
  reducer: {
    navDropdown: navDropdownReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type : {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

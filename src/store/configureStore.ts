import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post";
import editPostSlice from "./editPost";
import modalSlice from "./modal";
import noteSlice from "./note";
import api from "./middleware/api";
import error from "./middleware/error";

export const store = configureStore({
  reducer: {
    post: postSlice,
    editPost: editPostSlice,
    modal: modalSlice,
    note: noteSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

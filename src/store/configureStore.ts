import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post/post";
import modalSlice from "./modal";
import noteSlice from "./note";
import api from "./middleware/api";
import error from "./middleware/error";
import categorySlice from "./category";
import writeEditFormSlice from "./post/PostWriteEditFormSlice";
import authSlice from "./auth";
import pageSlice from "./post/pageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    writeEditForm: writeEditFormSlice,
    modal: modalSlice,
    note: noteSlice,
    category: categorySlice,
    postPage: pageSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post/post";
import modalSlice from "./modal";
import noteSlice from "./note";
import api from "./middleware/api";
import error from "./middleware/error";
import categorySlice from "./category";
import writeEditFormSlice from "./post/PostWriteEditFormSlice";

export const store = configureStore({
  reducer: {
    post: postSlice,
    writeEditForm: writeEditFormSlice,
    modal: modalSlice,
    note: noteSlice,
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

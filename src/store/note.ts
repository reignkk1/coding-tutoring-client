import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { INote } from "../api/note";

//index signature
type ObjType = {
  [index: string]: any;
  sent: INote[];
  received: INote[];
};

const note: ObjType = {
  sent: [] as INote[],
  received: [] as INote[],
};

const initialState = {
  notes: note,
  loading: false,
  error: null,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      state.loading = false;
    },
    getNotes: (state, { payload: { category, data } }) => {
      if (category === "sent") {
        state.notes.sent = data;
      } else {
        state.notes.received = data;
      }

      state.loading = false;
    },
    addNote: (state, { payload: { category, data } }) => {
      // state.notes.push(action.payload);
      if (category === "sent") {
        state.notes.sent.push = data;
      } else {
        state.notes.received.push = data;
      }
    },
    // removeNote: (state, action) => {
    //   const index = state.notes.findIndex(
    //     (note: any) => note.id === action.payload
    //   );
    //   state.notes.splice(index, 1);
    // },
  },
});

export const { apiRequested, apiRequestFailed, getNotes, addNote } =
  noteSlice.actions;
export default noteSlice.reducer;

export const loadNotes = (category: string) =>
  apiCallBegan({
    url: `/v1/messages/${category}`,
    onStart: apiRequested.type,
    category: category,
    onSuccess: getNotes.type,
    onError: apiRequestFailed.type,
  });

export const addNewNote = (category: string, note: INote) =>
  apiCallBegan({
    url: `/v1/message`,
    method: "POST",
    category: category,
    data: note,
    onSuccess: addNote.type,
  });

// export const deleteNote = (category: string, noteId: string) =>
//   apiCallBegan({
//     url: `/v1/message/${category}/${noteId}`,
//     method: "DELETE",
//     data: noteId,
//     onSuccess: removeNote.type,
//   });

import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

export interface INote {
  title: string;
  content: string;
  messageId?: string;
  receiverId: string;
  receiverNickname: string;
  senderId: string;
  senderNickname: string;
}

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
      state.notes[category].push(data);
    },
    removeNote: (state, { payload: { category, data } }) => {
      const index = state.notes[category].findIndex(
        (note: any) => note.messageId === data
      );
      state.notes[category].splice(index, 1);
    },
  },
});

export const { apiRequested, apiRequestFailed, getNotes, removeNote, addNote } =
  noteSlice.actions;
export default noteSlice.reducer;

export const loadNotes = (category: string) =>
  apiCallBegan({
    url: `/v1/messages/${category}`,
    method: "GET",
    category: category,
    onStart: apiRequested.type,
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

export const deleteNote = (category: string, noteId: string) =>
  apiCallBegan({
    url: `/v1/message/${category}/${noteId}`,
    method: "DELETE",
    category: category,
    data: noteId,
    onSuccess: removeNote.type,
  });

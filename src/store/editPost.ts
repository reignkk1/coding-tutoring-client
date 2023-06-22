import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  onOrOff?: string;
  subject?: string;
  area?: string;
  title: string;
  desiredSubjects?: string[];
  content: string;
}

const initialState: IState = {
  onOrOff: "ONLINE",
  subject: "JAVASCRIPT",
  area: "",
  title: "",
  desiredSubjects: [],
  content: "",
};

const editPostSlice = createSlice({
  name: "editPost",
  initialState,
  reducers: {
    setEdit: (state, action) => {
      return { ...state, ...action.payload };
    },
    editOnOff: (state, action) => {
      state.onOrOff = action.payload;
    },
    editSubject: (state, action) => {
      state.subject = action.payload;
    },
    editArea: (state, action) => {
      state.area = action.payload;
    },
    editTitle: (state, action) => {
      state.title = action.payload;
    },

    editDesiredSubjects: (state, action) => {
      state.desiredSubjects = action.payload;
    },
    editContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const {
  setEdit,
  editArea,
  editContent,
  editDesiredSubjects,
  editOnOff,
  editSubject,
  editTitle,
} = editPostSlice.actions;
export default editPostSlice;

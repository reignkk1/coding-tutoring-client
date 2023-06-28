import { createSlice } from "@reduxjs/toolkit";
export interface IWriteEditForm {
  onOrOff?: string;
  subject?: string;
  area?: string;
  title: string;
  desiredSubjects?: string[];
  content: string;
}
const initialState: IWriteEditForm = {
  onOrOff: "ONLINE",
  subject: "JAVASCRIPT",
  area: "",
  title: "",
  desiredSubjects: [],
  content: "",
};

const writeEditFormSlice = createSlice({
  name: "writeEditForm",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state = action.payload;
    },
    setOnOff: (state, action) => {
      state.onOrOff = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    setArea: (state, action) => {
      state.area = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setDesiredSubjects: (state, action) => {
      state.desiredSubjects = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const {
  setArea,
  setContent,
  setDesiredSubjects,
  setInitialState,
  setOnOff,
  setSubject,
  setTitle,
} = writeEditFormSlice.actions;

export default writeEditFormSlice.reducer;

import { combineReducers } from "redux";

import modal from "./modal";
import write from "./write";
import post from "./post";
import edit from "./edit";

const rootReducer = combineReducers({ write, modal, post, edit });

export type ReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;

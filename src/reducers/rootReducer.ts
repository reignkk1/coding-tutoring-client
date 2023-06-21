import { combineReducers } from "redux";

import modal from "./modal";
import writeEdit from "./writeEdit";
import post from "./post";

const rootReducer = combineReducers({ writeEdit, modal, post });

export type ReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;

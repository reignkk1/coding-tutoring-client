import { combineReducers } from "redux";

import modal from "./modal";
import writeEdit from "./writeEdit";

const rootReducer = combineReducers({ writeEdit, modal });

export type ReducerState = ReturnType<typeof rootReducer>;

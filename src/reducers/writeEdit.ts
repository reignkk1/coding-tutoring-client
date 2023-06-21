export interface IState {
  onOrOff?: string;
  subject?: string;
  area?: string;
  title: string;
  desiredSubjects?: string[];
  content: string;
}

export type IWriteEditAction =
  | { type: "SET_STATE"; value: IState }
  | {
      type: "SET_TEXT";
      value: string;
    }
  | {
      type: "SET_ONOFF";
      value: string;
    }
  | { type: "SET_SUBJECT"; value: string }
  | { type: "SET_AREA"; value: string }
  | { type: "SET_TITLE"; value: string }
  | { type: "SET_Desitred_Subjects"; value: string[] };

const writeState: IState = {
  onOrOff: "ONLINE",
  subject: "JAVASCRIPT",
  area: "",
  title: "",
  desiredSubjects: [],
  content: "",
};

const write = (state = writeState, action: IWriteEditAction): IState => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.value };

    case "SET_ONOFF":
      return {
        ...state,
        onOrOff: action.value,
      };

    case "SET_SUBJECT":
      return {
        ...state,
        subject: action.value,
      };

    case "SET_AREA":
      return {
        ...state,
        area: action.value,
      };

    case "SET_TITLE":
      return {
        ...state,
        title: action.value,
      };
    case "SET_Desitred_Subjects":
      return {
        ...state,
        desiredSubjects: action.value,
      };
    case "SET_TEXT":
      return {
        ...state,
        content: action.value,
      };

    default:
      return state;
  }
};

export default write;

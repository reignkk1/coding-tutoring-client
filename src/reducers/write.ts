export interface IState {
  onOrOff: string;
  subject: string;
  area: string;
  title: string;
  desiredSubjects: string[];
}

export type IWriteAction =
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
};

const write = (state = writeState, action: IWriteAction): IState => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default write;

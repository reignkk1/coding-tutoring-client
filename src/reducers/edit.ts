export interface IState {
  onOrOff: string;
  subject: string;
  area: string;
  title: string;
  desiredSubjects: string[];
}

type IactionType =
  | { type: "SET_STATE"; value: IState }
  | {
      type: "SET_ONOFF";
      value: string;
    }
  | { type: "SET_SUBJECT"; value: string }
  | { type: "SET_AREA"; value: string }
  | { type: "SET_TITLE"; value: string }
  | { type: "SET_Desitred_Subjects"; value: string[] };

const writeState: IState = {
  onOrOff: "",
  subject: "",
  area: "",
  title: "",
  desiredSubjects: [],
};

const edit = (state = writeState, action: IactionType): IState => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.value };

    case "SET_ONOFF":
      return { ...state, onOrOff: action.value };

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

export default edit;

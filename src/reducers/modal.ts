export type IModalAction =
  | {
      type: "MODAL_OPEN";
    }
  | { type: "MODAL_CLOSE" };

const modal = (state = false, action: IModalAction): boolean => {
  switch (action.type) {
    case "MODAL_OPEN":
      return true;
    case "MODAL_CLOSE":
      return false;
    default:
      return state;
  }
};

export default modal;

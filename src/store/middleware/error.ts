const error = (store: any) => (next: any) => (action: any) => {
  if (action.type === "SHOW_ERROR") {
    console.log(action.payload.error);
    next(action);
  } else {
    next(action);
  }
};

export default error;

const log = (store: any) => (next: any) => (action: any) => {
  console.log(action);

  next(action);
};

export default log;

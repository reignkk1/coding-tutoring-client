export interface IPost {
  id?: number;
  subject?: string;
  title: string;
  content: string;
  area?: string;
  onOrOff?: string;
  member?: {
    id: number;
    nickname: string;
    gender: string;
    ageGroup: string;
    userClassification: string;
    career: string;
  };
}

export type IPostAction = {
  type: "POST_UPDATE";
  data: IPost[];
};

const post = (state = [] as IPost[], action: IPostAction): IPost[] => {
  switch (action.type) {
    case "POST_UPDATE":
      return action.data;
    default:
      return state;
  }
};

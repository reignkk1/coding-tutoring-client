import axios from "axios";
import { apiCallBegan } from "../api";
import { closeModal } from "../modal";

const token = localStorage.getItem("token");

const api = (store: any) => (next: any) => async (action: any) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //타입이 apiRequest인 경우만 진행하고 아닌경우 바로 다음 미들웨어나 리듀서로 넘긴다.
  if (action.type !== apiCallBegan.type) return next(action);

  //타입이 apiRequest이면 action의 payload를 구조분해한다.
  const { url, method, category, data, onStart, onSuccess, onError } =
    action.payload;

  if (onStart) store.dispatch({ type: onStart });

  try {
    //구조 분해한것을 통해 api요청을 한다.
    const res = await axios.request({
      baseURL:
        "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080",
      url,
      method,
      data,
    });

    //dispatch한다.
    if (method === "GET") {
      store.dispatch({
        type: onSuccess,
        payload: { category: category, data: res.data },
      });
    }
    if (method === "POST") {
      store.dispatch({
        type: onSuccess,
        payload: { category: category, data: res.data },
      });
      store.dispatch(closeModal());
      alert("보내기 완료!");
    }
    if (method === "DELETE") {
      if (window.confirm("정말로 삭제하겠습니까?")) {
        store.dispatch({
          type: onSuccess,
          payload: { category: category, data: data },
        });
      }
    }
  } catch (error: any) {
    store.dispatch({ type: onError, payload: { error: error.message } });
    store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
    if (method === "POST") {
      store.dispatch(closeModal());
      alert("보내기 실패");
    }
  }
};
export default api;

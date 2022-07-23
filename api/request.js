import { getRequestHost } from "../config/util";
import store from "../store";

const request = async (url, data, method = "GET") => {
  const reqUrl = getRequestHost() + url;
  const header = {};
  header.token = store.state.token;

  const [err, res] = await uni.request({
    url: reqUrl,
    method,
    data,
  });
  if (!err) {
    return res.data;
  }
  return err;
};

export const get = (url, data = {}) => {
  return request(url, data);
};

export const post = (url, data = {}) => {
  return request(url, data, "POST");
};

import { getRequestHost } from "../config/util";

const request = (url, data, method = "GET") => {
  const reqUrl = getRequestHost() + url;
  return new Promise((resolve, reject) => {
    uni.request({
      url: reqUrl,
      method,
      data,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {},
    });
  });
};

export const get = (url, data = {}) => {
  return request(url, data);
};

export const post = (url, data = {}) => {
  return request(url, data, "POST");
};

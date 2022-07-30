import { getRequestHost } from "../config/util";

const interceptorRequest = () => {
  uni.addInterceptor("request", {
    invoke(args) {
      args.url = getRequestHost() + args.url;
      args.header = {
        "u-token": "123",
      };
    },
    success(args) {
      args.data.code = 1;
    },
  });
};

const interceptorNaivate = () => {
  uni.addInterceptor("navigateTo", {
    invoke(args) {
      console.log("args", args);
      // return false
    },
  });
};

export const actionInterCeptor = () => {
  interceptorRequest();
  interceptorNaivate();
};

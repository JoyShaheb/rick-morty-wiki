import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const Progress = (isFetching: boolean) => {
  if (isFetching) {
    NProgress.start();
  } else {
    NProgress.done();
  }
};

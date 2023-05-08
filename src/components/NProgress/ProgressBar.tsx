import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const ProgressBar = (isFetching: boolean) => {
  if (isFetching) {
    NProgress.start();
  } else {
    NProgress.done();
  }
};

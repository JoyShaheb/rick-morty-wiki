import { FC } from "react";
import { LoadingState, ErrorState, NoDataState } from "./index";
import { iErrorState } from "../../types/types";

interface IStatesProps extends iErrorState {
  skeletonCount: number;
  dataLength: number;
}

const States: FC<IStatesProps> = ({
  error,
  isLoading,
  isFetching,
  skeletonCount,
  dataLength,
}) => {
  return (
    <>
      <LoadingState
        error={error}
        isLoading={isLoading}
        skeletonCount={skeletonCount}
        isFetching={isFetching}
      />
      <ErrorState error={error} isLoading={isLoading} />
      <NoDataState
        error={error}
        isLoading={isLoading}
        dataLength={dataLength}
      />
    </>
  );
};

export default States;

import { useEffect, useState } from "react";
import { IPaginationProps } from "./interfaces";
import { useSearchParams } from "react-router-dom";

export const Pagination = (props: IPaginationProps) => {
  const [currantPage, setCurrantPage] = useState<number>(props.initialPage);
  const [queryParams, setQueryParams] = useSearchParams();
  useEffect(() => {
    queryParams.get("q")?.length
      ? setQueryParams({ page: String(currantPage), q: queryParams.get("q")! })
      : setQueryParams({ page: String(currantPage) });
  }, []);
  useEffect(() => {
    if (queryParams.get("page")?.length) {
      setCurrantPage(Number(queryParams.get("page")));
    }
  }, [queryParams.get("page")]);
  const clickOn = (page: number) => () => {
    queryParams.get("q")?.length
      ? setQueryParams({ page: String(page), q: queryParams.get("q")! })
      : setQueryParams({ page: String(page) });
  };
  return (
    <div className="flex flex-wrap px-4 items-center justify-center gap-5">
      {props.totalPage
        ? Array.from({ length: props.totalPage }).map((_, ind) => (
            <button
              key={ind}
              onClick={clickOn(ind + 1)}
              className={`transition duration-150 hover:text-orange-200 hover:scale-105 hover:border-orange-200 border outline-none border-slate-500 rounded-md py-1 px-3 
              ${
                currantPage === ind + 1
                  ? "border-orange-200 text-orange-200 scale-105"
                  : ""
              }`}
            >
              {++ind}
            </button>
          ))
        : null}
    </div>
  );
};

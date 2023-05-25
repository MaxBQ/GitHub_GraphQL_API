import { useEffect, useState } from "react";
import { IPaginationProps } from "./interfaces";
import { useSearchParams } from "react-router-dom";

export const Pagination = (props: IPaginationProps) => {
  const [currantPage, setCurrantPage] = useState<number>(props.initialPage);
  const [queryParams, setQueryParams] = useSearchParams();
  useEffect(() => {
    setQueryParams({ page: String(currantPage) });
  }, []);
  const clickOn = (page: number) => () => {
    setQueryParams({ page: String(page) });
    props.currantPage(page);
    setCurrantPage(page);
  };
  return (
    <div className="flex items-center justify-center gap-5">
      {props.totalPage
        ? Array.from({ length: props.totalPage }).map((_, ind) => (
            <button
              key={ind}
              onClick={clickOn(ind + 1)}
              className={`transition duration-150 hover:text-orange-300 hover:scale-105 hover:border-orange-300 border outline-none border-slate-500 rounded-md py-1 px-3 
              ${
                currantPage === ind + 1
                  ? "border-orange-300 text-orange-300 scale-105"
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

import { useAtom } from "jotai";
import { ChangeEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchAtom } from "./store";

export const Search = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [search, setSearch] = useAtom(searchAtom);
  useEffect(() => {
    queryParams.get("q")?.length
      ? setSearch(queryParams.get("q")!)
      : setSearch("");
  }, []);
  const headerChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    setQueryParams({ page: "1", q: e.target.value });
    if (!e.target.value) {
      setQueryParams({ page: "1" });
    }
  };
  return (
    <input
      className="outline-none h-12 rounded-md px-2 w-2/3 text-slate-800"
      id="q"
      aria-label="Search repositories"
      placeholder="Search"
      type="search"
      name="q"
      onChange={headerChange}
      value={search}
    />
  );
};

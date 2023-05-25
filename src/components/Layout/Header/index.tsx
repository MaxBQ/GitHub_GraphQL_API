import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { searchAtom } from "../../Search/store";

export const Header = () => {
  const [_, setSearch] = useAtom(searchAtom);

  return (
    <header className="w-full bg-slate-700 h-24 border-b border-slate-500 sticky top-0">
      <div className="container h-full mx-auto px-4 flex items-center  justify-between">
        <Link
          className="text-xl text-orange-200 "
          to={`/?page=1`}
          onClick={() => setSearch("")}
        >
          Repo list
        </Link>
        <h1 className="text-xl md:text-3xl">Is GitHub GraphQL API</h1>
      </div>
    </header>
  );
};

import { useAtomValue } from "jotai";
import { repositoriesAtom } from "./store/storeRepositories";
import { useListRepositories } from "../common/hooks/useListRepositories";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "../Pagination";
import { Search } from "../Search";

export const Repositories = () => {
  const [queryParams] = useSearchParams();
  const { totalPage } = useListRepositories(
    queryParams.get("page")?.length ? Number(queryParams.get("page")) : 1,
    queryParams.get("q")
  );

  const repositories = useAtomValue(repositoriesAtom);
  return (
    <div className="mx-auto text-center pb-4">
      <div className="flex p-4 items-center justify-start gap-12 lg:gap-24">
        <h2 className=" text-left text-lg lg:text-5xl">Repositories</h2>
        <Search />
      </div>
      <div className="flex text-lg font-bold items-baseline justify-between  px-4">
        <h3 className="w-1/4">Name</h3>
        <h3 className="w-1/4">Stars</h3>
        <h3 className="w-1/4">Update</h3>
        <h3 className="w-1/4">GitHub Link</h3>
      </div>
      {repositories.length
        ? repositories.map((repository) => (
            <ul
              key={repository.id}
              className="flex items-baseline justify-between border m-4 px-2 py-4 rounded-md border-slate-500"
            >
              <li className="w-1/4 text-orange-200 truncate">
                <Link to={repository.resourcePath}>{repository.name}</Link>
              </li>
              <li className="w-1/4">{repository.stargazerCount}</li>
              <li className="w-1/4 truncate">
                {repository.updatedAt.slice(0, 10)}
              </li>
              <li className="w-1/4 text-orange-200">
                <Link to={repository.url}>Link</Link>
              </li>
            </ul>
          ))
        : null}
      {totalPage ? (
        <Pagination
          totalPage={totalPage}
          initialPage={
            queryParams.get("page")?.length
              ? Number(queryParams.get("page"))
              : 1
          }
          // currantPage={(page: number) => setPage(page)}
        />
      ) : null}
    </div>
  );
};

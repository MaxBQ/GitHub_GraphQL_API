import { useAtomValue } from "jotai";
import { repositoriesAtom } from "./store/storeRepositories";
import { useListRepositories } from "../common/hooks/useListRepositories";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../Pagination";
import { Search } from "../Search";
import { RepositoriesList } from "./RepositoriesList";

export const Repositories = () => {
  const [queryParams] = useSearchParams();
  const { totalPage, loading } = useListRepositories(
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
      {repositories.length && !loading ? (
        <RepositoriesList repositories={repositories} />
      ) : (
        <div className="h-screen flex items-center justify-center">
          Loading...
        </div>
      )}
      {totalPage && !loading ? (
        <Pagination
          totalPage={totalPage}
          initialPage={
            queryParams.get("page")?.length
              ? Number(queryParams.get("page"))
              : 1
          }
        />
      ) : null}
    </div>
  );
};

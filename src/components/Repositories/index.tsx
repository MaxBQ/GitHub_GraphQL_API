import { useAtomValue } from "jotai";
import { repositoriesAtom } from "./store/storeRepositories";
import { useListRepositories } from "../common/hooks/useListRepositories";
import { Link } from "react-router-dom";

export const Repositories = () => {
  useListRepositories();
  const repositories = useAtomValue(repositoriesAtom);
  return (
    <div className="mx-auto text-center pb-4">
      <h1 className="p-4 text-left">Repositories</h1>
      <div className="flex items-baseline justify-between  px-4">
        <h2 className="w-1/4">Name</h2>
        <h2 className="w-1/4">Stars</h2>
        <h2 className="w-1/4">Update</h2>
        <h2 className="w-1/4">GitHub Link</h2>
      </div>
      {repositories.length
        ? repositories.map((repository) => (
            <ul
              key={repository.id}
              className="flex  items-baseline justify-between border m-4 px-2 py-4 rounded-md border-slate-500"
            >
              <li className="w-1/4 text-orange-300">
                <Link to={repository.resourcePath}>{repository.name}</Link>
              </li>
              <li className="w-1/4">{repository.stargazerCount}</li>
              <li className="w-1/4">{repository.updatedAt}</li>
              <li className="w-1/4 text-orange-300">
                <Link to={repository.url}>Link</Link>
              </li>
            </ul>
          ))
        : null}
    </div>
  );
};

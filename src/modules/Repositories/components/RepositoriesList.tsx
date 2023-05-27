import { Link } from "react-router-dom";
import { IRepositories } from "../interfaces/IRepositories";

export const RepositoriesList = ({
  repositories,
}: {
  repositories: IRepositories[];
}) => {
  return (
    <>
      <div className="flex text-lg font-bold items-baseline justify-between  px-4">
        <h3 className="w-1/4">Name</h3>
        <h3 className="w-1/4">Stars</h3>
        <h3 className="w-1/4">Update</h3>
        <h3 className="w-1/4">GitHub Link</h3>
      </div>
      {repositories.map((repository) => (
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
      ))}
    </>
  );
};

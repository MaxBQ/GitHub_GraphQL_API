import { Link } from "react-router-dom";
import { IRepository } from "../interfaces/IRepository";

export const RepositoryDetail = ({
  repository,
}: {
  repository: IRepository;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-full">
      {repository?.owner?.avatarUrl?.length ? (
        <img
          src={repository.owner.avatarUrl}
          alt={repository.name}
          className="rounded-full w-64"
        />
      ) : (
        <span className="w-64 h-64 rounded-full bg-white" />
      )}
      <div className="grid gap-5">
        <Link to={repository.url} className="text-4xl text-orange-200">
          {repository.owner.login}/{repository.name}
        </Link>
        <div className="flex text-2xl items-center justify-start gap-8">
          <p>Stars:&nbsp;{repository.stargazerCount}</p>
          <p>Update to: {repository.updatedAt.slice(0, 10)}</p>
        </div>
        <div className="flex items-center gap-3">
          {repository.languages.nodes.length
            ? repository.languages.nodes.map((langue) => (
                <div className="flex items-center gap-1" key={langue.name}>
                  <span
                    className={`w-3 h-3 rounded-full shadow-md`}
                    style={{ background: langue.color }}
                  />
                  <p>{langue.name}</p>
                </div>
              ))
            : null}
        </div>
        <p className="text-xl">{repository.description}</p>
      </div>
    </div>
  );
};

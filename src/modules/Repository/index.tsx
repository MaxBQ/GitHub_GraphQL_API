import { useAtomValue } from "jotai";
import { useRepository } from "./hooks/useRepository";
import { repositoryAtom } from "./store/storeRepository";
import { RepositoryDetail } from "./components/RepositoryDetail";

export const Repository = () => {
  const { loading } = useRepository();
  const repository = useAtomValue(repositoryAtom);
  return (
    <>
      {Object.values(repository).length && !loading ? (
        <div className="py-10 px-4 min-h-screen">
          <RepositoryDetail repository={repository} />
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          Loading...
        </div>
      )}
    </>
  );
};

import { useQuery } from "@apollo/client";
import { QUERY_REPOSITORY } from "../graphql/query";
import { useLocation } from "react-router-dom";
import { ownerName } from "../../Repositories/helpers/pathnameOwnerName";
import { useSetAtom } from "jotai";
import { repositoryAtom } from "../store/storeRepository";
import { useEffect } from "react";
import { IRepositoryResponse } from "../interfaces/IRepository";

export const useRepository = () => {
  const { pathname } = useLocation();
  const { owner, name } = ownerName(pathname);

  const { data, loading } = useQuery<IRepositoryResponse>(QUERY_REPOSITORY, {
    variables: {
      owner,
      name,
      first: 5,
    },
  });
  const setRepository = useSetAtom(repositoryAtom);
  useEffect(() => {
    if (data?.repository) {
      setRepository(data.repository);
    }
  }, [data]);

  return { loading };
};

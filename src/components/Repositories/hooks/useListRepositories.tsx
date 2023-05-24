import { useQuery } from "@apollo/client";
import { QUERY_REPOSITORIES } from "../graphql/query";
import { useEffect } from "react";
import { IRepositoriesResponse } from "../interfaces/IRepositories";
import { useSetAtom } from "jotai";
import { repositoryAtom } from "../store/storeRepositories";

export const useListRepositories = () => {
  const { data } = useQuery<IRepositoriesResponse>(QUERY_REPOSITORIES, {
    variables: {
      query: "is:public",
      type: "REPOSITORY",
      first: 10,
    },
  });
  const setRepositories = useSetAtom(repositoryAtom);
  useEffect(() => {
    if (data?.search.nodes.length) {
      setRepositories(data?.search.nodes);
    }
  }, [data]);
};

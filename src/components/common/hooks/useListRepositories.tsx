import { useQuery } from "@apollo/client";
import { QUERY_REPOSITORIES } from "../graphql/query";
import { useEffect } from "react";
import { IRepositoriesResponse } from "../../Repositories/interfaces/IRepositories";
import { useSetAtom } from "jotai";
import { repositoriesAtom } from "../../Repositories/store/storeRepositories";

export const useListRepositories = () => {
  const { data } = useQuery<IRepositoriesResponse>(QUERY_REPOSITORIES, {
    variables: {
      query: "is:public archived:false stars:>=5000 fork:true",
      type: "REPOSITORY",
      first: 10,
    },
  });
  const setRepositories = useSetAtom(repositoriesAtom);
  useEffect(() => {
    if (data?.search.nodes.length) {
      setRepositories(data?.search.nodes);
    }
  }, [data]);
};

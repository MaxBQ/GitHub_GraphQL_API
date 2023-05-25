import { useQuery } from "@apollo/client";
import { QUERY_REPOSITORIES } from "../graphql/query";
import { useEffect, useState } from "react";
import { IRepositoriesResponse } from "../../Repositories/interfaces/IRepositories";
import { useSetAtom } from "jotai";
import { repositoriesAtom } from "../../Repositories/store/storeRepositories";

export const useListRepositories = (page: number) => {
  const { data } = useQuery<IRepositoriesResponse>(QUERY_REPOSITORIES, {
    variables: {
      query: "is:public archived:false stars:>=5000 fork:true",
      type: "REPOSITORY",
      first: 100,
    },
  });
  const [totalPage, setTotalPage] = useState<number>();
  const dataCountPage = page * 10;
  const skip = dataCountPage - 10;
  const setRepositories = useSetAtom(repositoriesAtom);
  useEffect(() => {
    if (data?.search.nodes.length) {
      setTotalPage(data?.search.nodes.length / 10);
      if (skip) {
        const filterCount = data?.search.nodes.filter(
          (_, ind) => dataCountPage > ind && skip <= ind
        );

        setRepositories(filterCount);
      } else {
        const filterCount = data?.search.nodes.filter(
          (_, ind) => dataCountPage > ind
        );

        setRepositories(filterCount);
      }
    }
  }, [data, page]);
  return { totalPage };
};

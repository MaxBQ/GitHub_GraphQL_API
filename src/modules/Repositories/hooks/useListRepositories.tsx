import { useQuery } from "@apollo/client";
import { QUERY_REPOSITORIES, QUERY_REPOSITORIES_MY } from "../graphql/query";
import { useEffect, useState } from "react";
import {
  IMyRepositoriesResponse,
  IRepositoriesResponse,
} from "../interfaces/IRepositories";
import { useSetAtom } from "jotai";
import { repositoriesAtom } from "../store/storeRepositories";

export const useListRepositories = (page: number, q?: string | null) => {
  if (q?.length) {
    const { data, loading } = useQuery<IRepositoriesResponse>(
      QUERY_REPOSITORIES,
      {
        variables: {
          query: `${
            q?.length ? q : "is:public archived:false stars:>=5000 fork:true"
          }`,
          type: "REPOSITORY",
          first: 100,
        },
      }
    );
    const [totalPage, setTotalPage] = useState<number>();
    const dataCountPage = page * 10;
    const skip = dataCountPage - 10;
    const setRepositories = useSetAtom(repositoriesAtom);
    useEffect(() => {
      if (data?.search.nodes.length) {
        setTotalPage(data.search.nodes.length / 10);
        if (skip) {
          const filterCount = data.search.nodes.filter(
            (_, ind) => dataCountPage > ind && skip <= ind
          );

          setRepositories(filterCount);
        } else {
          const filterCount = data.search.nodes.filter(
            (_, ind) => dataCountPage > ind
          );

          setRepositories(filterCount);
        }
      }
    }, [data, page]);
    return { totalPage, loading };
  } else {
    const { data, loading } = useQuery<IMyRepositoriesResponse>(
      QUERY_REPOSITORIES_MY,
      {
        variables: {
          first: 100,
          isFork: false,
        },
      }
    );
    const [totalPage, setTotalPage] = useState<number>();
    const dataCountPage = page * 10;
    const skip = dataCountPage - 10;
    const setRepositories = useSetAtom(repositoriesAtom);
    useEffect(() => {
      if (data?.viewer.repositories.nodes.length) {
        setTotalPage(data.viewer.repositories.nodes.length / 10);
        if (skip) {
          const filterCount = data.viewer.repositories.nodes.filter(
            (_, ind) => dataCountPage > ind && skip <= ind
          );

          setRepositories(filterCount);
        } else {
          const filterCount = data.viewer.repositories.nodes.filter(
            (_, ind) => dataCountPage > ind
          );

          setRepositories(filterCount);
        }
      }
    }, [data, page]);
    return { totalPage, loading };
  }
};

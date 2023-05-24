import { useQuery } from "@apollo/client";
import { QUERY_REPOSITORIES } from "./graphql/query";
import { useEffect } from "react";

export const Repositories = () => {
  const { data, error, loading } = useQuery(QUERY_REPOSITORIES, {
    variables: {
      query: "is:public",
      type: "REPOSITORY",
      first: 10,
    },
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>Repositories</div>;
};

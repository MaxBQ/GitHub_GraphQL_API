import { useQuery } from "@apollo/client";
import { QUERY_REPOSITORY } from "../graphql/query";
import { useLocation } from "react-router-dom";
import { ownerName } from "../../common/helpers/pathnameOwnerName";

export const useRepository = () => {
  const { pathname } = useLocation();
  const { owner, name } = ownerName(pathname);

  const { data } = useQuery(QUERY_REPOSITORY, {
    variables: {
      owner,
      name,
      first: 100,
    },
  });
  console.log(data);
};

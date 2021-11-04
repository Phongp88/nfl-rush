import { useLazyQuery } from "@apollo/client";
import { useCallback } from "react";

import { FETCH_PLAYER } from "../gql/queries";

const useFilterQuery = () => {
  const [executeQuery, { data, error, loading }] = useLazyQuery(FETCH_PLAYER);
  const fetchPlayer = useCallback(
    (queryVariables) => {
      executeQuery({ variables: queryVariables });
    },
    [executeQuery]
  );
  return {
    players: data?.player || [],
    loading,
    count: data?.countPlayer?.count || 0,
    error,
    fetchPlayer,
  };
};
export { useFilterQuery };

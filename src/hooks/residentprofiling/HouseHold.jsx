import React from "react";
import {
  createHouseHold,
  getAllHouseHold,
} from "../../services/residentprofiling/HouseHold";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const HouseHoldHook = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["household"],
    queryFn: getAllHouseHold,
  });

  const mutation = useMutation({
    mutationFn: createHouseHold,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["household"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });

  const handleCreateHouseHold = (data) => {
    mutation.mutate(data);
  };

  return { data, isError, isLoading, handleCreateHouseHold, mutation };
};

export default HouseHoldHook;

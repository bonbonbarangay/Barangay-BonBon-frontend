import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createHouseMembers } from "../../services/residentprofiling/HouseMembers";
const HouseMembersHook = () => {
  const queryClient = useQueryClient();
  const createHouseMembersMutation = useMutation({
    mutationFn: createHouseMembers,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["housemembers"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });

  const handleCreateHouseMembers = (data) => {
    createHouseMembersMutation.mutate(data);
  };
  return { handleCreateHouseMembers, createHouseMembersMutation };
};

export default HouseMembersHook;

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createHouseMembers,
  getAllHouseMembers,
} from "../../services/residentprofiling/HouseMembers";

const HouseMembersHook = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["housemembers"],
    queryFn: getAllHouseMembers,
  });
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

  const dataHouseMembers = Array.isArray(data) ? data : [];
  return {
    handleCreateHouseMembers,
    createHouseMembersMutation,
    data,
    isError,
    isLoading,
    dataHouseMembers,
  };
};

export default HouseMembersHook;

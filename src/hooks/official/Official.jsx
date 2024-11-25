import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllOfficials,
  creatrOfficial,
  updateOfficial,
  deleteOfficial,
} from "../../services/official/Official";
const OfficialHook = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["official"],
    queryFn: getAllOfficials,
  });

  const mutation = useMutation({
    mutationFn: creatrOfficial,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["official"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const updateMutation = useMutation({
    mutationFn: updateOfficial,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["official"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const deleteMutation = useMutation({
    mutationFn: deleteOfficial,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["official"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const handleCreateOfficial = (data) => {
    mutation.mutate(data);
  };
  const handleUpdateOfficial = (data) => {
    updateMutation.mutateAsync(data);
  };

  const handleDelete = (data) => {
    deleteMutation.mutateAsync(data);
  };
  return {
    data,
    isLoading,
    isError,
    handleCreateOfficial,
    mutation,
    handleUpdateOfficial,
    updateMutation,
    handleDelete,
    deleteMutation,
  };
};

export default OfficialHook;

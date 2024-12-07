import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllOfficials,
  creatrOfficial,
  updateOfficial,
  deleteOfficial,
  getOfficialByPosition,
} from "../../services/official/Official";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
import { useState } from "react";
const OfficialHook = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["official"],
    queryFn: getAllOfficials,
  });
  const [OfficialData, setOfficialData] = useState();

  const mutation = useMutation({
    mutationFn: creatrOfficial,
    onSuccess: (data) => {
      handleSucess("Sucess Create");
      queryClient.invalidateQueries({ queryKey: ["official"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
        handleInvalid(error?.data?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const getOfficialByPositionMutation = useMutation({
    mutationFn: getOfficialByPosition,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["official"] });
      setOfficialData(data);
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
        handleInvalid(error?.data?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const updateMutation = useMutation({
    mutationFn: updateOfficial,
    onSuccess: (data) => {
      handleSucess("Sucess Update");
      queryClient.invalidateQueries({ queryKey: ["official"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
        handleInvalid(error?.data?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const deleteMutation = useMutation({
    mutationFn: deleteOfficial,
    onSuccess: () => {
      handleSucess("Delete Sucess");
      queryClient.invalidateQueries({ queryKey: ["official"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
        handleInvalid(error?.data?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const handleCreateOfficial = (data) => {
    mutation.mutate(data);
  };
  const handleOfficialGetPosition = (position) => {
    getOfficialByPositionMutation.mutate(position);
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
    OfficialData,
    handleOfficialGetPosition,
    getOfficialByPositionMutation,
  };
};

export default OfficialHook;

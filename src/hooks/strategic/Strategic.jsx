import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
import {
  createPolyLine,
  getAllPolylineData,
  deletePolyLine,
} from "../../services/strategic/Strategic";
const StrategicHook = () => {
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["strategic"],
    queryFn: getAllPolylineData,
  }); 

  const createPolyLineMutation = useMutation({
    mutationFn: createPolyLine,
    onSuccess: (data) => {
      handleSucess("Sucess Created");
      queryClient.invalidateQueries({ queryKey: ["strategic"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const deleteByUserIdMutation = useMutation({
    mutationFn: deletePolyLine,
    onSuccess: (data) => {
      handleSucess("Sucess Delete");

      queryClient.invalidateQueries({ queryKey: ["strategic"] });
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

  const handleCreatePolyData = (polylinedatga) => {
    createPolyLineMutation.mutate(polylinedatga);
  };
  const handleDeletePolyData = (id) => {
    deleteByUserIdMutation.mutateAsync(id);
  };

  return {
    data,
    isError,
    isLoading,
    createPolyLineMutation,
    deleteByUserIdMutation,
    handleCreatePolyData,
    handleDeletePolyData,
  };
};

export default StrategicHook;

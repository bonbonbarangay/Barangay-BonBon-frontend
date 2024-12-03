import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllLocations,
  createLocation,
  deleteLocation,
} from "../../services/map/Map";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
const MapHook = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["location"],
    queryFn: getAllLocations,
  });

  const mutation = useMutation({
    mutationFn: createLocation,
    onSuccess: (data) => {
      handleSucess("Sucess Create");
      queryClient.invalidateQueries({ queryKey: ["location"] });
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
    mutationFn: deleteLocation,
    onSuccess: () => {
      handleSucess("Delete Sucess");
      queryClient.invalidateQueries({ queryKey: ["location"] });
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
  const handleCreateLocation = (locationdata) => {
    mutation.mutate(locationdata);
  };
  const handleDelete = (id) => {
    deleteMutation.mutateAsync(id);
  };
  return {
    isError,
    isLoading,
    data,
    handleCreateLocation,
    handleDelete,
    deleteMutation,
  };
};

export default MapHook;

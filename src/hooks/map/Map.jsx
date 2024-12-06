import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllLocations,
  createLocation,
  deleteLocation,
  updateLocationDrag,
  updateData,
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
  const updateDragMutation = useMutation({
    mutationFn: updateLocationDrag,
    onSuccess: () => {
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
  const updateDataMutation = useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["location"] });
      handleSucess("Sucess Update");
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

  const handleDrag = (data) => {
    updateDragMutation.mutateAsync(data);
  };
  const handleUpdateData = (data) => {
    updateDataMutation.mutateAsync(data);
  };
  return {
    isError,
    isLoading,
    mutation,
    data,
    handleCreateLocation,
    handleDelete,
    deleteMutation,
    handleDrag,
    handleUpdateData,
    updateDataMutation,
  };
};

export default MapHook;

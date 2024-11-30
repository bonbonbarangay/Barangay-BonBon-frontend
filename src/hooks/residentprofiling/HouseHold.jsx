import React, { useEffect, useState } from "react";
import {
  createHouseHold,
  getAllHouseHold,
  acceptPending,
  getHouseHoldAndHouseMembersByUserid,
  deleteHouseHoldAndHouseMembersByUserid,
} from "../../services/residentprofiling/HouseHold";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const HouseHoldHook = () => {
  const queryClient = useQueryClient();
  const [houseHold, setHouseHold] = useState();
  const [houseMembers, setHouseMembers] = useState();

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
  const acceptPendingMutation = useMutation({
    mutationFn: acceptPending,
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

  const viewByUserIdMutation = useMutation({
    mutationFn: getHouseHoldAndHouseMembersByUserid,
    onSuccess: (data) => {
      setHouseHold(data.household);
      setHouseMembers(data.housemember);
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

  const deleteByUserIdMutation = useMutation({
    mutationFn: deleteHouseHoldAndHouseMembersByUserid,
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
  const handleAcceptPending = (id) => {
    acceptPendingMutation.mutateAsync(id);
  };
  const handleView = (userid) => {
    viewByUserIdMutation.mutate(userid);
  };
  const handleDelete = (userid) => {
    deleteByUserIdMutation.mutateAsync(userid);
  };
  return {
    data,
    isError,
    isLoading,
    handleCreateHouseHold,
    mutation,
    handleAcceptPending,
    acceptPendingMutation,
    handleView,
    houseHold,
    houseMembers,
    viewByUserIdMutation,
    handleDelete,
    deleteByUserIdMutation,
  };
};

export default HouseHoldHook;

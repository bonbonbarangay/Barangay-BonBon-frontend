import React, { useEffect, useState } from "react";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
import {
  createHouseHold,
  getAllHouseHold,
  acceptPending,
  getHouseHoldAndHouseMembersByUserid,
  deleteHouseHoldAndHouseMembersByUserid,
  getHouseByUserid,
} from "../../services/residentprofiling/HouseHold";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getFromLocalStorage } from "../../utils/localStorage";
const HouseHoldHook = () => {
  const queryClient = useQueryClient();
  const [pending, setPending] = useState();
  const [houseHold, setHouseHold] = useState();
  const [houseMembers, setHouseMembers] = useState();
  const userid = getFromLocalStorage("id");
  const { data, isError, isLoading } = useQuery({
    queryKey: ["household"],
    queryFn: getAllHouseHold,
  });

  const mutation = useMutation({
    mutationFn: createHouseHold,
    onSuccess: (data) => {
      handleSucess("Sucess");
      queryClient.invalidateQueries({ queryKey: ["household"] });
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
  const acceptPendingMutation = useMutation({
    mutationFn: acceptPending,
    onSuccess: (data) => {
      handleSucess("Sucess Accept");
      queryClient.invalidateQueries({ queryKey: ["household"] });
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
  const getUserByID = useMutation({
    mutationFn: getHouseByUserid,
    onSuccess: (data) => {
      setPending(data.pending);
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
      handleSucess("Sucess");

      queryClient.invalidateQueries({ queryKey: ["household"] });
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
  const handleCreateHouseHold = (data) => {
    mutation.mutate(data);
  };
  const handleAcceptPending = (id) => {
    acceptPendingMutation.mutateAsync(id);
  };
  const handleView = (userid) => {
    viewByUserIdMutation.mutate(userid);
  };
  const handleDelete = (data) => {
    deleteByUserIdMutation.mutateAsync(data);
  };
  const handleGetById = () => {
    getUserByID.mutate(userid);
  };

  const dataHouseHold = Array.isArray(data) ? data : [];
  useEffect(() => {
    if (userid) {
      handleGetById();
    }
  }, [userid]);

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
    pending,
    dataHouseHold,
  };
};

export default HouseHoldHook;

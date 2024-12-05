import React, { useEffect, useState } from "react";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getByUserid,
  updateUser,
} from "../../services/authentication/Authentication";

const AccountSettingHook = () => {
  const queryClient = useQueryClient();
  const [userData, setUserData] = useState();
  const getByIdMutation = useMutation({
    mutationFn: getByUserid,
    onSuccess: (data) => {
      setUserData(data.user);
      queryClient.invalidateQueries({ queryKey: ["signin"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["signin"] });
      handleSucess("Account Sucessfully Updated");
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

  const handleGetByUserId = (id) => {
    getByIdMutation.mutate(id);
  };
  const handleUpdateUser = (data) => {
    updateUserMutation.mutateAsync(data);
  };
  return { userData, handleGetByUserId, handleUpdateUser, updateUserMutation };
};

export default AccountSettingHook;

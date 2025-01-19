import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getByUserid,
  updateUser,
  forgotPassword,
  resetPassword,
} from "../../services/authentication/Authentication";

const AccountSettingHook = () => {
  const queryClient = useQueryClient();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
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
  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["signin"] });
      handleSucess("Account Sucessfully Reset Password");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
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
  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["signin"] });
      handleSucess(
        "A password reset link has been sent to your email address."
      );
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
  const handleForgotPassword = (emailaddress) => {
    forgotPasswordMutation.mutate(emailaddress);
  };
  const handleResetPassword = (data) => {
    resetPasswordMutation.mutateAsync(data);
  };
  return {
    userData,
    handleGetByUserId,
    handleUpdateUser,
    updateUserMutation,
    handleForgotPassword,
    forgotPasswordMutation,
    handleResetPassword,
    resetPasswordMutation,
  };
};

export default AccountSettingHook;

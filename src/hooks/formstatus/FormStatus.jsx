import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createFormStatus,
  updateFormStatus,
  getFormbyUserId,
  deleteFormStatus,
} from "../../services/formstatus/Formstatus";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
import { getFromLocalStorage } from "../../utils/localStorage";

const FormStatusHook = () => {
  const queryClient = useQueryClient();

  const [pending, setPending] = useState();
  const userid = getFromLocalStorage("id");

  const createFormStatusMutation = useMutation({
    mutationFn: createFormStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["formstatus"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const getbyUserId = useMutation({
    mutationFn: getFormbyUserId,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["formstatus"] });
      setPending(data.status);
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

  const updateFormStatusMutation = useMutation({
    mutationFn: updateFormStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["formstatus"] });
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
  const deleteFormStatusData = useMutation({
    mutationFn: deleteFormStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["formstatus"] });
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
  const handleCreateFormStatus = (formdata) => {
    createFormStatusMutation.mutate(formdata);
  };

  const handleGetByUserid = () => {
    getbyUserId.mutate(userid);
  };
  const handleUpdateFormData = (formdata) => {
    updateFormStatusMutation.mutateAsync(formdata);
  };
  const handleDeleteFormStatus = (userid) => {
    deleteFormStatusData.mutateAsync(userid);
  };

  useEffect(() => {
    if (userid) {
      handleGetByUserid();
    }
  }, [userid]);

  return {
    pending,
    handleCreateFormStatus,
    handleUpdateFormData,
    handleDeleteFormStatus,
  };
};

export default FormStatusHook;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  signUpServices,
  verifyAccount,
} from "../../services/authentication/Authentication";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";

const SignUpHook = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signUpServices,
    onSuccess: (data) => {
      handleSucess(data.message);
      queryClient.invalidateQueries({ queryKey: ["signup"] });
    },
    onError: (error) => {
      handleInvalid(error?.data?.message);
    },
  });

  const verifyAccountMutation = useMutation({
    mutationFn: verifyAccount,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["signup"] });
    },
    onError: (error) => {
      handleInvalid(error?.data?.message);
    },
  });
  const handleSignUp = (data) => {
    mutation.mutate(data);
  };
  const handleVerifyAccount = (id) => {
    verifyAccountMutation.mutateAsync(id);
  };
  return { handleSignUp, mutation, handleVerifyAccount };
};

export default SignUpHook;

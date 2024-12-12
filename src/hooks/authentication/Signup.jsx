import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpServices } from "../../services/authentication/Authentication";
import { useNavigate } from "react-router-dom";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";

const SignUpHook = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signUpServices,
    onSuccess: (data) => {
      handleSucess("Register Sucess");
      navigate("/signin");
      queryClient.invalidateQueries({ queryKey: ["signup"] });
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
  const handleSignUp = (data) => {
    mutation.mutate(data);
  };

  return { handleSignUp, mutation };
};

export default SignUpHook;

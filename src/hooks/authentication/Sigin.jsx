import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  signInServices,
  verifyOtp,
} from "../../services/authentication/Authentication";
import { saveToLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import {
  handleInvalid,
  handleSucess,
} from "../../components/toastify/Toastify";
const SiginHook = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signInServices,
    onSuccess: (data) => {
      saveToLocalStorage("email", data.email);
      handleSucess(data.message);
      if (data.otpverification) {
        setTimeout(() => {
          navigate("/verifyotp");
        }, 3000);
      }

      queryClient.invalidateQueries({ queryKey: ["signin"] });
    },
    onError: (error) => {
      handleInvalid(error?.data?.message);
    },
  });
  const verifyOtpMutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      saveToLocalStorage("id", data.id);
      saveToLocalStorage("email", data.email);
      saveToLocalStorage("username", data.username);
      handleSucess(data.message);
      if (data.type == "user") {
        setTimeout(() => {
          navigate("/user");
        }, 2000);
      } else {
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 2000);
      }
      queryClient.invalidateQueries({ queryKey: ["signin"] });
    },
    onError: (error) => {
      handleInvalid(error?.data?.message);
    },
  });
  const handleSignin = (data) => {
    mutation.mutate(data);
  };
  const handleVerifyOtp = (data) => {
    verifyOtpMutation.mutate(data);
  };
  return { handleSignin, mutation, handleVerifyOtp, verifyOtpMutation };
};

export default SiginHook;

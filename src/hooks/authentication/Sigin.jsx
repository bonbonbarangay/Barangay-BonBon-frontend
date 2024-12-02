import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInServices } from "../../services/authentication/Authentication";
import { saveToLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { handleInvalid } from "../../components/toastify/Toastify";
const SiginHook = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signInServices,
    onSuccess: (data) => {
      if (data.type == "admin") {
        navigate("/admin/dashboard");
      } else {
        saveToLocalStorage("user", data.user);
        saveToLocalStorage("id", data.id);

        navigate("/user");
      }
      queryClient.invalidateQueries({ queryKey: ["signin"] });
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
  const handleSignin = (data) => {
    mutation.mutate(data);
  };

  return { handleSignin, mutation };
};

export default SiginHook;

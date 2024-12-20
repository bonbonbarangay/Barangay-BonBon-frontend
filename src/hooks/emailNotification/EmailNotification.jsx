import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailNotification } from "../../services/emailnotification/emailNotification";

const EmailNotificationHook = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: emailNotification,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["notification"] });
    },
    onError: (error) => {
      handleInvalid(error?.data?.message);
    },
  });
  const handleNotification = (data) => {
    mutation.mutate(data);
  };

  return { handleNotification };
};

export default EmailNotificationHook;

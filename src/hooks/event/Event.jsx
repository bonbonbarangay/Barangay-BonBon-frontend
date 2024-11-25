import { getAllEvent, createEvent } from "../../services/event/Event";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
const EventHook = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["event"],
    queryFn: getAllEvent,
  });

  const mutation = useMutation({
    mutationFn: createEvent,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["event"] });
    },
    onError: (error) => {
      if (error?.status === 400) {
        console.error("Bad request:", error?.data?.message || error?.message);
      } else {
        console.error("Error occurred:", error?.message);
      }
    },
  });
  const handleCreateEvent = (data) => {
    mutation.mutate(data);
  };

  return { data, isError, isLoading, handleCreateEvent, mutation };
};

export default EventHook;

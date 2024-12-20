import {
  getAllEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../services/event/Event";
import {
  handleSucess,
  handleInvalid,
} from "../../components/toastify/Toastify";
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
      handleSucess("Sucess Create");
      queryClient.invalidateQueries({ queryKey: ["event"] });
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

  const updateMutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: (data) => {
      handleSucess("Update Sucess");
      queryClient.invalidateQueries({ queryKey: ["event"] });
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

  const deleteMutation = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      handleSucess("Sucess Delete");
      queryClient.invalidateQueries({ queryKey: ["event"] });
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
  const handleCreateEvent = (data) => {
    mutation.mutate(data);
  };

  const handleUpdateEvent = (data) => {
    updateMutation.mutateAsync(data);
  };

  const handleDeleteEvent = (data) => {
    deleteMutation.mutateAsync(data);
  };
  return {
    data,
    isError,
    isLoading,
    handleCreateEvent,
    mutation,
    handleUpdateEvent,
    updateMutation,
    handleDeleteEvent,
    deleteMutation,
  };
};

export default EventHook;

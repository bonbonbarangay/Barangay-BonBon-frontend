import toast from "react-hot-toast";

export const handleSucess = (text) => {
  toast.success(text);
};
export const handleInvalid = (text) => {
  toast.error(text);
};

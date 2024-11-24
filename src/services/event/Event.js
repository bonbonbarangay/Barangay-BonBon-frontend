import axios from "axios";

export const getAllEvent = async () => {
  try {
    const response = await axios.get("http://localhost:4000/event/");

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};

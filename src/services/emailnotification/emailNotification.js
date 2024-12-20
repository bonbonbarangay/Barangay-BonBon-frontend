import axios from "axios";
export const emailNotification = async (user) => {
  try {
    const response = await axios.post(
      `https://barangay-bonbon-backend.onrender.com/notification`,
      user
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};

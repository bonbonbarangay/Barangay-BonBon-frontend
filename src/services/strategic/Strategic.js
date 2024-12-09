import axios from "axios";

export const createPolyLine = async (polylinedata) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/strategic",
      polylinedata
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
export const getAllPolylineData = async () => {
  try {
    const response = await axios.get(
      "https://barangay-bonbon-backend.onrender.com/strategic"
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

export const deletePolyLine = async (id) => {
  try {
    const response = await axios.delete(
      `https://barangay-bonbon-backend.onrender.com/strategic/${id}`
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

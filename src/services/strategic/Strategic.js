import axios from "axios";

export const createPolyLine = async (polylinedata) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/strategic",
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
    const response = await axios.get("http://localhost:4000/strategic");

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
      `http://localhost:4000/strategic/${id}`
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

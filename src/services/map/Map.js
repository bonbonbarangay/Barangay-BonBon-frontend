import axios from "axios";

export const createLocation = async (locationdata) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/map",
      locationdata
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
export const getAllLocations = async () => {
  try {
    const response = await axios.get("http://localhost:4000/map");

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};
export const deleteLocation = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/map/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};

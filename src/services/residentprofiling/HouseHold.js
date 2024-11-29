import axios from "axios";

export const createHouseHold = async (household) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/household",
      household
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
export const getAllHouseHold = async () => {
  try {
    const response = await axios.get("http://localhost:4000/household");

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};

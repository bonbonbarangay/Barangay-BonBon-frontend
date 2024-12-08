import axios from "axios";
import { getFromLocalStorage } from "../../utils/localStorage";

export const getAllHouseMembers = async () => {
  try {
    const response = await axios.get(
      "https://barangay-bonbon-backend.onrender.com/housemembers"
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

export const createHouseMembers = async (housemembers) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/housemembers",
      {
        data: housemembers,
        userid: getFromLocalStorage("id"),
      }
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

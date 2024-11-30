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
export const acceptPending = async (id) => {
  try {
    const response = await axios.put(`http://localhost:4000/household/${id}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};

export const getHouseHoldAndHouseMembersByUserid = async (userid) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/household/${userid}`
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
export const deleteHouseHoldAndHouseMembersByUserid = async (userid) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/household/${userid}`
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

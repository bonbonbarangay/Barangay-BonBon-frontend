import axios from "axios";

export const createHouseHold = async (household) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/household",
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
    const response = await axios.get(
      "https://barangay-bonbon-backend.onrender.com/household"
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
export const acceptPending = async (id) => {
  try {
    const response = await axios.put(
      `https://barangay-bonbon-backend.onrender.com/household/${id}`
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

export const getHouseHoldAndHouseMembersByUserid = async (userid) => {
  try {
    const response = await axios.get(
      `https://barangay-bonbon-backend.onrender.com/household/${userid}`
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
export const deleteHouseHoldAndHouseMembersByUserid = async (data) => {
  try {
    const response = await axios.delete(
      `https://barangay-bonbon-backend.onrender.com/household/${data.userid}`,
      {
        data: { cloudinaryid: data.cloudinaryid },
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

export const getHouseByUserid = async (userid) => {
  try {
    const response = await axios.get(
      `https://barangay-bonbon-backend.onrender.com/household/user/${userid}`
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

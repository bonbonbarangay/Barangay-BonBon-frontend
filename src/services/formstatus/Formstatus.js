import axios from "axios";
export const getFormbyUserId = async (userid) => {
  try {
    const response = await axios.get(
      `https://barangay-bonbon-backend.onrender.com/formstatus/${userid}`
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

export const createFormStatus = async (formstatusdata) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/formstatus",
      formstatusdata
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

export const updateFormStatus = async (formstatusdata) => {
  try {
    const response = await axios.put(
      `https://barangay-bonbon-backend.onrender.com/formstatus/${formstatusdata.userid}`,
      {
        status: formstatusdata.status,
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

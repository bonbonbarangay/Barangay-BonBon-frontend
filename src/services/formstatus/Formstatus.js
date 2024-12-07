import axios from "axios";
export const getFormbyUserId = async (userid) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/formstatus/${userid}`
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
      "http://localhost:4000/formstatus",
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
      `http://localhost:4000/formstatus/${formstatusdata.userid}`,
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
export const deleteFormStatus = async (userid) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/formstatus/${userid}`
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

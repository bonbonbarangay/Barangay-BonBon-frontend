import axios from "axios";

export const signInServices = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/authentication/signin",
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

export const signUpServices = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/authentication/signup",
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
export const getByUserid = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/authentication/${id}`
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

export const updateUser = async (data) => {
  try {
    const response = await axios.put(
      `http://localhost:4000/authentication/${data.id}`,
      {
        username: data.username,
        emailaddress: data.emailaddress,
        password: data.password,
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

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

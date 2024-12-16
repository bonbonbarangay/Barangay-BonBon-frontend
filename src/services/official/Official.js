import axios from "axios";

export const getAllOfficials = async () => {
  try {
    const response = await axios.get("http://localhost:4000/official/");

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};
export const creatrOfficial = async (officialdata) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/official/",
      officialdata
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
export const getOfficialByPosition = async (position) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/official/position",
      {
        positiontype: position,
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
export const updateOfficial = async (data) => {
  try {
    const response = await axios.put(
      `http://localhost:4000/official/${data.id}`,
      {
        fullname: data.fullname,
        position: data.position,
        type: data.type,
        image: data.image,
        cloudinaryid: data.cloudinaryid,
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
export const deleteOfficial = async (data) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/official/${data?.id}`,
      {
        data: { cloudinaryid: data?.cloudinaryid },
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

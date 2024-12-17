import axios from "axios";

export const getAllOfficials = async () => {
  try {
    const response = await axios.get(
      "https://barangay-bonbon-backend.onrender.com/official/"
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
export const creatrOfficial = async (officialdata) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/official/",
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
      "https://barangay-bonbon-backend.onrender.com/official/position",
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
      `https://barangay-bonbon-backend.onrender.com/official/${data.id}`,
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
      `https://barangay-bonbon-backend.onrender.com/official/${data?.id}`,
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

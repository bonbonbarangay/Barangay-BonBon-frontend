import axios from "axios";

export const createLocation = async (locationdata) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/map",
      locationdata
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
export const getAllLocations = async () => {
  try {
    const response = await axios.get(
      "https://barangay-bonbon-backend.onrender.com/map"
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
export const deleteLocation = async (id) => {
  try {
    const response = await axios.delete(
      `https://barangay-bonbon-backend.onrender.com/map/${id}`
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
export const updateLocationDrag = async (data) => {
  try {
    const response = await axios.put(
      `https://barangay-bonbon-backend.onrender.com/map/draglocation/${data.id}`,
      {
        latitude: data.latitude,
        longitude: data.longitude,
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
export const updateData = async (data) => {
  try {
    const response = await axios.put(
      `https://barangay-bonbon-backend.onrender.com/map/${data.id}`,
      {
        projecttitle: data.projecttitle,
        projectlocation: data.projectlocation,
        contractor: data.contractor,
        contractpayment: data.contractpayment,
        updatestatus: data.updatestatus,
        datemonitoring: data.datemonitoring,
        issues: data.issues,
        projectengineer: data.projectengineer,
        datestart: data.datestart,
        overall: data.overall,
        color: data.color,
        budgetyear: data.budgetyear,
        latitude: data.latitude,
        longitude: data.longitude,
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

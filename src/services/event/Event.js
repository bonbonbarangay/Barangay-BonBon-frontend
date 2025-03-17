import axios from "axios";
import dayjs from "dayjs";
export const getAllEvent = async () => {
  try {
    const response = await axios.get(
      "https://barangay-bonbon-backend.onrender.com/event"
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
export const createEvent = async (eventdata) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/event",

      eventdata
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

export const updateEvent = async (data) => {
  try {
    const response = await axios.put(
      `https://barangay-bonbon-backend.onrender.com/event/${data.id}`,
      {
        title: data.title,
        date: data.date,
        location: data.location,
        description: data.description,
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

export const deleteEvent = async (data) => {
  try {
    const response = await axios.delete(
      `https://barangay-bonbon-backend.onrender.com/event/${data?.id}`,
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

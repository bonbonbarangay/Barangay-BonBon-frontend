import axios from "axios";

export const getAllEvent = async () => {
  try {
    const response = await axios.get("http://localhost:4000/event");

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
    const response = await axios.post("http://localhost:4000/event", eventdata);
    console.log(response);
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
    const response = await axios.put(`http://localhost:4000/event/${data.id}`, {
      title: data.title,
      date: data.date,
      location: data.location,
      description: data.description,
      image: data.image,
      cloudinaryid: data.cloudinaryid,
    });
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
      `http://localhost:4000/event/${data?.id}`,
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

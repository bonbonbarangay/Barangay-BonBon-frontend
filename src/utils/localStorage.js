export const saveToLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Could not save to localStorage", error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) return undefined; // Key doesn't exist
    return JSON.parse(serializedValue); // Parse JSON back to object
  } catch (error) {
    console.error("Could not read from localStorage", error);
    return undefined;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Could not remove from localStorage", error);
  }
};

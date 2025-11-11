import axios from "axios";

const BASE_URL = "http://localhost:3001";

// Fetch logged-in user's profile
export const getProfile = async () => {
  if (typeof window === "undefined") {
    throw new Error("Cannot access localStorage on the server");
  }

  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  try {
    const res = await axios.get(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data; // Should return { user, userdesc } or similar
    console.log(res.data)
  } catch (err: any) {
    throw err.response?.data || { message: "Failed to fetch profile" };
  }
};

// Create user description (only if not exists)
export const createProfileDesc = async (data: any) => {
  if (typeof window === "undefined") {
    throw new Error("Cannot access localStorage on the server");
  }

  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  try {
    const res = await axios.post(`${BASE_URL}/profile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err: any) {
    throw err.response?.data || { message: "Failed to create profile description" };
  }
};

export const updateProfileDesc = async (data: any) => {
  if (typeof window === "undefined") {
    throw new Error("Cannot access localStorage on the server");
  }

  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  try {
    const res = await axios.put(`${BASE_URL}/profile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data; // Updated userdesc
  } catch (err: any) {
    throw err.response?.data || { message: "Failed to update profile description" };
  }
};
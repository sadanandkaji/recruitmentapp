import axios from "axios";

// Function to fetch user profile
export const getProfile = async () => {
  if (typeof window === "undefined") {
    throw new Error("Cannot access localStorage on the server");
  }

  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  try {
    const res = await axios.get("https://staging.1st-httpdev.sadanandkaji.com/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data; // { id, username, type }
  } catch (err: any) {
    throw err.response?.data || { message: "Failed to fetch profile" };
  }
};

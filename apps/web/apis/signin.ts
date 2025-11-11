import axios from "axios";

// Function to handle signin API call
export const signin = async (username: string, password: string) => {
  try {
    const res = await axios.post("http://localhost:3001/signin", {
      username,
      password,
    });

    return res.data; // { token: "...", message: "Signin successful" }
  } catch (err: any) {
    throw err.response?.data || { message: "Signin failed" };
  }
};

"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authapi } from "../../../apis/authapi";

export default function AuthPage() {
  const router = useRouter();
  const params = useParams<{ type: string }>();
  const [isClient, setIsClient] = useState(false);
  const [message, setMessage] = useState<string | null>(null); // ✅ state to show feedback

  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true); // ensures hydration consistency
  }, []);

  if (!isClient) return null;

  const handleSignup = async () => {
    const username = usernameref.current?.value.trim() || "";
    const password = passwordref.current?.value.trim() || "";
    const type = params?.type || "student";

    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const res = await authapi(username, password, type);

      if (res?.message === "Signup successful") {
        setMessage("Signup successful!");
        setTimeout(() => router.push("/signin"), 1000); 
      } else {
        setMessage("Signup failed. Try again.");
      }
    } catch (e) {
      console.error(e);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="pt-10 flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 w-80">
        <h2 className="text-center text-xl font-semibold">
          {params.type === "recruiter" ? "Recruiter Signup" : "Student Signup"}
        </h2>

        <input
          ref={usernameref}
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          ref={passwordref}
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div
          onClick={handleSignup}
          className="flex justify-center bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Submit
        </div>

        {message && (
          <div className="text-center text-sm text-green-600 font-medium">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

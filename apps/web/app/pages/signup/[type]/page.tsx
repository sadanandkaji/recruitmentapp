"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { authapi } from "../../../../apis/authapi";
import { Button } from "@repo/ui/button";

export default function SignupPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleSignup = async () => {
    const username = usernameref.current?.value.trim() || "";
    const password = passwordref.current?.value.trim() || "";

    if (!username || !password) {
      setMessage("Please fill all fields");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await authapi(username, password, "signup");
      if (res?.message === "Signup successful") {
        setMessage("Signup successful!");
        setTimeout(() => router.push("/pages/signin"), 1000);
      } else {
        setMessage("Signup failed. Try again.");
      }
    } catch (e) {
      console.error(e);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 flex flex-col gap-5 w-80">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Sign up
        </h2>

        <input
          ref={usernameref}
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          ref={passwordref}
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button
          variant="primary"
          content={loading ? "Please wait..." : "Sign Up"}
          onClick={handleSignup}
          loading={loading}
          fullWidth
          className="!bg-blue-600 hover:!bg-blue-700 text-white text-sm rounded-lg py-2.5"
        />

        {message && (
          <div
            className={`text-center text-sm font-medium ${
              message.includes("successful")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

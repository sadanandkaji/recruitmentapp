"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signin } from "../../../apis/signin";
import { Button } from "@repo/ui/button";

export default function SigninPage() {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async () => {
    setLoading(true);
    setError("");

    const username = usernameRef.current?.value.trim() || "";
    const password = passwordRef.current?.value.trim() || "";

    if (!username || !password) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const data = await signin(username, password);
      const token = data.token;

      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }

      router.push("/pages/profile");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 flex flex-col gap-5 w-80">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Sign in
        </h2>

        {error && (
          <p className="text-red-500 text-center text-sm font-medium">{error}</p>
        )}

        <input
          ref={usernameRef}
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button
          variant="primary"
          content={loading ? "Signing in..." : "Sign In"}
          onClick={handleSignin}
          loading={loading}
          fullWidth
          className="!bg-blue-600 hover:!bg-blue-700 text-white text-sm rounded-lg py-2.5"
        />
      </div>
    </div>
  );
}

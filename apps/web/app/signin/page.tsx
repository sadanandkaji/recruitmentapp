"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signin } from "../../apis/signin";

export default function SigninPage() {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    try {
      const data = await signin(username, password);
      const token = data.token;

      // Safe localStorage usage
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
        const tokenFromStorage = localStorage.getItem("token");
        console.log("Token saved:", tokenFromStorage);
      }

      router.push("/profile");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignin}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            ref={usernameRef}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            ref={passwordRef}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

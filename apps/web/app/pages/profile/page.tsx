"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProfile, createProfileDesc, updateProfileDesc } from "../../../apis/profile";

interface UserProfile {
  id: string;
  username: string;
  type: string | null;
  description?: {
    firstName: string;
    middleName?: string;
    lastName: string;
    skills: string[];
    isExperienced: boolean;
    yearsOfExperience?: number | null;
    collegeName: string;
    course: string;
    passoutYear: number;
  } | null;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    skills: "",
    isExperienced: false,
    yearsOfExperience: "",
    collegeName: "",
    course: "",
    passoutYear: "",
  });

  const fetchProfile = async () => {
    try {
      const profileData = await getProfile();
      setUser(profileData);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Unauthorized");
      router.push("/pages/signin");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()),
      yearsOfExperience: formData.isExperienced ? Number(formData.yearsOfExperience) : null,
      passoutYear: Number(formData.passoutYear),
    };

    try {
      if (user?.description) {
        // ✅ Update existing description
        await updateProfileDesc(payload);
      } else {
        // ✅ Create if no description yet
        await createProfileDesc(payload);
      }

      await fetchProfile(); // refresh data after save
      setIsEditing(false);
      alert("✅ Profile saved successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save profile");
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500">{error}</p>
      </div>
    );

  const desc = user?.description;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg transform transition-all hover:scale-[1.01]">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-700 tracking-tight">
          Profile
        </h1>

        {/* If user has description and not editing */}
        {desc && !isEditing ? (
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile Avatar"
              className="w-28 h-28 rounded-full shadow-md border-2 border-blue-200"
            />

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {desc.firstName} {desc.middleName ?? ""} {desc.lastName}
              </h2>
              <p className="text-gray-500">@{user?.username}</p>
              <p className="text-sm text-blue-600 font-semibold">{user?.type ?? "N/A"}</p>
            </div>

            <hr className="w-full border-gray-200" />

            <div className="text-gray-700 text-left w-full space-y-2">
              <p>
                <strong>Skills:</strong> {desc.skills.join(", ")}
              </p>
              <p>
                <strong>Experience:</strong>{" "}
                {desc.isExperienced ? `${desc.yearsOfExperience} years` : "Fresher"}
              </p>
              <p>
                <strong>College:</strong> {desc.collegeName}
              </p>
              <p>
                <strong>Course:</strong> {desc.course}
              </p>
              <p>
                <strong>Passout Year:</strong> {desc.passoutYear}
              </p>
            </div>

            <button
              onClick={() => {
                setIsEditing(true);
                setFormData({
                  firstName: desc.firstName,
                  middleName: desc.middleName || "",
                  lastName: desc.lastName,
                  skills: desc.skills.join(", "),
                  isExperienced: desc.isExperienced,
                  yearsOfExperience: desc.yearsOfExperience?.toString() || "",
                  collegeName: desc.collegeName,
                  course: desc.course,
                  passoutYear: desc.passoutYear.toString(),
                });
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          // Form for creating or editing profile
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              {desc ? "Edit Your Profile" : "Create Your Profile"}
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                className="border p-2 rounded"
                onChange={handleChange}
                required
              />
              <input
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                className="border p-2 rounded"
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                className="border p-2 rounded col-span-2"
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="skills"
              placeholder="Skills (comma separated)"
              value={formData.skills}
              className="border p-2 rounded w-full"
              onChange={handleChange}
              required
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isExperienced"
                checked={formData.isExperienced}
                onChange={handleChange}
              />
              <span>Experienced?</span>
            </label>

            {formData.isExperienced && (
              <input
                name="yearsOfExperience"
                placeholder="Years of Experience"
                value={formData.yearsOfExperience}
                className="border p-2 rounded w-full"
                onChange={handleChange}
                required
              />
            )}

            <input
              name="collegeName"
              placeholder="College Name"
              value={formData.collegeName}
              className="border p-2 rounded w-full"
              onChange={handleChange}
              required
            />
            <input
              name="course"
              placeholder="Course"
              value={formData.course}
              className="border p-2 rounded w-full"
              onChange={handleChange}
              required
            />
            <input
              name="passoutYear"
              placeholder="Passout Year"
              value={formData.passoutYear}
              className="border p-2 rounded w-full"
              onChange={handleChange}
              required
            />

            <div className="flex justify-between gap-3">
              {desc && (
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-full bg-gray-400 text-white py-2 rounded-lg shadow hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

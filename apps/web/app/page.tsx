// import { Button } from "@repo/ui/button";
// import  {client} from "@repo/db/client";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-center px-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
        Welcome to RecruitMe
      </h1>

      <p className="max-w-2xl text-gray-700 text-lg mb-8">
        RecruitMe is your all-in-one recruitment platform designed to connect students, 
        job seekers, and professionals with internships, jobs, mentorships, and competitions. 
        Our goal is to simplify your career journey — from learning to landing your dream opportunity.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
        <button className="bg-white border border-blue-500 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100 transition">
          Login
        </button>
      </div>
    </div>
  );
}


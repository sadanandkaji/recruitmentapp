"use client"
// import { Button } from "@repo/ui/button";
import  {client} from "@repo/db/client";
import { useRouter } from "next/navigation";

export default function Home() {

  const router=useRouter()
   const handleClick = (type:string) => {
    router.push(`/pages/signup/${type}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-center px-6">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
        Welcome to RecruitMe
      </h1>

      <p className="max-w-2xl text-gray-700 text-lg mb-8">
        RecruitMe is your all-in-one recruitment platform designed to connect students and organisations
      </p>

      <div >
        <div className="text-bold text-3xl">
          Are you recruiter or a student
        </div>
        <div className="flex justify-center pt-3 gap-2">

        <button         
        onClick={() => handleClick("recruiter")}
className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition ">
          recruiter
        </button>
        <button 
         onClick={() => handleClick("student")}
        className="bg-white border border-blue-500 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100 transition">
          student
        </button>
        </div>
      </div>
    </div>
  );
}


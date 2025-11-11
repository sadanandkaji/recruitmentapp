"use client";

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      company: "Google",
      position: "Frontend Developer",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹15–25 LPA",
      description:
        "Work on Google’s core web applications and optimize user experience with React and Next.js.",
    },
    {
      id: 2,
      company: "Amazon",
      position: "Backend Engineer",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹18–28 LPA",
      description:
        "Design scalable APIs and microservices for high-performance cloud applications on AWS.",
    },
    {
      id: 3,
      company: "Microsoft",
      position: "DevOps Engineer",
      location: "Pune, India",
      type: "Remote",
      salary: "₹14–22 LPA",
      description:
        "Automate CI/CD pipelines and manage cloud infrastructure with Azure DevOps.",
    },
    {
      id: 4,
      company: "Tesla",
      position: "AI Software Engineer",
      location: "Remote",
      type: "Contract",
      salary: "₹20–35 LPA",
      description:
        "Contribute to AI-based automation systems for Tesla’s vehicle and manufacturing platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
        Job Openings
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl w-full max-w-xs p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {job.position}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">{job.company}</span> — {job.location}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {job.type} | {job.salary}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
            </div>
            <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

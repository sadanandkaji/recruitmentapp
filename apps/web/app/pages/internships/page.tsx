"use client";

export default function Internships() {
  const internships = [
    {
      id: 1,
      company: "Google",
      role: "Software Engineering Intern",
      location: "Bangalore, India",
      duration: "6 months",
      description:
        "Work with experienced engineers to build scalable systems and learn industry best practices.",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Data Science Intern",
      location: "Hyderabad, India",
      duration: "3 months",
      description:
        "Apply data analytics and machine learning to derive insights from massive datasets.",
    },
    {
      id: 3,
      company: "Tesla",
      role: "AI Research Intern",
      location: "Remote",
      duration: "4 months",
      description:
        "Assist in developing and optimizing AI models for autonomous systems.",
    },
    {
      id: 4,
      company: "Amazon",
      role: "Cloud Engineering Intern",
      location: "Chennai, India",
      duration: "5 months",
      description:
        "Contribute to AWS services and build solutions for cloud scalability and reliability.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
        Internship Opportunities
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {internships.map((intern) => (
          <div
            key={intern.id}
            className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl w-full max-w-xs p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {intern.role}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">{intern.company}</span> — {intern.location}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Duration: {intern.duration}
              </p>
              <p className="text-gray-700 mb-4">{intern.description}</p>
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

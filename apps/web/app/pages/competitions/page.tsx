"use client";

export default function Competition() {
  const competitions = [
    {
      id: 1,
      title: "AI Innovation Challenge",
      date: "Nov 20, 2025",
      description: "Build AI solutions to tackle real-world problems and win exciting prizes.",
    },
    {
      id: 2,
      title: "Hack the Future",
      date: "Dec 5, 2025",
      description: "A 48-hour coding marathon to solve tech challenges from top companies.",
    },
    {
      id: 3,
      title: "Design Sprint 2025",
      date: "Jan 10, 2026",
      description: "Compete with designers to create impactful UI/UX prototypes.",
    },
    {
      id: 4,
      title: "Startup Pitch Battle",
      date: "Feb 1, 2026",
      description: "Pitch your startup idea to investors and get funding opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
        Competitions
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {competitions.map((comp) => (
          <div
            key={comp.id}
            className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl w-full max-w-xs p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {comp.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{comp.date}</p>
              <p className="text-gray-700 mb-4">{comp.description}</p>
            </div>
            <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

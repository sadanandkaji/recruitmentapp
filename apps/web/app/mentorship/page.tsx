export default function Mentorship() {
  const mentors = [
    {
      name: "Dr. Aisha Patel",
      title: "AI Research Mentor",
      description: "Guiding students in Machine Learning, AI Ethics, and NLP research projects.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Ravi Kumar",
      title: "Full Stack Developer Mentor",
      description: "Helps students build production-grade web apps using React, Node.js, and DevOps tools.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Anjali Sharma",
      title: "Data Science Mentor",
      description: "Expert in Python, TensorFlow, and real-world data analytics mentorship.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">Mentorship Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{mentor.name}</h2>
            <p className="text-blue-600 font-medium">{mentor.title}</p>
            <p className="text-gray-600 mt-2 text-sm">{mentor.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

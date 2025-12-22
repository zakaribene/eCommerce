import { FaRocket, FaUsers, FaBullseye } from "react-icons/fa";

export default function About() {
  return (
  
    <div className="max-w-4xl mx-auto mt-12 p-6">
      
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4">
        About Us
      </h1>

      {/* Intro Text */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10 leading-7">
        We are a modern and fast-growing digital brand focused on creativity,
        clean user experience, and delivering high-quality solutions that help
        people achieve more.
      </p>

      {/* 3 Info Cards */}
      <div className="grid sm:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all">
          <div className="flex justify-center">
            <FaRocket className="text-blue-600" size={45} />
          </div>
          <h2 className="text-xl font-semibold text-center mt-3">Innovation</h2>
          <p className="text-gray-500 text-center mt-2 text-sm">
            We focus on creating advanced and user-friendly digital solutions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all">
          <div className="flex justify-center">
            <FaUsers className="text-blue-600" size={45} />
          </div>
          <h2 className="text-xl font-semibold text-center mt-3">Our Team</h2>
          <p className="text-gray-500 text-center mt-2 text-sm">
            A passionate and creative team working to deliver the best results.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all">
          <div className="flex justify-center">
            <FaBullseye className="text-blue-600" size={45} />
          </div>
          <h2 className="text-xl font-semibold text-center mt-3">Our Mission</h2>
          <p className="text-gray-500 text-center mt-2 text-sm">
            To create simple, smart, and powerful tools for everyday users.
          </p>
        </div>

      </div>

      {/* Vision Section */}
      <div className="mt-14 bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
          <FaBullseye size={25} /> Our Vision
        </h2>
        <p className="text-gray-700 mt-3 leading-7">
          Our vision is to become a leading digital solution provider by
          delivering innovative, fast, and reliable services that elevate
          businesses and individuals worldwide.
        </p>
      </div>

    </div>
  );
}

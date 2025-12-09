import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6">

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4">
        Contact Us
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10 leading-7">
        Have questions or need support? Feel free to reach out to us anytime.
        We're here to help and respond as soon as possible.
      </p>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        
        {/* Phone */}
        <div className="p-6 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <FaPhoneAlt className="mx-auto text-blue-600" size={40} />
          <h3 className="text-lg font-semibold mt-3">Phone</h3>
          <p className="text-gray-500 text-sm mt-1">+252 614 775 599</p>
        </div>

        {/* Email */}
        <div className="p-6 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <FaEnvelope className="mx-auto text-blue-600" size={40} />
          <h3 className="text-lg font-semibold mt-3">Email</h3>
          <p className="text-gray-500 text-sm mt-1">support@example.com</p>
        </div>

        {/* Location */}
        <div className="p-6 bg-white rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <FaMapMarkerAlt className="mx-auto text-blue-600" size={40} />
          <h3 className="text-lg font-semibold mt-3">Location</h3>
          <p className="text-gray-500 text-sm mt-1">Mogadishu, Somalia</p>
        </div>

      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea 
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid sm:grid-cols-3 gap-10">

          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Zack Company</h2>
            <p className="text-gray-400 leading-6">
              We provide high-quality digital solutions, modern design,
              and user-friendly experiences that help people grow.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>

            <div className="flex items-center gap-4 text-2xl">
              <Link className="hover:text-blue-500" href="#">
                <FaFacebook />
              </Link>
              <Link className="hover:text-pink-500" href="#">
                <FaInstagram />
              </Link>
              <Link className="hover:text-blue-400" href="#">
                <FaTwitter />
              </Link>
              <Link className="hover:text-red-500" href="#">
                <FaYoutube />
              </Link>
            </div>
          </div>

        </div>

        {/* Line */}
        <div className="h-px bg-gray-700 my-8"></div>

        {/* Bottom Section */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Zack Company — All Rights Reserved.
        </p>

      </div>
    </footer>

  );
  // <Footer/>
}

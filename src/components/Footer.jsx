import { Github, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#401A6D] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/20">
          {/* Logo + Socials */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold block mb-4">Urgent2kay</span>

            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                aria-label="Github"
                className="hover:text-[#E8BF31] transition"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#E8BF31] transition"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto md:mx-0 w-full">
            <h4 className="text-xl font-bold mb-1">Join our newsletter</h4>
            <p className="text-gray-200 mb-4 text-sm">
              Keep up to date with everything Urgent2Kay.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-lg bg-white text-gray-700 text-sm outline-none"
              />

              <button
                type="submit"
                className="text-white bg-transparent px-6 py-3 rounded-full text-sm font-semibold border-[#E8BF31] border-2
                hover:bg-[#967604] transition-all duration-300 hover:scale-105"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 my-12">
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Generate Request</a>
              </li>
              <li>
                <a href="#">Transaction History</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Our Teams</a>
              </li>
              <li>
                <a href="#">Our Values</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs gap-3">
          <div className="flex space-x-4">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>

          <span>
            &copy; {new Date().getFullYear()} Urgent2kay. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8D7B68] text-white py-10 mt-6 ">
      <div className="container mx-auto text-center">
        <p className="mb-4 font-semibold">
          &copy; {new Date().getFullYear()} <span className="font-bold">Discount PRO</span>. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/amin.dx.9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#A4907C] transition"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://x.com/AminulIsla94920"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#A4907C] transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aminul-islam-a278b1217/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#A4907C] transition"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#A4907C] transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="font-semibold">
          Built with 🖤 by{" "}
          <a
            href="https://github.com/KevAkaSlayer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#A4907C] hover:underline"
          >
            Kev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

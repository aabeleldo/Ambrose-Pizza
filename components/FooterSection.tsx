import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-6 text-center">

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src="/ambrose-logo-white.png"
          alt="Ambrose Pizza & Wings"
          className="w-32 object-contain opacity-90"
        />
      </div>

      <p className="text-neutral-600 text-sm mb-6">Authentic • Homemade • Fresh</p>

      {/* Nav links */}
      <div className="flex justify-center gap-6 text-neutral-500 text-sm mb-6">
        <a href="#menu" className="hover:text-red-400 transition-colors">Menu</a>
        <a href="#order" className="hover:text-red-400 transition-colors">Order</a>
        <a href="#about" className="hover:text-red-400 transition-colors">About</a>
        <a href="#hours" className="hover:text-red-400 transition-colors">Hours</a>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-5 mb-8">
        
          <a href="https://instagram.com/ambrosepizza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-red-400 transition-colors duration-200"
        >
          <FaInstagram size={22} />
        </a>
        
          <a href="https://facebook.com/ambrosepizza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-red-400 transition-colors duration-200"
        >
          <FaFacebook size={22} />
        </a>
      </div>

      <p className="text-neutral-700 text-xs">
        © {new Date().getFullYear()} Ambrose Pizza & Wings. All rights reserved.
      </p>

    </footer>
  );
}
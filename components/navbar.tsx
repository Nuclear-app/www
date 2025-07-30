const Navbar = () => {
  return (
    <nav className="w-full px-28 py-6">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="text-3xl font-bold">
            Nuclear
          </div>
          
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact 
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            Devlog
          </a>
        </div>
        
        {/* Sign Up Button */}
        <button className="bg-[#9000FF80] text-black px-4 py-2 text-lg font-bold rounded-lg hover:shadow-xl transition-all duration-300 shadow-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

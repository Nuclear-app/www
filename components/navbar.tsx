const Navbar = () => {
  return (
    <nav className="w-full px-28 py-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Nuclear
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
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
          <button className="bg-[radial-gradient(60.55%_92.4%_at_50%_50%,#F3EBE6_16.24%,rgba(243,235,230,0.00)_100%),conic-gradient(from_90deg_at_50%_50%,#9000FF_24.82162892818451deg,#00D3BE_154.70458030700684deg,#E46300_193.7494969367981deg,#E16009_338.3097267150879deg)] text-black px-6 py-2 text-2xl font-bold rounded-lg hover:shadow-xl transition-all duration-300 shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="w-full h-16 relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white font-semibold top-0 z-50 shadow-lg">
    <div className="absolute inset-0 bg-black/50">
    <div className="container mx-auto px-6 flex items-center justify-between h-full"> 
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-400 transition">
            MyBlog<span className="text-blue-500">.</span>
          </Link>
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          <Link
            href="/"
            className="hover:text-blue-400 hover:underline transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 hover:underline transition"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-blue-400 hover:underline transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 hover:underline transition"
          >
            Contact
          </Link>
        </div>
      </div>
      </div>      
    </nav>
  );
}



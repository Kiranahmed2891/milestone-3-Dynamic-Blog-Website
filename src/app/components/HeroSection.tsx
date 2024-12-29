import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white h-screen flex flex-col items-center justify-center text-center px-6">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Welcome to My <span className="text-yellow-300">Blog Website</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Discover insightful articles, engaging stories, and a treasure trove of information tailored just for you. Join us on this journey of knowledge and inspiration.
                </p>
                <div className="flex space-x-4">
                    <Link
                        href="#blog"
                        className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
                    >
                        Explore Blog
                    </Link>
                    <Link
                        href="/about"
                        className="px-6 py-3 bg-white/20 text-white border border-white font-semibold rounded-lg shadow-lg hover:bg-white/30 transition"
                    >
                        About Us
                    </Link>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 opacity-20 rounded-full w-96 h-96 absolute -top-16 -left-0 animate-pulse"></div>
                <div className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 opacity-20 rounded-full w-96 h-96 absolute -bottom-32 right-0 animate-pulse"></div>
            </div>
        </div>
    );
};

export default HeroSection;



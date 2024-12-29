import Link from "next/link";
export default function Contact() {
    return (
        <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen flex flex-col items-center justify-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
              {/* Decorative Elements */}
              <div className="absolute inset-0">
                <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 opacity-20 rounded-full w-96 h-96 absolute -top-16 -left-0 animate-pulse"></div>
                <div className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 opacity-20 rounded-full w-96 h-96 absolute -bottom-32 right-0 animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-16 relative z-10">
                <h1 className="text-5xl mt-4 font-bold text-center mb-6">Get in Touch</h1>
                <p className="text-lg max-w-2xl mx-auto text-center mb-12">
                    Have a question, feedback, or just want to say hello? Feel free to reach out through the form below. I’d love to hear from you!
                </p>

                {/* Contact Form */}
                <form className="max-w-4xl mx-auto bg-slate-300 text-gray-800 rounded-lg shadow-lg p-8 space-y-6">
                    <div>
                        <label className="text-lg font-bold">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 mt-2 bg-slate-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label className=" text-lg font-bold">Your Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 mt-2 border bg-slate-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-lg font-bold">Your Message</label>
                        <textarea
                            rows={5}
                            placeholder="Write your message here"
                            className="w-full px-4 py-3 mt-2 border bg-slate-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Contact Details */}
                <div className="mt-16 text-center">
                    <p className="text-lg font-semibold mb-2">You can also reach me at:</p>
                    <p>
                        Email:{" "}
                        <Link
                            href="mailto:your-email@example.com"
                            className="text-yellow-300 hover:underline"
                        >
                            your-email@example.com
                        </Link>
                    </p>
                    <p>
                        Phone:{" "}
                        <Link
                            href="tel:+123456789"
                            className="text-yellow-300 hover:underline"
                        >
                            +123 456 789
                        </Link>
                    </p>
                    <p>Location: Blog City, Your Country</p>
                </div>
            </div>
        </div>
    );
}

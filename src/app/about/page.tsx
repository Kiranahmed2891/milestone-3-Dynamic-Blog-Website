import Image from "next/image";
export default function About() {
    return (
        <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white min-h-screen flex items-center justify-center">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container mx-auto px-6 py-16 text-center lg:text-left relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    {/* Image Section */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <Image
                            src="/images/pic.PNG"
                            alt="Your Name"
                            width={200}
                            height={200}
                            className="rounded-full w-96 h-96 mx-auto lg:mx-0 border-4 border-yellow-300 shadow-lg"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/3 lg:pl-12">
                        <h1 className="text-5xl font-bold mb-6">About Me</h1>
                        <p className="text-lg mb-4 leading-relaxed">
                            Welcome to my blog! I am <span className="text-yellow-300 font-semibold">Kiran Ahmed</span>, a passionate Fullstack Developer, writer, and tech enthusiast. 
                            I created this platform to share insights, tutorials, and experiences about web development, particularly with tools like <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, and modern web technologies.
                        </p>
                        <p className="text-lg mb-4 leading-relaxed">
                            With years of experience in building dynamic, responsive websites, I aim to make web development more accessible and enjoyable for everyone. Whether you are a beginner or a seasoned developer, you will find valuable resources and inspiration here.
                        </p>
                        <p className="text-lg mb-4 leading-relaxed">
                            When I am not coding or writing, I love exploring new tech trends, experimenting with creative designs, and helping others in the tech community grow. This blog is not just about sharing knowledge; it is about building a community where we can all learn and thrive together.
                        </p>
                        <p className="text-lg mb-4 leading-relaxed">
                            Feel free to <a href="/contact" className="bg-yellow-300 text-black hover:text-blue-600 hover:underline">reach out</a> if you have any questions, suggestions, or just want to say hi. I would love to connect with you!
                        </p>
                        <p className="text-lg font-semibold mt-6">
                            Lets embark on this journey of knowledge, creativity, and growth together.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0">
                <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 opacity-20 rounded-full w-96 h-96 absolute -top-16 -left-0 animate-pulse"></div>
                <div className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 opacity-20 rounded-full w-96 h-96 absolute -bottom-32 -right-0 animate-pulse"></div>
            </div>
        </div>
    );
}



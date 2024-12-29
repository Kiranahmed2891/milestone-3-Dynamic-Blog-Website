 import Link from "next/link";
 import Image  from "next/image";


// Type for blog posts
type Post = {
    id: string;
    title: string;
    content: string;
    image: string;
};

// Sample blog posts
const posts: Post[] = [
    {
        id: "1",
        title: "Introduction to Next.js",
        content: "Learn the basics of Next.js in this post.",
        image: "/images/introduction.webp",
    },
    {
        id: "2",
        title: "Routing in Next.js",
        content: "A guide to dynamic routing in Next.js.",
        image: "/images/routing.webp",
    },
    {
        id: "3",
        title: "Deploying Next.js Apps",
        content: "Tips for deploying your Next.js applications.",
        image: "/images/Deploying.webp",
    },
    {
        id: "4",
        title: "Optimizing Next.js Performance",
        content: "Boost your app performance with these tips.",
        image: "/images/Optimizing.webp",
    },
    {
        id: "5",
        title: "API Routes in Next.js",
        content: "Learn how to build API routes in Next.js.",
        image: "/images/API routes.webp",
    },
];

const Blog = () => {
    return (
        <div id="blog" className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Blog Header */}
            <div className="relative text-center py-16">
                <h1 className="text-5xl font-extrabold tracking-tight">Welcome to My Blog</h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Explore insightful articles, engaging tutorials, and professional tips on web development and Next.js.
                </p>
            </div>

            {/* Blog Carousel */}
            <div className="relative container mx-auto px-6 py-10">
                <h2 className="text-3xl font-semibold mb-6 text-center">Featured Blogs</h2>
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={100}
                                height={100}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-4 text-gray-800">
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="mt-2 text-gray-600">
                                    {post.content.substring(0, 70)}...
                                </p>
                                <Link
                                    href={`/post/${post.id}`}
                                    className="text-blue-500 hover:underline mt-4 block"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
           
                </div>
            </div>
        </div>
    );
};

export default Blog;


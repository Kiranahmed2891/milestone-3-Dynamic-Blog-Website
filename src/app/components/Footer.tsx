// import Link from "next/link";
// import { FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white p-32">
//             <div className="absolute inset-0 bg-black/50">
//             <div className="container mx-auto px-6">
//                 {/* Footer Top Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
//                     {/* Brand Logo */}
//                     <div>
//                         <h2 className="text-2xl font-bold text-blue-500">
//                             MyBlog<span className="text-white">.</span>
//                         </h2>
//                         <p className="text-gray-400 mt-2 max-w-xs">
//                             Sharing insights, stories, and ideas with the world. Stay inspired with our articles and content.
//                         </p>
//                     </div>

//                     {/* Navigation Links */}
//                     <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
//                         <div>
//                             <h3 className="text-lg font-semibold">Quick Links</h3>
//                             <ul className="mt-2 space-y-2">
//                                 <li>
//                                     <Link href="/" className="hover:text-blue-400 transition">
//                                         Home
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/about" className="hover:text-blue-400 transition">
//                                         About
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#blog" className="hover:text-blue-400 transition">
//                                         Blog
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/contact" className="hover:text-blue-400 transition">
//                                         Contact
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold">Contact Us</h3>
//                             <ul className="mt-2 space-y-2">
//                                 <li>
//                                     Email:{" "}
//                                     <Link
//                                         href="mailto:info@myblog.com"
//                                         className="hover:text-blue-400 transition"
//                                     >
//                                         info@myblog.com
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     Phone:{" "}
//                                     <Link
//                                         href="tel:+123456789"
//                                         className="hover:text-blue-400 transition"
//                                     >
//                                         +123 456 789
//                                     </Link>
//                                 </li>
//                                 <li>Address: 123 Blog Street, BlogCity</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom Section */}
//                 <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
//                     {/* Copyright */}
//                     <p className="text-gray-500 text-sm">
//                         &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
//                     </p>

//                     {/* Social Media Links */}
//                     <div className="flex space-x-6 mt-4 md:mt-0">
//                         <Link
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-blue-400 transition"
//                         >
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M24 4.557a9.84 9.84 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.865 9.865 0 0 1-3.127 1.196A4.918 4.918 0 0 0 16.616 3c-2.728 0-4.937 2.2-4.937 4.917 0 .384.042.76.127 1.122C7.691 8.827 4.066 6.884 1.64 3.825a4.904 4.904 0 0 0-.666 2.475c0 1.706.868 3.213 2.188 4.099a4.92 4.92 0 0 1-2.229-.617v.062c0 2.385 1.7 4.374 3.946 4.83-.413.111-.847.171-1.294.171-.315 0-.623-.03-.923-.088a4.925 4.925 0 0 0 4.6 3.42A9.867 9.867 0 0 1 1.178 19a13.94 13.94 0 0 0 7.548 2.21c9.057 0 14.01-7.496 14.01-13.986 0-.213-.006-.426-.015-.637A9.936 9.936 0 0 0 24 4.557z" />
//                             </svg>
//                         </Link>
//                         <Link
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-blue-400 transition"
//                         >
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M22.675 0H1.325C.595 0 0 .587 0 1.312V22.687C0 23.413.595 24 1.325 24h11.483v-9.293H9.645V10.24h3.163V7.803c0-3.131 1.91-4.835 4.698-4.835 1.337 0 2.49.099 2.822.144v3.265l-1.938.001c-1.522 0-1.818.722-1.818 1.783v2.335h3.636l-.474 3.467h-3.162V24h6.203c.729 0 1.324-.587 1.324-1.313V1.313C24 .587 23.404 0 22.675 0z" />
//                             </svg>
//                         </Link>
//                         <Link 
//                             href="https://www.linkedin.com/in/sarwat-majeed" 
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-blue-400 transition"
//                             >
//                                 <FaLinkedin 
//                                 className="w-6 h-6"
//                                 fill="whitecol"
//                                 viewBox="0 0 24 24"
//                             />

//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

// import Link from "next/link";
// import React from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { IoLogoVercel } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
//       <div className="container mx-auto px-6">
//         {/* Footer Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
//           {/* Brand Logo */}
//           <div>
//             <h2 className="text-2xl font-bold text-blue-500">
//               MyBlog<span className="text-white">.</span>
//             </h2>
//             <p className="text-gray-400 mt-2 max-w-xs">
//               Sharing insights, stories, and ideas with the world. Stay inspired
//               with our articles and content.
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
//             <div>
//               <h3 className="text-lg font-semibold">Quick Links</h3>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <Link href="/" className="hover:text-blue-400 transition">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about" className="hover:text-blue-400 transition">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#blog" className="hover:text-blue-400 transition">
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="hover:text-blue-400 transition"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Contact Us</h3>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   Email:{" "}
//                   <Link
//                     href="mailto:info@myblog.com"
//                     className="hover:text-blue-400 transition"
//                   >
//                     info@myblog.com
//                   </Link>
//                 </li>
//                 <li>
//                   Phone:{" "}
//                   <Link
//                     href="tel:+123456789"
//                     className="hover:text-blue-400 transition"
//                   >
//                     +123 456 789
//                   </Link>
//                 </li>
//                 <li>Address: 123 Blog Street, BlogCity</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
//           {/* Copyright */}
//           <p className="text-gray-500 text-sm">
//             &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
//           </p>

//           {/* Social Media Links */}
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-blue-400 transition"
//             >
//               <FaLinkedin size={24} />
//             </Link>
//             <Link
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-blue-400 transition"
//             >
//               <FaGithub size={24} />
//             </Link>
//             <Link
//               href="https://vercel.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-blue-400 transition"
//             >
//               <IoLogoVercel size={24} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white py-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Brand Logo */}
          <div>
            <h2 className="text-2xl font-bold text-blue-300">
              MyBlog<span className="text-white">.</span>
            </h2>
            <p className="text-gray-200 mt-2 max-w-xs">
              Sharing insights, stories, and ideas with the world. Stay inspired with our articles and content.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-300 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-300 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-blue-300 transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  Email:{" "}
                  <Link
                    href="mailto:info@myblog.com"
                    className="hover:text-blue-300 transition"
                  >
                    info@myblog.com
                  </Link>
                </li>
                <li>
                  Phone:{" "}
                  <Link
                    href="tel:+123456789"
                    className="hover:text-blue-300 transition"
                  >
                    +123 456 789
                  </Link>
                </li>
                <li>Address: 123 Blog Street, BlogCity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition"
            >
              <IoLogoVercel size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

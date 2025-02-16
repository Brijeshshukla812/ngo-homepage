// import Link from "next/link";

// const NotFound = () => {
//   return (
//     <div className="common">
//       <h1>not-found</h1>
//       <p>page is not exist</p>

//       <ul>
//         <li>go to home page</li>
//       </ul>
//     </div>
//   );
// };

// export default NotFound;

import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Back Home
      </a>
    </div>
  );
}

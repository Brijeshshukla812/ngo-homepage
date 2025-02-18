// "use client";
// import Link from "next/link";
// import { Button } from "@mui/material";
// import "animate.css";

// export default function NotFoundPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 animate__animated animate__fadeIn">
//       {/* 404 Text */}
//       <h1 className="text-6xl font-bold text-gray-900 animate__animated animate__bounceIn">
//         404
//       </h1>
//       <h2 className="text-2xl font-semibold text-gray-700 mt-2 animate__animated animate__fadeInUp">
//         Page Not Found
//       </h2>
//       <p className="text-gray-600 mt-4 animate__animated animate__fadeInUp">
//         Oops! The page you&apos;re looking for doesn&apos;t exist.
//       </p>

//       {/* Back to Home Button */}
//       <Link href="/">
//         <Button
//           variant="contained"
//           color="primary"
//           className="mt-6 animate__animated animate__pulse animate__infinite"
//         >
//           Back to Home Page
//         </Button>
//       </Link>

//       {/* Animation Image */}
//       <div className="mt-10 animate__animated animate__zoomIn">
//         <img src="/404.svg" alt="Page Not Found" className="w-80 mx-auto" />
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { Button } from "@mui/material";
import "animate.css";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 animate__animated animate__fadeIn">
      {/* 404 Text */}
      {/* 
      
      
      */}

      <div className="mt-10 animate__animated animate__zoomIn">
        <img
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif" // Motion GIF
          alt="Lost in Space"
          className="w-80 mx-auto"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mt-2 animate__animated animate__fadeInUp">
        Page Not Found
      </h2>
      <p className="text-gray-600 my-4 animate__animated animate__fadeInUp">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      {/* Back to Home Button */}
      <Link href="/">
        <Button
          variant="contained"
          color="primary"
          className="mt-6 animate__animated animate__pulse animate__infinite"
        >
          Back to Home Page
        </Button>
      </Link>

      {/* Motion GIF */}
    </div>
  );
}

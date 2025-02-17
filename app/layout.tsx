// "use client";
// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // import Lenis from 'lenis'
// import Lenis from "@studio-freight/lenis";
// import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "NGO Homepage",
//   description: "Homepage for an NGO to support community development.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // useEffect(() => {
//   //   // Initialize Lenis
//   //   const lenis = new Lenis({
//   //     autoRaf: true,
//   //   });

//   //   // Listen for the scroll event and log the event data
//   //   lenis.on("scroll", (e) => {
//   //     console.log(e);
//   //   });
//   // });

//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true, // Smooth scroll enable karega
//       duration: 1.2, // Smoothness ka duration
//       easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing function
//     });

//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//     return () => {
//       lenis.destroy(); // Cleanup
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <body className="flex flex-col min-h-screen">
//         <Header />
//         {/* <main className="flex-1 pt-[70px] md:pt-0">{children}</main> */}
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "NGO Homepage",
  description: "Homepage for an NGO to support community development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* SmoothScroll should be placed within the layout to apply the scroll behavior */}
      {/* <SmoothScroll /> */}

      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}

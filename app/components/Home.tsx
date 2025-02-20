"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import "swiper/css";
import "./style.css";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "../../assets/scrollImages/images1.jpg";
import img2 from "../../assets/scrollImages/images2.jpg";
import img3 from "../../assets/scrollImages/images3.jpg";
import img4 from "../../assets/scrollImages/images4.jpeg";
import svg from "../../assets/QSImpACT/title-header-right-icon.svg";
import svg1 from "../../assets/QSImpACT/inspiration.svg";
import svg2 from "../../assets/QSImpACT/choose.svg";
import svg3 from "../../assets/QSImpACT/grow.svg";
import svg4 from "../../assets/QSImpACT/upoloadImpact.svg";
import svg5 from "../../assets/QSImpACT/badge.svg";
import svg6 from "../../assets/QSImpACT/user-flow.svg";
import oppo from "../../assets/Scholarships/opportunity-icon.svg";
import thanku1 from "../../assets/thankU/company1.jpg";
import thanku2 from "../../assets/thankU/company2.jpg";
import thanku3 from "../../assets/thankU/company3.png";
import thanku4 from "../../assets/thankU/company4.jpg";
import thanku5 from "../../assets/thankU/company5.jpg";
import thanku6 from "../../assets/thankU/company6.png";
import thanku7 from "../../assets/thankU/company7.png";
import "animate.css"; // Import Animate.css
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// scholarships image
import scholer1 from "../../assets/Scholarships/image1.jpg";
import scholer2 from "../../assets/Scholarships/image2.jpg";
import scholer3 from "../../assets/Scholarships/image3.jpg";
import scholer4 from "../../assets/Scholarships/image4.jpg";
import scholer5 from "../../assets/Scholarships/image5.jpg";
import scholer6 from "../../assets/Scholarships/image6.jpg";
import scholer7 from "../../assets/Scholarships/image7.jpg";

// community image
import community1 from "../../assets/Community/image1.jpg";
import community2 from "../../assets/Community/image2.png";
import community3 from "../../assets/Community/image3.jpg";
import community4 from "../../assets/Community/image4.png";
import community5 from "../../assets/Community/image5.png";
import community6 from "../../assets/Community/image6.png";
import community7 from "../../assets/Community/image7.png";

// goals image
import bg1 from "../../assets/Subscribe/bg.png";
import bg from "../../assets/Goals/bg.png";
import sdg from "../../assets/Goals/sdg.svg";
import { GiPowder, GiFoodTruck, GiHealthPotion } from "react-icons/gi";
import {
  MdSchool,
  MdEqualizer,
  MdWaterDrop,
  MdEnergySavingsLeaf,
  MdWork,
  MdFactory,
  MdBalance,
  MdNaturePeople,
  MdPublic,
  MdPets,
  MdGavel,
  MdHandshake,
} from "react-icons/md";

const slides = [
  {
    title: "QS ImpACT Awards 2024",
    description: "Make an ImpACT. Upload your Story. Win an Award.",
    image: img1,
    btn: "Learn More",
    link: "https://qsimpact.org/awards/",
  },
  {
    title: "GLOBAL DAY OF ACTION",
    description: "Join the movement and take action.",
    image: img2,
    btn: "Take ACtion",
    link: "https://qsimpact.org/",
  },
  {
    title: "BE A COMMUNITY LEADER",
    description: "Co-create solutions with global leaders.",
    image: img3,
    btn: "CONNECT",
    link: "/https://qsimpact.org/councils//",
  },

  {
    title: "BE A COMMUNITY LEADER",
    description: "Co-create solutions with global leaders.",
    image: img4,
    btn: "CONTRIBUTE",
    link: "/https://donate.justgiving.com/charity/qsimpact/donation-amount/",
  },
];

const scholarships = [
  {
    id: 1,
    title: "Bukola STEM Scholarship for Women from Africa",
    points: "100 Points",
    description:
      "This scholarship is for female applicants who are keen to study a STEM program...",
    image: scholer1,
    link: "/scholarships/26/bukola-stem-scholarship-for-women-from-africa/",
    features: [
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
        title: "Quality Education",
      },
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
        title: "Gender Equality",
      },
    ],
  },

  {
    id: 2,
    title: "Bukola STEM Scholarship for Women from Africa",
    points: "100 Points",
    description:
      "This scholarship is for female applicants who are keen to study a STEM program...",
    image: scholer2,
    link: "/scholarships/26/bukola-stem-scholarship-for-women-from-africa/",
    features: [
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
        title: "Quality Education",
      },
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
        title: "Gender Equality",
      },
    ],
  },

  {
    id: 3,
    title: "Bukola STEM Scholarship for Women from Africa",
    points: "100 Points",
    description:
      "This scholarship is for female applicants who are keen to study a STEM program...",
    image: scholer3,
    link: "/scholarships/26/bukola-stem-scholarship-for-women-from-africa/",
    features: [
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
        title: "Quality Education",
      },
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
        title: "Gender Equality",
      },
    ],
  },

  {
    id: 4,
    title: "Bukola STEM Scholarship for Women from Africa",
    points: "100 Points",
    description:
      "This scholarship is for female applicants who are keen to study a STEM program...",
    image: scholer4,
    link: "/scholarships/26/bukola-stem-scholarship-for-women-from-africa/",
    features: [
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
        title: "Quality Education",
      },
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
        title: "Gender Equality",
      },
    ],
  },

  {
    id: 5,
    title: "Bukola STEM Scholarship for Women from Africa",
    points: "100 Points",
    description:
      "This scholarship is for female applicants who are keen to study a STEM program...",
    image: scholer5,
    link: "/scholarships/26/bukola-stem-scholarship-for-women-from-africa/",
    features: [
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
        title: "Quality Education",
      },
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
        title: "Gender Equality",
      },
    ],
  },

  {
    id: 6,
    title: "Bukola STEM Scholarship for Women from Africa",
    points: "100 Points",
    description:
      "This scholarship is for female applicants who are keen to study a STEM program...",
    image: scholer6,
    link: "/scholarships/26/bukola-stem-scholarship-for-women-from-africa/",
    features: [
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
        title: "Quality Education",
      },
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
        title: "Gender Equality",
      },
    ],
  },

  {
    id: 7,
    title: "Bukola STEM Scholarship for Women from Africa",
    points: "100 Points",
    description:
      "This scholarship is for female applicants who are keen to study a STEM program...",
    image: scholer7,
    link: "/scholarships/26/bukola-stem-scholarship-for-women-from-africa/",
    features: [
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
        title: "Quality Education",
      },
      {
        img: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
        title: "Gender Equality",
      },
    ],
  },
];

const impactsData = [
  {
    id: 1,
    title: "Tree Planting with ARCOS",
    image: community1,
    tags: ["Council", "Featured"],
    createdBy: [
      // {
      //   name: "User 1",
      //   image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      // },
      {
        name: "User 2",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
    ],
    features: [
      {
        title: "Partnerships for the goals",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-16.svg",
      },
      // {
      //   title: "Climate action",
      //   icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-12.svg",
      // },
    ],
  },

  {
    id: 2,
    title: "Books for School Project",
    image: community2,
    tags: ["Individual"],
    createdBy: [
      {
        name: "User 3",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
    ],
    features: [
      {
        title: "Quality Education",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
      },
    ],
  },

  {
    id: 3,
    title: "Books for School Project",
    image: community3,
    tags: ["Individual"],
    createdBy: [
      {
        name: "User 3",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
    ],
    features: [
      {
        title: "Quality Education",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Books for School Project",
    image: community4,
    tags: ["Individual"],
    createdBy: [
      {
        name: "User 3",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
    ],
    features: [
      {
        title: "Quality Education",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
      },
    ],
  },

  {
    id: 5,
    title: "Books for School Project",
    image: community5,
    tags: ["Individual"],
    createdBy: [
      {
        name: "User 3",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
    ],
    features: [
      {
        title: "Quality Education",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
      },
    ],
  },

  {
    id: 6,
    title: "Books for School Project",
    image: community6,
    tags: ["Individual"],
    createdBy: [
      {
        name: "User 3",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
    ],
    features: [
      {
        title: "Quality Education",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
      },
    ],
  },

  {
    id: 7,
    title: "Books for School Project",
    image: community7,
    tags: ["Individual"],
    createdBy: [
      {
        name: "User 3",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
    ],
    features: [
      {
        title: "Quality Education",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-3.svg",
      },
    ],
  },
];

const partners = [
  { id: 1, image: thanku1 },
  { id: 2, image: thanku2 },
  { id: 3, image: thanku3 },
  { id: 4, image: thanku4 },
  { id: 5, image: thanku5 },
  { id: 6, image: thanku6 },
  { id: 7, image: thanku7 },
];

const goalsData = [
  {
    id: 1,
    title: "No Poverty",
    color: "rgb(229, 36, 59)",
    icon: <GiPowder className="w-16 h-16 text-white" />,
  },
  {
    id: 2,
    title: "Zero Hunger",
    color: "rgb(221, 166, 58)",
    icon: <GiFoodTruck className="w-16 h-16 text-white" />,
  },
  {
    id: 3,
    title: "Good Health & Wellbeing",
    color: "rgb(76, 159, 56)",
    icon: <GiHealthPotion className="w-16 h-16 text-white" />,
  },
  {
    id: 4,
    title: "Quality Education",
    color: "rgb(197, 25, 45)",
    icon: <MdSchool className="w-16 h-16 text-white" />,
  },
  {
    id: 5,
    title: "Gender Equality",
    color: "rgb(255, 58, 33)",
    icon: <MdEqualizer className="w-16 h-16 text-white" />,
  },
  {
    id: 6,
    title: "Clean Water & Sanitation",
    color: "rgb(38, 189, 226)",
    icon: <MdWaterDrop className="w-16 h-16 text-white" />,
  },
  {
    id: 7,
    title: "Affordable Clean Energy",
    color: "rgb(252, 195, 11)",
    icon: <MdEnergySavingsLeaf className="w-16 h-16 text-white" />,
  },
  {
    id: 8,
    title: "Decent Work & Economic Growth",
    color: "rgb(162, 0, 48)",
    icon: <MdWork className="w-16 h-16 text-white" />,
  },
  {
    id: 9,
    title: "Industry Innovation & Infrastructure",
    color: "rgb(255, 91, 0)",
    icon: <MdFactory className="w-16 h-16 text-white" />,
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    color: "rgb(221, 19, 103)",
    icon: <MdBalance className="w-16 h-16 text-white" />,
  },
  {
    id: 11,
    title: "Sustainable Cities & Communities",
    color: "rgb(253, 157, 36)",
    icon: <MdNaturePeople className="w-16 h-16 text-white" />,
  },
  {
    id: 12,
    title: "Responsible Consumption & Production",
    color: "rgb(191, 139, 46)",
    icon: <MdPublic className="w-16 h-16 text-white" />,
  },
  {
    id: 13,
    title: "Climate Action",
    color: "rgb(63, 126, 68)",
    icon: <MdPets className="w-16 h-16 text-white" />,
  },
  {
    id: 14,
    title: "Life below Water",
    color: "rgb(10, 151, 217)",
    icon: <MdWaterDrop className="w-16 h-16 text-white" />,
  },
  {
    id: 15,
    title: "Life on Land",
    color: "rgb(86, 192, 43)",
    icon: <MdNaturePeople className="w-16 h-16 text-white" />,
  },
  {
    id: 16,
    title: "Peace, Justice & Strong Institutions",
    color: "rgb(0, 104, 157)",
    icon: <MdGavel className="w-16 h-16 text-white" />,
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    color: "rgb(27, 49, 101)",
    icon: <MdHandshake className="w-16 h-16 text-white" />,
  },
];

export default function HeroBannerSlider() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.9,
      // duration: 4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      gestureOrientation: "both", // Mouse and touch gestures for smooth behavior
    });

    // Request Animation Frame (RAF)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll event log
    lenis.on("scroll", () => {
      // console.debug("Scroll event triggered");
    });

    // Scroll start event
    lenis.on("scrollStart", () => {
      // console.log("Scroll started!");
    });

    // Scroll stop event
    lenis.on("scrollStop", () => {
      // console.log("Scroll stopped!");
    });
    

    // Cleanup function
    return () => {
      lenis.destroy();
      // console.log("Lenis destroyed!");
    };
  }, []);

  // for gsap library
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Example animation for the banner section
    gsap.from(".banner-section", {
      // opacity: 0,
      // y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Example animation for the "What we do at QS ImpACT" section
    // gsap.from(".what-we-do-section", {
    //   opacity: 0,
    //   x: -50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".what-we-do-section",
    //     start: "top 80%",
    //   },
    // });

    // // Example animation for the scholarships section
    // gsap.from(".scholarships-section", {
    //   // opacity: 0,
    //   // y: 50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".scholarships-section",
    //     // start: "top 80%",
    //   },
    // });

    // // Example animation for the community section
    // gsap.from(".community-section", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".community-section",
    //     start: "top 80%",
    //   },
    // });

    // // Example animation for the thank you section
    // gsap.from(".thank-you-section", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".thank-you-section",
    //     start: "top 80%",
    //   },
    // });

    // // Example animation for the subscribe section
    // gsap.from(".subscribe-section", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".subscribe-section",
    //     start: "top 80%",
    //   },
    // });

    // // Example animation for the goals section
    // gsap.from(".goals-section", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".goals-section",
    //     start: "top 80%",
    //   },
    // });
  }, []);

  return (
    <>
      {/*banner section */}
      <section className="banner-section mx-auto">
        <style>
          {`
          :root {
            --swiper-theme-color: transparent;
          }
          .swiper-slide {
  cursor: default !important;
}
          .swiper-pagination-bullet {
            background: gray !important; /* Inactive dots color */
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background: white !important; /* Active dot color */
            opacity: 1;
          }
        `}
        </style>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          loop
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative flex justify-center items-center animate__animated animate__fadeIn"
            >
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover animate__animated animate__zoomIn"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white text-center p-4 animate__animated animate__fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold animate__animated animate__fadeInDown">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl my-2 animate__animated animate__fadeInUp">
                  {slide.description}
                </p>

                <a
                  href={slide.link}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition animate__animated animate__pulse hover:animate__heartBeat"
                >
                  {slide.btn}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* What we do at QS ImpACT ---section */}
      <section className="what-we-do-section p-6 animate__animated animate__backInDown">
        <div className="container mx-auto px-4">
          <div className="text-left mb-8">
            <div className="flex justify-between items-center mb-6 gap-4">
              <div className="flex flex-col lg:w-[55%] md:w-[60%] sm:w-[70%] w-full animate__animated animate__rubberBand">
                <h1 className="lg:text-[32px] md:text-[28px] sm:text-[22px] text-[20px] font-semibold text-[#191717]">
                  What we do at QS ImpACT
                </h1>
                <span className="text-[#5d5d5d] font-medium mt-3 lg:text-lg md:text-base sm:text-sm text-xs">
                  We are changing the way the world recognizes young people for
                  their social action. We believe ImpACT speaks louder than
                  words.
                </span>
              </div>
              <div className="ml-2">
                <Image
                  src={svg}
                  alt="Header Icon"
                  className="lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-22 sm:h-22 w-25 h-25"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-between gap-4 py-6 px-4 sm:px-2">
            <div className="w-1/2 bg-[#ffaf00] text-white p-8 sm:p-4 rounded-lg shadow-lg flex flex-col justify-between">
              <span className="text-2xl md:text-xl sm:text-lg font-semibold mb-2 block">
                Knowing & caring about issues in your community is the first
                step.
              </span>
              <span className="text-xl md:text-lg sm:text-base font-semibold mb-6 block">
                Take the next step and create impACT today.
              </span>
              <div className="my-10 px-5 sm:px-2 flex justify-between items-center flex-wrap">
                {[
                  { img: svg1, text: "1. Be Inspired" },
                  { img: svg2, text: "2. Choose a cause" },
                  { img: svg3, text: "3. Take Action" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex flex-col gap-2 items-center"
                  >
                    <div className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-full p-3 sm:p-2 bg-white">
                      <Image
                        src={item.img}
                        alt="Header Icon"
                        className="w-7 h-7 sm:w-6 sm:h-6"
                      />
                    </div>
                    <span className="text-base sm:text-sm text-center">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <button className="hidden lg:block border border-white text-white px-4 sm:px-3 py-2 sm:py-1 text-lg sm:text-sm hover:bg-white hover:text-black transition">
                  CREATE AN IMPACT
                </button>
              </div>
            </div>

            <div className="w-1/2 bg-[hsla(0,4%,9%,0.2)] p-8 sm:p-4 rounded-lg shadow-lg flex flex-col justify-between">
              <span className="text-2xl md:text-xl sm:text-lg font-semibold mb-4 block">
                Share your impact with us and gain access to life-changing
                opportunities
              </span>
              <div className="my-10 px-5 sm:px-2 flex justify-between flex-wrap">
                {[
                  { img: svg4, text: "4. Upload your impACT" },
                  { img: svg5, text: "5. Be recognized" },
                  {
                    img: svg6,
                    text: "6. Unlock career and education opportunities",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex flex-col gap-2 items-center"
                  >
                    <div className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-full p-3 sm:p-2 bg-white">
                      <Image
                        src={item.img}
                        alt="Header Icon"
                        className="w-6 h-6 sm:w-5 sm:h-5"
                      />
                    </div>
                    <span className="text-base sm:text-sm text-center">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <button className="hidden lg:block border border-white text-white px-4 sm:px-3 py-2 sm:py-1 text-lg sm:text-sm hover:bg-white hover:text-black transition">
                  BE RECOGNIZED
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#ffaf00] text-white p-6 sm:p-4 rounded-lg shadow-lg block md:hidden">
            <div className="mb-6">
              <p className="text-xl sm:text-lg font-semibold">
                Knowing & caring about issues in your community is the first
                step.
              </p>
              <p className="text-xl sm:text-lg font-semibold">
                Take the next step and create impACT today.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-y-8 sm:gap-y-6  px-2 sm:px-1">
              {[
                { img: svg1, text: "1. Be Inspired" },
                { img: svg2, text: "2. Choose a cause" },
                { img: svg3, text: "3. Take Action" },
                { img: svg4, text: "4. Upload your impACT" },
                { img: svg5, text: "5. Be recognized" },
                {
                  img: svg6,
                  text: "6. Unlock career and education opportunities",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white p-2 sm:p-1">
                    <Image
                      src={item.img}
                      alt={item.text}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <span className="mt-3 text-xs sm:text-sm text-center">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="block md:hidden mt-4">
            <Button
              variant="contained"
              className="shadow-lg text-white hover:bg-[#e69900] w-full rounded-none "
            >
              LEARN MORE ABOUT US
            </Button>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="scholarships-section p-6 bg-gray-100 animate__animated animate__backInDown">
        <div className="container mx-auto px-4">
          <div className="text-left mb-8 animate__animated animate__bounce">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="relative inline-block">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 relative">
                  Scholarships
                  <Image
                    src={oppo}
                    alt="Header Icon"
                    className="absolute top-0 right-[-50px] md:right-[-92px] w-7 md:w-9 h-7 md:h-9"
                  />
                </h1>
              </div>
              <div className="hidden md:block">
                <Button
                  variant="contained"
                  color="primary"
                  className="rounded-md shadow-lg text-xs md:text-sm px-4 py-2"
                >
                  Explore More
                </Button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={15}
            slidesPerView={1.5}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ el: ".custom-pagination", clickable: true }}
            navigation
            loop
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            className="relative"
          >
            {scholarships.map((scholarship) => (
              <SwiperSlide key={scholarship.id}>
                <div className="p-1">
                  {/* <div className=""> */}
                  <div className="bg-white shadow-md rounded-lg overflow-hidden animate__animated animate__zoomIn">
                    <a href={scholarship.link} className="block">
                      <Image
                        src={scholarship.image}
                        alt={scholarship.title}
                        className="w-full h-36 md:h-44 object-cover"
                      />
                    </a>
                    <div className="p-3 md:p-3.5">
                      <a
                        href={scholarship.link}
                        className="text-sm md:text-base font-semibold text-gray-900 block mb-1 md:mb-1.5"
                      >
                        {scholarship.title}
                      </a>
                      <span className="text-xs text-gray-600">
                        {scholarship.points}
                      </span>
                      <p className="text-xs text-gray-700 mt-1">
                        {scholarship.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        {scholarship.features?.map((feature, index) => (
                          <img
                            key={index}
                            src={feature.img}
                            title={feature.title}
                            className="w-4 h-4 md:w-5 md:h-5"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-4 flex justify-center"></div>

          <div className="mt-5 sm:mt-7 animate__animated animate__fadeInUp block md:hidden">
            <Button
              variant="contained"
              color="primary"
              className="inline-block rounded-md shadow-md text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-2"
            >
              Explore More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 mx-auto px-4">
        <hr />
      </section>

      {/* Community */}
      <section className="community-section p-6 sm:py-10 bg-gray-100 animate__animated animate__fadeIn">
        <div className="container mx-auto px-4 sm:px-4">
          <div className="text-left mb-4 sm:mb-6 animate__animated animate__bounce">
            <div className="flex flex-col sm:flex-row justify-between mb-3 sm:mb-5">
              <div className="flex items-center justify-between">
                <h1 className="text-lg sm:text-2xl font-semibold text-gray-800 relative">
                  Our Community Impact
                </h1>
                <Image
                  src={oppo}
                  alt="Header Icon"
                  className="w-7 md:w-9 h-7 md:h-9"
                />
              </div>

              <div className="hidden md:block">
                <Button
                  variant="contained"
                  color="primary"
                  className="rounded-md shadow-lg text-xs md:text-sm px-4 py-2"
                >
                  Explore More
                </Button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={15}
            slidesPerView={1.5}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".swiper-pagination2" }}
            loop
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            className="relative"
          >
            {impactsData.map((impact) => (
              <SwiperSlide key={impact.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden animate__animated animate__zoomIn">
                  <div className="relative h-28 sm:h-40">
                    <Image
                      src={impact.image}
                      alt={impact.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5 flex gap-1">
                      {impact.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-500 text-white text-[9px] sm:text-xs px-1 sm:px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-medium mb-1">
                      {impact.title}
                    </h3>
                    <div className="flex items-center space-x-1 mb-2">
                      <span className="text-[10px] sm:text-xs text-gray-600">
                        Impact Created by:
                      </span>
                      <div className="flex -space-x-1">
                        {impact.createdBy.map((user, index) => (
                          <div
                            key={index}
                            className="relative w-5 sm:w-6 h-5 sm:h-6 rounded-full overflow-hidden"
                          >
                            <Image
                              src={user.image}
                              alt={user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {impact.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-200 p-1 rounded"
                        >
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={14}
                            height={14}
                            className="w-3 sm:w-4 h-3 sm:h-4"
                          />
                          <span className="ml-1 text-[9px] sm:text-xs">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination2 flex justify-center gap-[6px] items-center mt-5"></div>
          </Swiper>

          <div className="mt-5 sm:mt-7 animate__animated animate__fadeInUp block md:hidden">
            <Button
              variant="contained"
              color="primary"
              className="inline-block rounded-md shadow-md text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-2"
            >
              Explore More
            </Button>
          </div>
        </div>
      </section>

      {/* thank u */}
      <div className="thank-you-section container mx-auto px-4 animate__animated animate__backInDown">
        <div style={{ height: "4rem" }}></div>
        <h1 className="text-center text-3xl font-bold mb-2 animate__animated animate__backInDown">
          Thank you to our sponsors and partners!
        </h1>
        <div style={{ height: "0.5rem" }}></div>
        <section className="py-8">
          <div className="slider-container">
            <Swiper
              slidesPerView={3}
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <div className="flex justify-center items-center">
                    <div className="relative w-36 h-20">
                      <Image
                        src={partner.image}
                        alt={`Partner ${partner.id}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 146px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>

      {/* Stay Connected! Subscribe to our newsletter */}
      <section
        className="subscribe-section w-full p-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          padding: "4rem 0",
          marginTop: "3rem",
        }}
      >
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-white text-left">
              Stay Connected! Subscribe to our newsletter
            </h1>
            <div className="flex flex-col sm:flex-row items-center w-full md:max-w-md sm:gap-0 gap-2">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 px-4 py-2 outline-none text-gray-700 w-full sm:w-auto text-sm sm:text-base border border-gray-300 sm:rounded-l-lg"
              />
              <button className="bg-white text-[#ffaf00] px-4 py-2 font-semibold w-full sm:w-auto text-sm sm:text-base border border-gray-300 sm:border-l-0 sm:rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section
        className="goals-section py-12 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          padding: "4rem 0",
          marginTop: "3rem",
        }}
      >
        <div className="container mx-auto px-10 pb-4 pt-24">
          <div className="mb-8 flex justify-between items-center gap-4">
            <h1 className="text-3xl font-light mb-4 text-white animate__animated animate__backInLeft">
              Sustainable Development Goals
            </h1>
            <Button
              variant="contained"
              color="primary"
              href="/about/"
              className="uppercase animate__animated animate__backInRight"
            >
              Learn more
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate__animated animate__pulse">
            {goalsData.map((goal) => (
              <a
                key={goal.id}
                href={`/sdg/${goal.title
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "-")}/`}
                target="_blank"
                rel="noreferrer"
                // className="block overflow-hidden shadow-lg"
                // className={`block overflow-hidden shadow-lg transition-all duration-500 ${
                //   animate ? "animate__animated animate__fadeInUp" : ""
                // }`}
                className="block overflow-hidden shadow-lg transition-all duration-500 hover:animate-bounce"
                style={{ backgroundColor: goal.color }}
              >
                <div className="flex flex-col justify-between">
                  <div className="p-2 flex gap-2">
                    <span className="text-white text-2xl font-medium">
                      {goal.id}
                    </span>
                    <h3 className="text-white font-medium">{goal.title}</h3>
                  </div>
                  <div className="flex justify-between mb-1 p-2">
                    <div></div>
                    <div className="">{goal.icon}</div>
                  </div>
                </div>
              </a>
            ))}
            <div className="flex justify-center items-center p-4 bg-white">
              <Image src={sdg} alt="sdg" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
// import { useRef } from "react";
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
// import { Style } from "/Home.css";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { useGSAP } from "@gsap/react";

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
import { useEffect, useState } from "react";

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
      {
        name: "User 1",
        image: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-4.svg",
      },
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
      {
        title: "Climate action",
        icon: "https://d3640phjran7n8.cloudfront.net/sdgs/sdg-12.svg",
      },
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
    id: 2,
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
    id: 2,
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
    id: 2,
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
    id: 2,
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
    id: 2,
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
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3.5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   centerMode: true,
  //   centerPadding: "0",
  //   // centerPadding: "3%",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2.5,
  //         // centerPadding: "20px",
  //       },
  //     },

  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1.5,
  //         // centerPadding: "20px",
  //       },
  //     },
  //   ],
  // };

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: number) {
  //     console.log("RequestAnimationFrame running at time:", time);
  //     lenis.raf(time);

  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      console.log("RequestAnimationFrame running at time:", time);
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Animations
    // gsap.from(".swiper-slide", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1.2,
    //   stagger: 0.3,
    //   ease: "power3.out",
    // });

    // return () => {
    //   console.log("lenis", lenis.destroy());
    //   lenis.destroy();
    // };
  }, []);

  useGSAP(() => {});

  const [, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  }, []);

  return (
    <>
      {/*banner section */}
      <section className="container mx-auto">
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
      <section className="p-6 animate__animated animate__backInDown">
        <div className="container mx-auto">
          <div className="text-left mb-8">
            <div className="flex justify-between items-center mb-6">
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
                  className="lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 w-14 h-14"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-between gap-4 items-center py-6 px-4 sm:px-2">
            <div className="w-1/2 bg-[#ffaf00] text-white p-8 sm:p-4 rounded-lg shadow-lg">
              <span className="text-2xl md:text-xl sm:text-lg font-semibold mb-4 block">
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
              <button className="hidden lg:block border border-white text-white px-4 sm:px-3 py-2 sm:py-1 text-lg sm:text-sm hover:bg-white hover:text-black transition">
                CREATE AN IMPACT
              </button>
            </div>

            <div className="w-1/2 bg-[hsla(0,4%,9%,0.2)] p-8 sm:p-4 rounded-lg shadow-lg">
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
                        className="w-7 h-7 sm:w-6 sm:h-6"
                      />
                    </div>
                    <span className="text-base sm:text-sm text-center">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <button className="hidden lg:block border border-white text-white px-4 sm:px-3 py-2 sm:py-1 text-lg sm:text-sm hover:bg-white hover:text-black transition">
                BE RECOGNIZED
              </button>
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

            <div className="grid grid-cols-3 gap-y-8 sm:gap-y-6 items-center px-4 sm:px-2">
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
                  <div className="w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white p-3 sm:p-2">
                    <Image
                      src={item.img}
                      alt={item.text}
                      className="w-7 h-7 sm:w-6 sm:h-6"
                    />
                  </div>
                  <span className="mt-3 text-base sm:text-sm text-center">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="block md:hidden mt-4">
            <Button
              variant="contained"
              className="shadow-lg bg-[#ffaf00] text-white hover:bg-[#e69900] w-full rounded-none "
            >
              LEARN MORE ABOUT US
            </Button>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      {/* <section className="p-6 bg-gray-100 animate__animated animate__backInDown">
        <div className="container mx-auto">
          <div className="text-left mb-8 animate__animated animate__bounce">
            <div className="flex justify-between items-center mb-6">
              <div className="relative inline-block">
                <h1 className="text-3xl font-bold text-gray-800 relative ">
                  Scholarships
                  <Image
                    src={oppo}
                    alt="Header Icon"
                    className="absolute top-0 right-[-92px] w-10 h-10"
                  />
                </h1>
              </div>
              <Button
                variant="contained"
                color="primary"
                className="rounded-md shadow-lg"
              >
                Explore More
              </Button>
            </div>
          </div>

          <Slider {...settings} className="scholarship-slider">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <a href={scholarship.link} className="block">
                    <Image
                      src={scholarship.image}
                      alt={scholarship.title}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4">
                    <a
                      href={scholarship.link}
                      className="text-lg font-semibold text-gray-900 block mb-2"
                    >
                      {scholarship.title}
                    </a>
                    <span className="text-sm text-gray-600">
                      {scholarship.points}
                    </span>
                    <p className="text-sm text-gray-700 mt-2">
                      {scholarship.description}
                    </p>
                    <div className="flex gap-2 mt-3">
                      {scholarship.features?.map((feature, index) => (
                        <img
                          key={index}
                          src={feature.img}
                          title={feature.title}
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}

      <section className="p-6 bg-gray-100 animate__animated animate__backInDown">
        <div className="container mx-auto">
          <div className="text-left mb-8 animate__animated animate__bounce">
            <div className="flex justify-between items-center mb-6">
              <div className="relative inline-block">
                <h1 className="text-3xl font-bold text-gray-800 relative">
                  Scholarships
                  <Image
                    src={oppo}
                    alt="Header Icon"
                    className="absolute top-0 right-[-92px] w-10 h-10"
                  />
                </h1>
              </div>
              <Button
                variant="contained"
                color="primary"
                className="rounded-md shadow-lg"
              >
                Explore More
              </Button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3.5}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ el: ".custom-pagination", clickable: true }}
            navigation
            loop
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            className="relative"
          >
            <div className="custom-pagination mt-10 flex justify-center"></div>

            {scholarships.map((scholarship) => (
              <SwiperSlide key={scholarship.id}>
                <div className="p-4">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden animate__animated animate__zoomIn">
                    <a href={scholarship.link} className="block">
                      <Image
                        src={scholarship.image}
                        alt={scholarship.title}
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href={scholarship.link}
                        className="text-lg font-semibold text-gray-900 block mb-2"
                      >
                        {scholarship.title}
                      </a>
                      <span className="text-sm text-gray-600">
                        {scholarship.points}
                      </span>
                      <p className="text-sm text-gray-700 mt-2">
                        {scholarship.description}
                      </p>
                      <div className="flex gap-2 mt-3">
                        {scholarship.features?.map((feature, index) => (
                          <img
                            key={index}
                            src={feature.img}
                            title={feature.title}
                            className="w-6 h-6"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>
      </section>

      {/* <section className="p-6 bg-gray-100 animate__animated animate__backInDown">
        <div className="container mx-auto">
          <div className="text-left mb-8 animate__animated animate__bounce">
            <div className="flex justify-between items-center mb-6">
              <div className="relative inline-block">
                <h1 className="text-3xl font-bold text-gray-800 relative">
                  Scholarships
                  <Image
                    src={oppo}
                    alt="Header Icon"
                    className="absolute top-0 right-[-92px] w-10 h-10"
                  />
                </h1>
              </div>
              <Button
                variant="contained"
                color="primary"
                className="rounded-md shadow-lg"
              >
                Explore More
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={3.5}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ el: ".custom-pagination", clickable: true }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
              }}
            >
              {scholarships.map((scholarship) => (
                <SwiperSlide key={scholarship.id}>
                  <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden animate__animated animate__zoomIn">
                      <a href={scholarship.link} className="block">
                        <Image
                          src={scholarship.image}
                          alt={scholarship.title}
                          className="w-full h-48 object-cover"
                        />
                      </a>
                      <div className="p-4">
                        <a
                          href={scholarship.link}
                          className="text-lg font-semibold text-gray-900 block mb-2"
                        >
                          {scholarship.title}
                        </a>
                        <span className="text-sm text-gray-600">
                          {scholarship.points}
                        </span>
                        <p className="text-sm text-gray-700 mt-2">
                          {scholarship.description}
                        </p>
                        <div className="flex gap-2 mt-3">
                          {scholarship.features?.map((feature, index) => (
                            <img
                              key={index}
                              src={feature.img}
                              title={feature.title}
                              className="w-6 h-6"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 text-black p-2 rounded-full shadow-md">
              ❮
            </button>
            <div className="custom-line"></div>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md">
              ❯
            </button>
          </div>

          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>
      </section> */}

      <section className="py-12 bg-gray-100 mx-auto px-4">
        <hr />
      </section>

      {/* Community */}
      <section className="py-12 bg-gray-100 animate__animated animate__fadeIn">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-left mb-8 animate__animated animate__bounce">
            <div className="flex justify-between items-center mb-6">
              <div className="relative inline-block">
                <h1 className="text-3xl font-bold text-gray-800 relative ">
                  Our Community Impact
                  <Image
                    src={oppo}
                    alt="Header Icon"
                    className="absolute top-0 right-[-92px] w-10 h-10"
                  />
                </h1>
              </div>
              <Button
                variant="contained"
                color="primary"
                className="rounded-md shadow-lg"
              >
                Explore More
              </Button>
            </div>
          </div>

          {/* Slider Section */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3.5}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
            // className="relative pb-10"
            className="relative"
          >
            <div className="custom-pagination mt-10 flex justify-center"></div>
            {impactsData.map((impact) => (
              <SwiperSlide key={impact.id}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__zoomIn">
                  <div className="relative h-48">
                    <Image
                      src={impact.image}
                      alt={impact.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      {impact.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {impact.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-sm text-gray-600">
                        Impact Created by:
                      </span>
                      <div className="flex -space-x-2">
                        {impact.createdBy.map((user, index) => (
                          <div
                            key={index}
                            className="relative w-8 h-8 rounded-full overflow-hidden"
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
                    <div className="flex flex-wrap gap-2">
                      {impact.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-200 p-2 rounded"
                        >
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="ml-2 text-sm">{feature.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Explore More Button */}
          <div className="text-center mt-8 animate__animated animate__fadeInUp">
            <a
              href=""
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* thank u */}
      <div className="container mx-auto px-4 animate__animated animate__backInDown">
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
        className="w-full py-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          padding: "4rem 0",
          marginTop: "3rem",
        }}
      >
        <div className="container mx-auto px-4">
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
        className="py-12 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          padding: "4rem 0",
          marginTop: "3rem",
        }}
      >
        <div className="container mx-auto px-4 pb-4 pt-24">
          <div className="mb-8 flex justify-between items-center">
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

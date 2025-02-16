"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { Button } from "@mui/material"; // MUI Button
import { Link as MuiLink } from "@mui/material"; // MUI Link
import "animate.css"; // Import Animate.css

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const logo = document.getElementById("logo");
    if (logo) {
      logo.classList.add("animate__animated", "animate__bounce");
    }
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md animate__animated animate__fadeInDown">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          id="logo"
          href="/"
          className="text-3xl font-bold animate__animated"
          onMouseEnter={(e) => {
            (e.target as HTMLElement).classList.add("animate__pulse");
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).classList.remove("animate__pulse");
          }}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            target.classList.add("animate__rubberBand");
            setTimeout(
              () => target.classList.remove("animate__rubberBand"),
              1000
            );
          }}
        >
          NGO Logo
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {["About", "Contact", "Donate", "News"].map((item, index) => (
            <MuiLink
              key={index}
              component={Link}
              href={`/${item.toLowerCase()}`}
              underline="none"
              color="inherit"
              className={`hover:text-blue-900 animate__animated ${
                clicked === index
                  ? "animate__rubberBand"
                  : "hover:animate__pulse"
              }`}
              // onClick={() => setClicked(index)}
              onClick={() => {
                console.log("Clicked index:", index);
                setClicked(index);
              }}
            >
              {item}
            </MuiLink>
          ))}

          <Button
            variant="contained"
            color="primary"
            startIcon={<FaCircleUser />}
            className="animate__animated animate__bounceIn"
            component={Link}
            href=""
          >
            SIGN IN
          </Button>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black shadow-sm animate__animated animate__fadeIn">
          <ul className="flex flex-col py-4 gap-4 text-white">
            {["About", "Donate", "Contact", "News"].map((item, index) => (
              <li
                key={index}
                className="animate__animated animate__fadeInUp hover:text-blue-900"
              >
                <MuiLink
                  component={Link}
                  href={`/${item.toLowerCase()}`}
                  underline="none"
                  color="inherit"
                  className={`py-2 px-6 animate__animated ${
                    clicked === index
                      ? "animate__rubberBand"
                      : "hover:animate__pulse"
                  }`}
                  onClick={() => setClicked(index)}
                >
                  {item}
                </MuiLink>
                {index !== 5 && <hr className="mt-3" />}
              </li>
            ))}

            <li className="mt-2 px-6 animate__animated animate__fadeInUp hover:animate__pulse">
              <Button
                variant="contained"
                color="primary"
                startIcon={<FaCircleUser />}
                className="animate__animated animate__bounceIn"
                component={Link}
                href=""
                sx={{ width: "auto", minWidth: "max-content" }}
              >
                SIGN IN
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

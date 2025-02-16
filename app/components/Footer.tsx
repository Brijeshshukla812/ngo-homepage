// export default function Footer() {
//   return (
//     <footer className="bg-blue-600 text-white text-center p-6 mt-8">
//       <p>© {new Date().getFullYear()} NGO Name. All rights reserved.</p>
//       <div className="flex justify-center gap-6 mt-4">
//         <a href="#" className="hover:text-blue-200">Facebook</a>
//         <a href="#" className="hover:text-blue-200">Twitter</a>
//         <a href="#" className="hover:text-blue-200">Instagram</a>
//       </div>
//     </footer>
//   );
// }

"use client";
import Link from "next/link";
import { Container, Grid, Button } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Instagram,
  ArrowUpward,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <Grid container spacing={4} className="text-center md:text-left">
          {/* Logo Section */}
          <Grid item xs={12} sm={4}>
            <h2 className="text-2xl font-bold">NGO Logo</h2>
            <p className="text-sm mt-2">
              QS ImpACT is a UK & Wales registered charity. Charity number
              1161402
            </p>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/contact-us/#contactForm"
                  className="hover:underline"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Button variant="text" className="text-white">
                  Partner with us
                </Button>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions/"
                  target="_blank"
                  className="hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy/"
                  target="_blank"
                  className="hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy/"
                  target="_blank"
                  className="hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={4}>
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Link href="https://www.facebook.com/QSImpACT" target="_blank">
                <Facebook fontSize="large" className="hover:text-gray-400" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/qs-impact/"
                target="_blank"
              >
                <LinkedIn fontSize="large" className="hover:text-gray-400" />
              </Link>
              <Link href="https://www.instagram.com/qsimpact/" target="_blank">
                <Instagram fontSize="large" className="hover:text-gray-400" />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <div className="text-center text-sm py-4 border-t border-gray-700 mt-6">
        <span>© QS ImpACT</span>
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-4 right-4 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpward className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;

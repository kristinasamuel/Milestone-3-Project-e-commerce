// Contact Page
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="w-full mt-10 sm:mt-20 lg:mt-20">
        {/* Main heading */}
      <h3 className="font-bold text-[40px] text-center"> Contact Us</h3>
      <p className="font-medium text-[18px] text-center">
        We're here to help with any questions or support you need. Feel free to
        reach out!
      </p>
      {/*Links Social Icons  */}
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 flex flex-row gap-6 ">
          <div>
            <Link
              href="https://www.linkedin.com/in/Kristina-samuel-21a6942ba"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin className="h-[60px] w-[60px] text-red-600 hover:text-red-400" />
            </Link>
          </div>
          <div>
            <Link
              href="https://github.com/kristinasamuel"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaGithub className="h-[60px] w-[60px] text-red-600 hover:text-red-400" />
            </Link>
          </div>
          <div>
            <Link
              href="https://mailto:karistina97@gmail.com"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaEnvelope className="h-[60px] w-[60px] text-red-600 hover:text-red-400" />
            </Link>
          </div>
        </div>
        {/* Contact Detail*/}
        <div className="mt-6 font-medium text-[18px] text-center mb-10">
          <h3 className="font-semibold text-[30px] ">Get in Touch!</h3>
          <p>Email: karistina@gmail.com</p>
          <p>Phone: +89465798273</p>
        </div>
      </div>
    </div>
  );
}

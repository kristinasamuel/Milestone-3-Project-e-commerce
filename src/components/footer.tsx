// home // Footer

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto grid  grid-cols-1 sm:grid-cols-1 items-center mt-5 lg:grid-cols-3 gap-8 mb-6">
        {/*Servies */}
        <div className="text-center lg:text-left">
          <h2 className="text-[28px] m-2 font-medium text-red-400">
            Our Services
          </h2>
          <div className=" text-white space-y-1 ">
            <p>24/7 Customer Support</p>
            <p>Easy Returns and Exchanges</p>
            <p>Exclusive Deals and Offers</p>
            <p>Gift Cards and Vouchers</p>
          </div>
        </div>
        {/*Social media contacts */}
        <div className="text-center lg:text-left">
          <h2 className="text-[28px] font-medium text-red-400">
            follow us
          </h2>
          <ul className="space-y-1">
            <Link
              href="https://www.linkedin.com/in/Kristina-samuel-21a6942ba"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300">
              <li>Linkdin</li>
            </Link>

            <Link
              href="https://github.com/kristinasamuel"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300">
              <li>Github</li>
            </Link>
          </ul>
        </div>
        {/*contact us*/}
        <div className="text-center lg:text-left">
          <h1 className="text-[28px] font-medium text-red-400">
            contact us
          </h1>
          <p>Email: Shopsy@gmail.com</p>
          <p> Address: USA, New York, America.</p>
        </div>
        
      </div>
      {/* copy right*/}
      <div className="w-full">
        <p className="text-center text-xm bg-zinc-800 font-sans p-2">
          © 2024 Shopsy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

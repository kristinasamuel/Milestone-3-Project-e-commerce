// Home // Herosection
export default function heroSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 sm:mt-20 lg:mt-20 ">
      <h2 className="text-[32px] sm:text-[34px] lg:text-[38px] font-bold text-center">
        {/* Main heading */}
        Welcome to Your Ultimate Shopping Destination.
      </h2>
      <p className="mt-4 font-medium text-[22px] text-gray-600 text-center">
        Here, you can find everything you need, all in one place!
      </p>
      {/* Banner section */}
      <div
        className="w-full lg:max-w-7xl h-[316px] bg-cover bg-center flex items-center justify-center mt-10 "
        style={{ backgroundImage: "url('/images/Hero.jpg')" }}
      >
        <div className="space-y-2 ">
          <h2 className="font-bold text-red-500  text-[36px] lg:text-[42px] text-center ">
            Be Smart, Shop Online
          </h2>

          <h3 className="text-[#ffffff] text-[28px] lg:text-[34px] font-semibold text-center">
            Shop the Best Deals Now!
          </h3>
          <p className="text-[#ffffff] text-[18px] lg:text-[24px] font-medium text-center">
            Shop with ease, and enjoy fast, reliable delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

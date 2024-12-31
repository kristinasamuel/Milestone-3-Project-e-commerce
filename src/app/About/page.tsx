// Home // About Page
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="container mx-auto w-full">
      {/* Heading */}
      <h3 className="font-bold text-[32px] md:text-[40px] lg:text-[40px] font-serif text-center mt-10">
        About Shopsy
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20 gap-10 px-4 ">
        {/* Left Text */}
        <p className="font-normal text-[18px] md:text-[22px] text-gray-600 text-center lg:text-left lg:w-1/2 ]">
          Welcome to Shopsy! We offer a wide range of products for all your
          needs, from fashion to home essentials and electronics. Our goal is to
          provide high-quality items that make your shopping experience easy and
          enjoyable. Whether you're looking for something trendy or practical,
          you'll find it at Shopsy. Explore our collection today and discover
          something you'll love!
        </p>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <Image
            src="/images/Image.avif"
            alt="Shopping Image"
            height={400}
            width={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Thank You Message */}
      <div>
        <p className="font-normal text-red-500 italic text-[24px] mt-8 text-center mb-8">
          Thank you for choosing Shopsy!
        </p>
      </div>
    </div>
  );
}

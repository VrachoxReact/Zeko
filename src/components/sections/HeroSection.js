// src/components/sections/HeroSection.js
import Image from "next/image";
import { Button } from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="bg-primary-50 py-12 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
            Rent Equipment with Zeko Rent
          </h1>
          <p className="text-xl mb-6 text-primary-700">
            Your one-stop solution for all your rental needs.
          </p>
          <Button
            className="bg-primary-500 hover:bg-primary-600 text-white"
            onClick={() =>
              document
                .querySelector("#services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Our Services
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="Zeko Rent Hero"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

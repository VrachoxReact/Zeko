// src/components/sections/CTABanner.js
import Link from "next/link";
import { Button } from "../ui/Button";

const CTABanner = () => {
  return (
    <section className="bg-primary-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Rent?</h2>
        <p className="text-xl mb-6">
          Explore our services and find the perfect equipment for your needs.
        </p>
        <Button
          variant="secondary"
          className="bg-white text-primary-600 hover:bg-primary-50"
          onClick={() =>
            document
              .querySelector("#services")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View Services
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;

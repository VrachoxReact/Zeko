// src/components/sections/ServicesSection.js
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Button } from "../ui/Button";
import services from "../../data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-primary-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-primary-700">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(
                    service.title
                  )}`}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardDescription className="text-primary-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="text-primary-500 border-primary-500 hover:bg-primary-50"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

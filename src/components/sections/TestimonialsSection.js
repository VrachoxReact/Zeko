// src/components/sections/TestimonialsSection.js
import { Card, CardContent } from "../ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";
import testimonials from "../../data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="bg-primary-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
          What Our Customers Say
        </h2>
        <Carousel className="max-w-xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-primary-200 shadow-md">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4 text-primary-700">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="font-semibold text-primary-600">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-500 hover:text-primary-600" />
          <CarouselNext className="text-primary-500 hover:text-primary-600" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

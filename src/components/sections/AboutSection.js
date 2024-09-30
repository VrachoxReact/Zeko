import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
          About Zeko Rent
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://via.placeholder.com/500x300"
              alt="About Zeko Rent"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4 text-primary-700">
              Zeko Rent is your trusted partner for all your equipment rental
              needs. With years of experience in the industry, we pride
              ourselves on providing top-quality equipment and exceptional
              customer service.
            </p>
            <p className="text-lg mb-4 text-primary-700">
              Our mission is to make equipment rental easy, affordable, and
              reliable for businesses and individuals alike. Whether you're a
              construction professional, event organizer, or DIY enthusiast, we
              have the right tools for your job.
            </p>
            <p className="text-lg text-primary-700">
              At Zeko Rent, we're committed to your success. Our team of experts
              is always ready to assist you in choosing the right equipment and
              ensuring you get the most out of your rental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

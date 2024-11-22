import React from 'react';
import "aos/dist/aos.css";
import Image from 'next/image';

const Services = () => {
  return (
    <div className="bg-zinc-100 py-10 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-foreground" data-aos="fade-up">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 mx-4 md:grid-cols-3 gap-8">
          <ServiceCard Imagesrc="/Images/onthego.jpg" title="On the go convenience"  />
          <ServiceCard Imagesrc="/Images/booking.jpg" title="Advance Booking" />
          <ServiceCard Imagesrc="/Images/pricing.jpeg" title="Transparent Pricing" />
          <ServiceCard Imagesrc="/Images/emergency.jpeg" title="Emergency Contact"  />
          <ServiceCard Imagesrc="/Images/firstaid.jpg" title="First Aid Information & Tips"  />
          <ServiceCard Imagesrc="/Images/talk.jpg" title="Easy to Talk"/>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ Imagesrc, title }) => {
  return (
    <div className="relative bg-black p-6 rounded-lg shadow text-center overflow-hidden w-full h-44 hover:scale-110"> {/* Updated width and height */}
      <Image
        className="absolute inset-0 w-full h-[180px] object-cover"
        src={Imagesrc}
        width={300}
        height={200}
          alt={title}
      ></Image>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h3 className="text-lg font-medium text-blue-50">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </div>
  );
};

export default Services;

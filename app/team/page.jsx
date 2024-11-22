import React from 'react';
import Image from 'next/image';
import "aos/dist/aos.css";


const expertCardClass = "hover:bg-gray-300 bg-gray-200 bg-opacity-75 p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-110 ";
const imageClass = "w-32 h-32 rounded-full mx-auto mb-4";
const textClass = "text-muted-foreground";

const MeetExperts = () => {
  return (
    <div className=" bg-zinc-100 flex flex-col items-center pt-10 ">
      <h2 className="text-3xl font-semibold text-foreground mb-12" data-aos="fade-up">Meet Experts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:mx-35 mx-10">
        <ExpertCard src = "/Images/doctor1.jpg" name="David Robert" position="MBBS Doctor" description="Our MBBS doctor brings extensive experience in patient care, diagnosis, and treatment, ensuring reliable and compassionate healthcare. With a strong background in managing various medical conditions, they are dedicated to promoting your health and well-being" number="9876543219" email="robert@gmail.com"/>
        <ExpertCard src = "/Images/doctor2.jpg" name="Maaran" position="Neurologist" description="He is a specialist with advanced expertise in diagnosing and treating disorders of the brain, spine, and nervous system. With extensive experience, they provide personalized care for conditions like epilepsy, migraines, and neurological disorders to improve patients' quality of life." number="9876543211" email="maaran@gmail.com"/>
      </div>
    </div>
  );
};

const ExpertCard = ({src, name, position, description, number, email }) => {
  return (
    <div className={expertCardClass} >
       <Image
        src={src}
        width={100}
        height={100}
        alt="Expert 1"
        className="w-44 h-44 rounded-full mx-auto mb-4 transform transition-transform duration-300 hover:scale-110"
      />
      
      <h3 className="text-xl font-semibold text-foreground">{name}</h3>
      <p className={textClass + " mb-2 font-light"}>{position}</p>
      <p className={textClass + " mb-4"}>{description}</p>
      <p className='text-blue-900 font-bold'>+ (91) {number}</p>
      <p className='text-blue-900 font-medium'>{email}</p>
      
    </div>
  );
};

export default MeetExperts;

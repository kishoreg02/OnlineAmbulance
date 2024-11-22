import React from "react";
import Head from "next/head";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company." />
      </Head>
      <div className="bg-white text-black py-8 px-4 mb-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg text-center">
          India's first, GPS based technology platform for fast and reliable first 
          point medical attention. With an increasing emphasis on promoting independent 
          living today, having access to the nearest ambulance to you can provide much 
          needed peace of mind in a worst case scenario.
            
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:mx-35 mx-10">
            <div className="px-6 rounded-lg text-center ">
              <h3 className="font-bold">LOCATION</h3>
              <p className="text-sm">
                No.100/100, Gandhi Road, 1st Main Road,
                <br />
                Chennai, 600001.
              </p>
              
            </div>

            <div className="px-6 rounded-lg text-center ">
              <h3 className="font-bold">WORKING HOURS</h3>
              <p className="text-sm">
                24*7 - All Time
                <br />
                
              </p>
            </div>
            <div className="px-6 rounded-lg text-center ">
              <h3 className="font-bold">Contact US</h3>
              <p className="text-sm text-blue-600">
                contact@gmail.com<br/>
                operation@gmail.com
                <br />+ (91) 99876543210 | + (91) 9876543211
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

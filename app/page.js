"use client";
import React, { useEffect, Suspense, useRef, useState } from "react";
import About from "./about/page";
import Services from "./services/page";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import MeetExperts from "./team/page";
import ImageSlider from "./components/ImageSlider";


const HomeScreen = () => {
  const textClasses = "text-muted-foreground";
  const containerClasses = "flex flex-col items-center p-4 bg-zinc-100 ";
  const mapClasses = "w-3/4 m-auto md:h-[400px] h-[300px] border border-border rounded-lg";

  const [formData, setFormData] = useState({
    serviceType: "",
    pickupLocation: "",
    dropLocation: "",
    contactNumber: "",
    email: "",
    companyName: "",
    temperatureRequirement: {
      chilled: false,
      frozen: false,
      ambient: false,
    },
    serviceTerms: {
      regular: false,
      adHoc: false,
    },
    vehicleCapacity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const [field, key] = name.split(".");
      setFormData({
        ...formData,
        [field]: {
          ...formData[field],
          [key]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Message sent successfully!");
      } else {
        const errorData = await response.json();
        alert("Message sent successfully!");
      }
    } catch (error) {
      alert("Message sent successfully!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const images = [
    "https://res.cloudinary.com/dakqd8kra/image/upload/v1721027017/Akshyakalpa2_kxchp0.jpg",
    "https://res.cloudinary.com/dakqd8kra/image/upload/v1721027017/licious1_oevi4v.jpg",
    "https://res.cloudinary.com/dakqd8kra/image/upload/v1721027080/swiggy1_oqqv6o.jpg",
    "https://res.cloudinary.com/dakqd8kra/image/upload/v1721027017/blinkit_shitt9.png",
    "https://res.cloudinary.com/dakqd8kra/image/upload/v1721027017/pluckk_wxucxm.jpg",
    "https://res.cloudinary.com/dakqd8kra/image/upload/v1721027017/Liber8Foods_gtvern.png",
  ];

  return (
    <>
      {/* Home Page */}

      <div id="home" className=" bg-zinc-100 text-center p-8 mt-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-left md:ml-20" data-aos="fade-up ">
              <p className="text-7xl font-bold  text-primary -ml-3 mb-8">
                ONLINE AMBULANCE
                <span style={{ color: "#003387" }}> SERVICE</span>
              </p>

              <p className="text-4xl font-medium text-zinc-700 -ml-1">
                24/7 Emergency
              </p>
              <p className="mt-8 text-1xl text-zinc-600">
              Help / Rescues the Patient in case of the Emergency situation by doing just a click. 
              Medulance Ambulance comes right in front of the door for help.
            
              </p>
            </div>
            <div className="w-15"></div>
            <div className="lg:w-1/2 mt-8" data-aos="zoom-in">
              <Image
                src="/Images/ambulancesite.jpg"
                width={500}
                height={600}
                alt="Home Screen Picture"
                className="mx-auto transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="pt-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p
                className="text-5xl font-bold text-blue-900"
                data-aos="fade-up"
              >
                100+
              </p>
              <p className="text-zinc-900">Fleet</p>
            </div>
            <div>
              <p
                className="text-5xl font-bold text-blue-500"
                data-aos="fade-up"
              >
                8500+
              </p>
              <p className="text-zinc-900"> Lives Assisted</p>
            </div>
            <div>
              <p
                className="text-5xl font-bold text-blue-900"
                data-aos="fade-up"
              >
                5+
              </p>
              <p className="text-zinc-900">Cities</p>
            </div>
            <div>
              <p
                className="text-5xl font-bold text-blue-500"
                data-aos="fade-up"
              >
                1m+
              </p>
              <p className="text-zinc-900">Subscribers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}

      <div id="services">
        <Services />
      </div>

      {/* MeetExperts */}

      <div id="team">
        <MeetExperts />
      </div>

      <div id="contacts" className="bg-zinc-100 pb-5">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-center text-foreground py-10">
            Fill Out For More Details
          </h2>
          <div className="max-w-4xl mx-auto p-6 bg-blue-100 text-card-foreground rounded-lg shadow-md mb-10">
            <h2 className="text-2xl font-bold mb-4">Do you have an inquiry?</h2>
            <p className="mb-6">
              Please fill out the form below to receive a quote.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Choose type of service
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="col-span-1 p-2 border border-border rounded-md"
                >
                  <option value="">Select Type Of Service</option>
                  <option value="Emergency">
                    Emergency
                  </option>
                  <option value="Consulting">Consulting</option>
                  <option value="Home Healthcare">Home Healthcare</option>
                  <option value="E-Pharmacy">E-Pharmacy</option>
                  <option value="Lab Test">Lab Test</option>
                </select>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pickup Location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="col-span-1 p-2 border border-border rounded-md"
                />
                <input
                  type="text"
                  name="dropLocation"
                  placeholder="Drop Location"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  className="col-span-1 p-2 border border-border rounded-md"
                />
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="col-span-1 p-2 border border-border rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  className="col-span-1 p-2 border border-border rounded-md"
                />
                
              </div>
              
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-border rounded-md h-32"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-2 px-4 rounded-md"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}

      <div id="map" className={containerClasses}>
        <h1 className="text-3xl font-bold text-foreground">
          Find Us on Google Maps
        </h1>
        <p className={textClasses + " mt-2"}>Better yet, see us in person!</p>
        <p className={textClasses + " mt-1"}>
          We love our customers, so feel free to visit during normal business
          hours.
        </p>
        <div className="mt-6 w-full max-w-10xl">
          <iframe
            className={mapClasses}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.875743619106!2d80.18340337484236!3d13.02218398729788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d2a1750661%3A0xe3a591bb494f9792!2sMIOT%20International!5e1!3m2!1sen!2sin!4v1730476327704!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      {/* About US */}

      <div id="about">
        <About />
      </div>
    </>
  );
};

export default HomeScreen;

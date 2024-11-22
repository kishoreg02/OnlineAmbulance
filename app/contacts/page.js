// "use client";
// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="bg-zinc-100 pb-5">
//       <div data-aos="fade-up">
//         <h2 className="text-3xl font-semibold text-center text-foreground py-10">
//           Fill Out For More Details
//         </h2>
//         <div className="max-w-4xl mx-auto p-6 bg-blue-100 text-card-foreground rounded-lg shadow-md mb-10">
//           <h2 className="text-2xl font-bold mb-4">Do you have an inquiry?</h2>
//           <p className="mb-6">
//             Please fill out the form below to receive a quote.
//           </p>
//           <h3 className="text-xl font-semibold mb-4">Choose type of service</h3>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <select className="col-span-1 p-2 border border-border rounded-md">
//                 <option value="">Select Type Of Service</option>
//                 <option value="Cold Chain Logistics">Cold Chain Logistics</option>
//                 <option value="Warehousing">Warehousing</option>
//                 <option value="Logistics">Logistics</option>
//                 <option value="Courier Service">Courier Service</option>
//                 <option value="Man Power Services">Man Power Services</option>
//                 <option value="Dark store">Dark store</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="Pickup Location"
//                 className="col-span-1 p-2 border border-border rounded-md"
//               />
//               <input
//                 type="text"
//                 placeholder="Drop Location"
//                 className="col-span-1 p-2 border border-border rounded-md"
//               />
//               <input
//               required
//                 type="text"
//                 placeholder="Contact Number"
//                 className="col-span-1 p-2 border border-border rounded-md"
//               />
//               <input
//                 type="email"
//                 placeholder="Email ID"
//                 className="col-span-1 p-2 border border-border rounded-md"
//               />
//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 className="col-span-1 p-2 border border-border rounded-md"
//               />
//             </div>
//             <div className="space-y-2">
//               <p className="font-semibold">Temperature Requirement</p>
//               <div className="flex space-x-4">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span>Chilled</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span>Frozen</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span>Ambient</span>
//                 </label>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <p className="font-semibold">Service Terms</p>
//               <div className="flex space-x-4">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span>Regular</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span>Ad Hoc</span>
//                 </label>
//               </div>
//             </div>
//             <input
//               type="text"
//               placeholder="Enter Vehicle Capacity"
//               className="w-full p-2 border border-border rounded-md"
//             />
//             <textarea
//               placeholder="Message"
//               className="w-full p-2 border border-border rounded-md h-32"
//             />
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className=" bg-blue-900  text-white py-2 px-4 rounded-md"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

"use client";
import React, { useState } from "react";

const ContactUs = () => {
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

  const handleSubmit = () => {

    fetch('')

    // e.preventDefault();
    // const response = await fetch("../api/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   alert("Message sent successfully!");
    // } else {
    //   alert("Failed to send message.");
    // }
  };

  return (
    <div className="bg-zinc-100 pb-5">
      <div data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center text-foreground py-10">
          Fill Out For More Details
        </h2>
        <div className="max-w-4xl mx-auto p-6 bg-blue-100 text-card-foreground rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-bold mb-4">Do you have an inquiry?</h2>
          <p className="mb-6">
            Please fill out the form below to receive a quote.
          </p>
          <h3 className="text-xl font-semibold mb-4">Choose type of service</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="col-span-1 p-2 border border-border rounded-md"
              >
                <option value="">Select Type Of Service</option>
                <option value="Cold Chain Logistics">
                  Cold Chain Logistics
                </option>
                <option value="Warehousing">Warehousing</option>
                <option value="Logistics">Logistics</option>
                <option value="Courier Service">Courier Service</option>
                <option value="Man Power Services">Man Power Services</option>
                <option value="Dark store">Dark store</option>
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
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="col-span-1 p-2 border border-border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Temperature Requirement</p>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="temperatureRequirement.chilled"
                    checked={formData.temperatureRequirement.chilled}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>Chilled</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="temperatureRequirement.frozen"
                    checked={formData.temperatureRequirement.frozen}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>Frozen</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="temperatureRequirement.ambient"
                    checked={formData.temperatureRequirement.ambient}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>Ambient</span>
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Service Terms</p>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="serviceTerms.regular"
                    checked={formData.serviceTerms.regular}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>Regular</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="serviceTerms.adHoc"
                    checked={formData.serviceTerms.adHoc}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>Ad Hoc</span>
                </label>
              </div>
            </div>
            <input
              type="text"
              name="vehicleCapacity"
              placeholder="Enter Vehicle Capacity"
              value={formData.vehicleCapacity}
              onChange={handleChange}
              className="w-full p-2 border border-border rounded-md"
            />
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
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

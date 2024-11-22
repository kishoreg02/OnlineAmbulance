import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { serviceType, pickupLocation, dropLocation, contactNumber, email, companyName, temperatureRequirement, serviceTerms, vehicleCapacity, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        auth: {
          user: "operation@vrmklogistic.com",
          pass: "Operation@vrmk",
        }
    });

    const mailOptions = {
      from: "operation@vrmklogistic.com", // Replace with your email
      to: 'contact@vrmklogistic.com', // Replace with recipient email
      subject: 'New Inquiry for VRMK Logistics',
      text: `
        Service Type: ${serviceType}
        Pickup Location: ${pickupLocation}
        Drop Location: ${dropLocation}
        Contact Number: ${contactNumber}
        Email: ${email}
        Company Name: ${companyName}
        Temperature Requirement: Chilled - ${temperatureRequirement.chilled}, Frozen - ${temperatureRequirement.frozen}, Ambient - ${temperatureRequirement.ambient}
        Service Terms: Regular - ${serviceTerms.regular}, Ad Hoc - ${serviceTerms.adHoc}
        Vehicle Capacity: ${vehicleCapacity}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}

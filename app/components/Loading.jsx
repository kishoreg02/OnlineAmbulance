import React from "react";
import { Html } from "@react-three/drei";
import "aos/dist/aos.css";

const Loading = () => {
  return (
    <Html center>
      <div className="loading-container">
        <div className="loader"></div>
        <p
          className="welcome-message"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="4000"
        >
          <br />
          <br />
          Welcome to VRMK
          <br />
          Hold on a second! Something special is coming up...
        </p>
      </div>
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          position: relative;
          animation: background-animation 5s ease-in-out infinite;
        }

        .loader {
          border: 0px solid #f3f3f3; /* Light grey */
          border-top: 16px solid #00b2ff; /* Blue */
          border-radius: 50%;
          width: 90px;
          height: 90px;
          animation: spin 2s linear infinite;
        }

        .welcome-message {
          margin-top: 20px;
          font-size: 24px;
          font-weight: bold;
          color: #003387;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes background-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Html>
  );
};

export default Loading;

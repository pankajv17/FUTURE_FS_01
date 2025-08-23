// main.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true,     // Run animation only once
      easing: "ease-in-out", // Smooth easing
    });
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);





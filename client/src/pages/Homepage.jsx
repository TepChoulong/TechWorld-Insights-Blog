import React from "react";

// Components
import NavbarComponent from "../components/NavbarComponent";

const Homepage = () => {
  return (
    <div>
      <NavbarComponent />
      <main className="md:w-[80%] mx-auto sm:p-4 ">
        <h1>Homepage</h1>
      </main>
    </div>
  );
};

export default Homepage;

import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const title = "";

const background = (
  <img class="background" alt="ocean" src="/images/ocean.jpg" />
);

const images = [];
for (const animal in animals) {
  const image = (
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
  images.push(image);
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className="animals">{images}</div>
  </div>
);

root.render(animalFacts);

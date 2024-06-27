import React from "react";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";
import "./services.css";
const data = [
  {
    id: 1,
    image: Image1, // Assuming Image1 is defined elsewhere
    title: "Front-end Webpage Design",
    description:
      "I specialize in modern front-end designs with React, Vue, Angular, enhancing user experience with AI chatbots and secure systems.",
  },
  {
    id: 2,
    image: Image2, // Assuming Image2 is defined elsewhere
    title: "Mechanical Engineering: Plastic Prototyping",
    description:
      "I focus on plastic prototyping using 3D printing and injection molding to efficiently bring mechanical designs to life.",
  },
  {
    id: 3,
    image: Image3, // Assuming Image3 is defined elsewhere
    title: "E-commerce Logistics Consulting",
    description:
      "I offer e-commerce logistics consulting, optimizing supply chains and integrating platforms like TikTok, Etsy, Shopify for growth.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

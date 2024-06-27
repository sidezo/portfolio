import React from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedMenuItems = Menu.filter((currentElem) => {
      //keeping the currentElem in Menu Array if element's category is what we want
      return currentElem.category === categoryItem;
    });
    setItems(updatedMenuItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Projects</h2>
      <div className="work__filters">
        <span className="work__item">Everything</span>
        <span className="work__item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
        <span className="work__item">Art</span>
        <span className="work__item">Design</span>
        <span className="work__item">Branding</span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;

import React from "react";

export default function Hero({ dashboard, links }) {
  // if(!data)
  const { title, describtion, image } = dashboard;
  return (
    <div className="Hero">
      <div className="hero-image">
        <img src={image.url} alt={image.id} />
      </div>
      <div>
        <div className="text">
          <h2>
            {title} <span>{describtion}</span>
          </h2>
        </div>
        <div className="links">
          {links.map((link) => (
            <a
              href={link.body}
              key={link.body}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={link.image?.url}
                alt={link.image?.id}
                className="link-img"
                width={32}
              />
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

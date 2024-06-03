import React from "react";
import "../styles.css";

const Education = () => {
  const educationItems = [
    {
      degree: " Bachelor's in Computer Science",
      institution: "Buxi Jagabandhu Bidyadhar Autonomous College,Bhubaneswar,Odisha",
      year: "(2023-2026)",
    },
    {
      degree: "Class XII - Science (CBSE) - 93.4%",
      institution: "Army Public School, Ambala Cantt, Haryana",
      year: "(2021-2022)",
    },
    {
      degree: "Class X - CBSE - 93%",
      institution: "Army Public School, Ambala Cantt, Haryana",
      year: "(2019-2020)",
    },
  ];

  return (
    <section id="education">
      <h2> EDUCATION </h2>
      <div className="education-container">
        {educationItems.map((item, index) => (
          <div className="education-item" key={index}>
            <h4>{item.degree}</h4>
            <h3>{item.institution}</h3>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

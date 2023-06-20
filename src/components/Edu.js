import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-900 p-8 shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4">Education and Training</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">BBA, Business Management</h3>
        <p className="text-gray-400 mb-4">University of Memphis</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2"> Certifications</h3>
        <ul className="list-disc list-inside">
          <li>Programming with JavaScript, Certificate from Meta</li>
          <li>HTML and CSS in depth, Certificate from Meta</li>
          <li>Version Control, Certificate from Meta</li>
          <li>Introduction to Front End Programming, Certificate from Meta</li>
          <li>Advanced React, Certificate from Meta</li>
          <li>React Basics, Certificate from Meta</li>
          <li>Principles of UX/UI Design, Certificate from Meta</li>
          <li>Front-End Developer Capstone, Certificate from Meta</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
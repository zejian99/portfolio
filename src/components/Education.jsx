// src/components/Education.jsx

import React from "react";
import educationData from "../data/education";
import EducationItem from "./EducationItem";
import Title from "./Title";

function Education() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>Education</Title>
                {educationData.map((item, index) => (
                    <EducationItem 
                        key={index}
                        year={item.year}
                        degree={item.degree}
                        institution={item.institution}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Education;

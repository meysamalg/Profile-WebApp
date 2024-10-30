"use client";

import { useState } from "react";

export default function Skills() {
  const skills = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
  ];

  const descriptions = [
    "AAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA",
    "BBBBBBBBBBBBB",
    "CCCCCCCCCCCCC",
    "DDDDDDDDDDDDD",
    "EEEEEEEEEEEEE",
    "FFFFFFFFFFFFF",
    "GGGGGGGGGGGG",
    "HHHHHHHHHHHH",
    "IIIIIIIIIIII",
    "JJJJJJJJJJJ",
    "KKKKKKKKKKKK",
    "LLLLLLLLLLLL",
    "MMMMMMMMMMMM",
    "NNNNNNNNNNNN",
    "OOOOOOOOOOOO",
  ];

  const strList = Array(10).fill(
    "itemqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="p-8  text-center">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <div className="flex gap-2 flex-col w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-300 hover:bg-gray-500 cursor-pointer p-2 rounded flex flex-col transition-all duration-300"
            onClick={() => toggleDescription(index)}
          >
            <div className="flex items-center justify-between">
              <div className="bg-gray-300 rounded-full mr-4"></div>
              <span>{skill}</span>
              <span className="ml-4 text-gray-700">&#x25BC;</span>
            </div>
            {openIndex === index && (
              <p className="text-justify">{descriptions[index]}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Team = () => {
  const cardRef = useRef(null);
  const cards: number[] = [1, 2, 3];
  const renderArticles = (items: number[]) =>
    items.map((item, idx) => (
      <div
        key={`${idx}-t-${item}`}
        onMouseOver={(e) => e.currentTarget.classList.add("active")}
        onMouseOut={(e) => e.currentTarget.classList.remove("active")}
        className="bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-indigo-400 duration-300 cursor-pointer"
      >
        <div className="relative">
          <Image
            src="https://trello-members.s3.amazonaws.com/631b3fe0aee89e044c3b543d/5043240bfe1c2684380bc29aae017da8/original.png"
            alt="Evan Brooks"
            width={400}
            height={1200}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            className="w-full object-cover"
          />
          <div
            className={`overlay  absolute bg-indigo-400 bg-opacity-0 group-hover:bg-opacity-70 grid place-items-center transition-colors ease-in delay-100`}
          >
            <ul className="list opacity-0 transition transition-opacity group-hover:opacity-100 ease-in-out delay-150 flex flex-wrap gap-1 text-xl place-items-center transform rotate-45">
              <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer  hover:bg-gray-600">
                <a href="#">
                  <FaFacebook color="white" />
                </a>
              </li>
              <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <a href="#">
                  <FaEnvelope color="white" />
                </a>
              </li>
              <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <a href="#">
                  <FaLinkedin color="white" />
                </a>
              </li>
              <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <a href="#">
                  <FaGithub color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-5 pb-7 px-5 text-center">
          <h2 className="text-xl font-semibold">Evan Brooks</h2>
          <span className="text-gray-500 capitalize inline-block mt-1 mb-4">
            Programmer
          </span>
        </div>
      </div>
    ));

  return (
    <section className={styles.section}>
      <div
        ref={cardRef}
        className="px-8 pt-24 pb-28 xl:px-5 min-h-screen place-content-center grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto teams"
      >
        <h1 className="capitalize text-center mb-5 md:mb-10 sm:col-span-2 lg:col-span-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-600">
          meet our team
        </h1>
        {renderArticles(cards)}
      </div>
    </section>
  );
};

export default Team;

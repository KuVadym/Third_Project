import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

type itemsType = {
  imageUrl: string;
  name: string;
  position: string;
  linkedin: string;
  github: string;
  mail: string;
};

const teamList: itemsType[] = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQGINEQf1ghmpA/profile-displayphoto-shrink_800_800/0/1663341667758?e=1682553600&v=beta&t=sbJcjtDMdXDIEtSsYKXVT5vMOJzNwTC2z8Pw05Zoqok",
    name: "Vadym Kuzyk",
    position: "Team Lead",
    linkedin: "https://www.linkedin.com/in/vadym-kuzyk-468395250/",
    github: "https://github.com/KuVadym",
    mail: "kuzik94vadim@gmail.com",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D4D35AQFEjzQGcfOotQ/profile-framedphoto-shrink_800_800/0/1673097005230?e=1677520800&v=beta&t=Hd5_LZzKNUINtBCA8aAJaek7GXcMZXnRJFbJ8WF2PC4",
    name: "Susanna Salata",
    position: "Scrum Master",
    linkedin: "https://www.linkedin.com/in/susanna-salata/",
    github: "https://github.com/Susanna-Salata",
    mail: "kuzik94vadim@gmail.com",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQG_EhNJ5k5txQ/profile-displayphoto-shrink_400_400/0/1677053436641?e=1682553600&v=beta&t=rEMLritsy0gXcZW3wgwYk7KLZNS7wddfb5QU8rpjfgA",
    name: "Vladyslav Shumkov",
    position: "Front End",
    linkedin: "https://www.linkedin.com/in/vladyslav-shumkov/",
    github: "https://github.com/IiIymik",
    mail: "vladyslav.shumkov@gmail.com",
  },
];

const Team = () => {
  const cardRef = useRef(null);

  const renderArticles = (items: itemsType[]) =>
    items.map(({ imageUrl, name, position, linkedin, github, mail }, idx) => (
      <div
        key={`${idx}-t-${name}`}
        onMouseOver={(e) => e.currentTarget.classList.add("active")}
        onMouseOut={(e) => e.currentTarget.classList.remove("active")}
        className="bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-indigo-400 duration-300 cursor-pointer"
      >
        <div className="relative">
          <Image
            src={imageUrl ?? ""}
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
                <a href="#" target="_blank" rel="noreferrer">
                  <FaFacebook color="white" />
                </a>
              </li>
              <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <a href={mail ? `mailto:{mail}` : ""}>
                  <FaEnvelope color="white" />
                </a>
              </li>
              <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <a href={linkedin ?? ""} target="_blank" rel="noreferrer">
                  <FaLinkedin color="white" />
                </a>
              </li>
              <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <a href={github ?? ""} target="_blank" rel="noreferrer">
                  <FaGithub color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-5 pb-7 px-5 text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <span className="text-gray-500 capitalize inline-block mt-1 mb-4">
            {position}
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
        {renderArticles(teamList)}
      </div>
    </section>
  );
};

export default Team;

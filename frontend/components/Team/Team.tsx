import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";

type itemsType = {
  imageUrl: string;
  name: string;
  position: string;
  linkedin: string;
  github: string;
  mail: string;
  pdf: string;
};

const teamList: itemsType[] = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQGINEQf1ghmpA/profile-displayphoto-shrink_800_800/0/1663341667758?e=1682553600&v=beta&t=sbJcjtDMdXDIEtSsYKXVT5vMOJzNwTC2z8Pw05Zoqok",
    name: "Vadym Kuzyk",
    position: "Team Lead, Backend dev + model",
    linkedin: "https://www.linkedin.com/in/vadym-kuzyk-468395250/",
    github: "https://github.com/KuVadym",
    mail: "kuzik94vadim@gmail.com",
    pdf: "",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D4D35AQFEjzQGcfOotQ/profile-framedphoto-shrink_800_800/0/1673097005230?e=1678816800&v=beta&t=f000NRd4wQwz6dajBGWWXLK01gejpnvolwbbQoexaqs",
    name: "Susanna Salata",
    position: "Scrum master, BA, QA + model",
    linkedin: "https://www.linkedin.com/in/susanna-salata/",
    github: "https://github.com/Susanna-Salata",
    mail: "kuzik94vadim@gmail.com",
    pdf: "https://drive.google.com/file/d/1p27YpG37i3LR2ekawrt3D1iUmRUKuVkW/view?usp=share_link",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQG_EhNJ5k5txQ/profile-displayphoto-shrink_400_400/0/1677053436641?e=1682553600&v=beta&t=rEMLritsy0gXcZW3wgwYk7KLZNS7wddfb5QU8rpjfgA",
    name: "Vladyslav Shumkov",
    position: "Front End + design",
    linkedin: "https://www.linkedin.com/in/vladyslav-shumkov/",
    github: "https://github.com/IiIymik",
    mail: "vladyslav.shumkov@gmail.com",
    pdf: "https://drive.google.com/file/d/13ZMDe6aNJyc19Z4cb3wuJKOqbFyMmtqA/view?usp=sharing",
  },
];

const Team = () => {
  const cardRef = useRef(null);

  const renderArticles = (items: itemsType[]) =>
    items.map(
      ({ imageUrl, name, position, linkedin, github, mail, pdf }, idx) => (
        <div
          key={`${idx}-t-${name}`}
          onMouseOver={(e) => e.currentTarget.classList.add("active")}
          onMouseOut={(e) => e.currentTarget.classList.remove("active")}
          className="bg-white shadow-lg border-b-4 border-transparent group transition ease-in-out delay-150 hover:border-indigo-400 duration-300 cursor-pointer"
        >
          <div className="relative">
            <Image
              src={imageUrl ?? ""}
              alt={name ?? ""}
              width={400}
              height={1200}
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "400px",
              }}
              className="w-full object-cover"
            />
            <div
              className={`overlay  absolute bg-indigo-400 bg-opacity-0 group-hover:bg-opacity-70 grid place-items-center transition-colors ease-in delay-100`}
            >
              <ul className="list opacity-0 transition transition-opacity group-hover:opacity-100 ease-in-out delay-150 flex flex-wrap gap-1 text-xl place-items-center transform rotate-45">
                <li className="w-11 h-11 bg-gray-700 flex items-center justify-center cursor-pointer  hover:bg-gray-600">
                  <a href={pdf ?? ""} target="_blank" rel="noreferrer">
                    <FaRegFilePdf color="white" />
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
            <h2 className="text-xl font-bold">{name}</h2>
            <span className="text-gray-500 capitalize inline-block mt-1 mb-4">
              {position}
            </span>
          </div>
        </div>
      )
    );

  return (
    <section className={styles.section}>
      <div className={styles.wrappIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          width={40}
          height={40}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div
        ref={cardRef}
        className="px-8 pt-0 pb-0 xl:px-5 min-h-screen place-content-center grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto teams"
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

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import BgIcon from "@/components/BgIcon";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Form from "../components/Form/Form";
import Team from "@/components/Team/Team";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let speed = 100;

    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: ".scrollElement",
      start: "top top",
      end: "45% 100%",
      scrub: 3,
    });

    // hills animation
    scene1.to(
      "#h1-1",
      { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" },
      0
    );
    scene1.to(
      "#h1-2",
      { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" },
      0
    );
    scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
    scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
    scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
    scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
    scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
    //animate text
    scene1.to("#info", { y: 8 * speed }, 0);

    /*   Bird   */
    gsap.fromTo(
      "#bird",
      { opacity: 1 },
      {
        y: -250,
        x: 800,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "15% top",
          end: "60% 100%",
          scrub: 4,
          onEnter: function () {
            gsap.to("#bird", { scaleX: 1, rotation: 0 });
          },
          onLeave: function () {
            gsap.to("#bird", { scaleX: -1, rotation: -15 });
          },
        },
      }
    );

    /* Clouds  */
    let clouds = gsap.timeline();
    ScrollTrigger.create({
      animation: clouds,
      trigger: ".scrollElement",
      start: "top top",
      end: "70% 100%",
      scrub: 1,
    });

    clouds.to("#cloud1", { x: 500 }, 0);
    clouds.to("#cloud2", { x: 1000 }, 0);
    clouds.to("#cloud3", { x: -1000 }, 0);
    clouds.to("#cloud4", { x: -700, y: 25 }, 0);

    /* Sun motion Animation  */
    let sun = gsap.timeline();
    ScrollTrigger.create({
      animation: sun,
      trigger: ".scrollElement",
      start: "top top",
      end: "2200 100%",
      scrub: 1,
    });

    //sun motion
    sun.to("#bg_grad", { attr: { cy: "330" } }, 0.0);

    //bg change
    sun.to("#sun", { attr: { offset: "0.15" } }, 0.0);
    sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.0);
    sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.0);
    sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.0);
    sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.0);
    sun.to(
      "#bg_grad stop:nth-child(6)",
      { attr: { "stop-color": "#FF9171" } },
      0
    );

    /*   SCENE 2  */
    let scene2 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene2,
      trigger: ".scrollElement",
      start: "15% top",
      end: "40% 100%",
      scrub: 4,
    });

    scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
    scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
    scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
    scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
    scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
    scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

    /* Bats */
    gsap.fromTo(
      "#bats",
      { opacity: 1, y: 400, scale: 0 },
      {
        y: 120,
        scale: 0.8,
        transformOrigin: "50% 50%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "40% top",
          end: "70% 100%",
          scrub: 3,
          onEnter: function () {
            gsap.utils.toArray("#bats path").forEach((item: any, i) => {
              return gsap.to(item, {
                scaleX: 0.5,
                yoyo: true,
                repeat: 11,
                duration: 0.15,
                delay: 0.7 + i / 10,
                transformOrigin: "50% 50%",
              });
            });
            gsap.set("#bats", { opacity: 1 });
          },
          onLeave: function () {
            gsap.to("#bats", { opacity: 0, delay: 2 });
          },
        },
      }
    );

    /* Sun increase */
    let sun2 = gsap.timeline();
    ScrollTrigger.create({
      animation: sun2,
      trigger: ".scrollElement",
      start: "2200 top",
      end: "5000 100%",
      scrub: 1,
    });

    sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
    sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
    sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
    sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
    sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
    sun2.to(
      "#bg_grad stop:nth-child(6)",
      { attr: { "stop-color": "#45224A" } },
      0
    );

    /* Transition (from Scene2 to Scene3) */
    gsap.set("#scene3", { y: 580, visibility: "visible" });
    let sceneTransition = gsap.timeline();
    ScrollTrigger.create({
      animation: sceneTransition,
      trigger: ".scrollElement",
      start: "70% top",
      end: "bottom 100%",
      scrub: 3,
    });

    sceneTransition.to(
      "#h2-1",
      { y: -680, scale: 1.5, transformOrigin: "50% 50%" },
      0
    );
    sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
    sceneTransition.to("#bg2", { y: 0 }, 0);

    /* Scene 3 */
    let scene3 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene3,
      trigger: ".scrollElement",
      start: "80% 50%",
      end: "bottom 100%",
      scrub: 3,
    });

    //Hills motion
    scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
    scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
    scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
    scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
    scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

    //stars
    scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

    // Scroll Back text
    scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
    scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);

    //gradient value change
    scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
    scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

    /*   falling star   */
    gsap.to("#fstar", {
      x: -700,
      y: -250,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".scrollElement",
        start: "4000 top",
        end: "6000 100%",
        scrub: 5,
        onEnter: function () {
          gsap.set("#fstar", { opacity: 1 });
        },
        onLeave: function () {
          gsap.set("#fstar", { opacity: 0 });
        },
      },
    });

    //reset scrollbar position after refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Catch the moment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="scrollElement">
          <a
            href="https://github.com/KuVadym/Third_Project"
            className="position-fixed top-0 m-4"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgGit}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0125 0.00591445C13.4033 0.0634309 12.9338 0.121463 12.5483 0.186932C9.47065 0.709467 6.66379 2.18474 4.44093 4.44819C1.8353 7.10138 0.296782 10.554 0.0350568 14.3355C-0.0930548 16.187 0.131222 18.1313 0.687181 19.9883C0.964258 20.9136 1.49303 22.1463 2.00163 23.0524C3.49744 25.7172 5.76828 27.8879 8.45144 29.2178C9.02635 29.5029 9.51721 29.7151 9.9896 29.8832C10.3068 29.996 10.3669 30.008 10.5547 29.9965C10.9206 29.9741 11.1674 29.7906 11.2488 29.4805C11.2695 29.4017 11.2781 28.8502 11.2737 27.8733L11.2672 26.3861L11.1608 26.4054C10.4884 26.5276 10.2264 26.5537 9.66422 26.5543C9.02857 26.555 8.75718 26.5201 8.26993 26.3753C7.73793 26.2171 7.22664 25.9105 6.84334 25.52C6.54361 25.2146 6.39603 24.9851 6.17178 24.4758C5.68368 23.3672 5.27092 22.8029 4.62081 22.3553C4.03349 21.9509 3.84483 21.672 4.04787 21.5082C4.22056 21.3687 4.64829 21.3338 5.03493 21.4276C5.31869 21.4963 5.79381 21.7308 6.04065 21.9238C6.36462 22.1771 6.68745 22.552 7.00044 23.0386C7.43376 23.7122 7.93994 24.1984 8.39239 24.3758C8.54036 24.4303 8.55195 24.4383 8.39239 24.3758C8.62721 24.4678 8.4199 24.3796 8.70287 24.4958C8.65815 24.4958 8.62623 24.4691 8.72505 24.5641C8.6351 24.4776 8.63368 24.4732 8.70287 24.4958C8.96642 24.5817 9.11439 24.6069 9.44524 24.6227C9.99268 24.6487 10.5305 24.5535 11.0693 24.3351L11.2911 24.2452L11.3304 24.0668C11.5085 23.2572 11.7436 22.7376 12.1149 22.3329C12.1953 22.2453 12.2425 22.1734 12.2198 22.1731C12.1971 22.1729 11.9988 22.1463 11.7792 22.1141C10.532 21.9314 9.59323 21.6489 8.71843 21.193C6.80367 20.1952 5.72196 18.3832 5.48073 15.7694C5.33529 14.1932 5.49194 13.0034 5.98419 11.9455C6.20681 11.467 6.46273 11.0648 6.88573 10.5285L6.96166 10.4322L6.88824 10.1937C6.63646 9.37588 6.60416 8.43331 6.79483 7.46818C6.87508 7.06196 7.08217 6.39552 7.14118 6.35352C7.16224 6.33852 7.35253 6.33273 7.56403 6.34065C7.8598 6.3517 8.02711 6.37573 8.28874 6.44478C9.08282 6.65436 10.1721 7.19259 11.0764 7.82227L11.2462 7.94049L11.4018 7.89441C12.0019 7.71661 13.1201 7.52625 13.9429 7.46181C14.4903 7.41895 15.921 7.43756 16.4233 7.49407C17.1993 7.5814 18.0965 7.74608 18.6018 7.89396L18.7541 7.93854L19.1638 7.67051C20.4349 6.83896 21.5418 6.38396 22.402 6.33928C22.9044 6.31318 22.8726 6.29284 23.0141 6.73182C23.388 7.89238 23.435 9.08763 23.1461 10.0936C23.1054 10.2355 23.0661 10.3726 23.0588 10.3982C23.0513 10.425 23.1295 10.548 23.2422 10.6866C23.7797 11.3476 24.1913 12.1741 24.3953 13.0021C24.7126 14.2901 24.6074 16.2746 24.1456 17.712C23.4457 19.8904 21.9736 21.2177 19.5736 21.8342C19.1016 21.9554 18.3853 22.0911 18.0206 22.1284C17.7292 22.1581 17.7284 22.159 17.8641 22.3036C18.3357 22.8066 18.6486 23.5987 18.7179 24.4651C18.7286 24.5987 18.7391 25.788 18.7413 27.1081L18.7453 29.5082L18.8348 29.6568C18.8904 29.749 18.9794 29.8403 19.0692 29.8973C19.2047 29.9833 19.2322 29.989 19.4973 29.9875C19.7683 29.9859 19.7992 29.9785 20.2095 29.8167C23.026 28.7064 25.3019 26.954 27.0482 24.551C27.5958 23.7975 28.044 23.0411 28.4788 22.1368C29.3384 20.3488 29.8395 18.4173 29.9734 16.3764C30.0375 15.3984 29.9832 14.0641 29.8389 13.0681C29.3968 10.019 28.039 7.14752 25.9554 4.85563C23.9225 2.61947 21.2701 1.05371 18.3492 0.365672C17.2129 0.0979701 16.4564 0.0120139 15.1513 0.00233167C14.5901 -0.00185686 14.0776 -0.00024695 14.0125 0.00591445Z"
                fill="#FEFBF7"
              />
            </svg>
          </a>
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <h2 className="capitalize text-center mb-5 md:mb-10 sm:col-span-2 lg:col-span-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold text-main">
                Catch the moment
              </h2>
            </div>
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
          </div>
          <div className={styles.container}>
            <div className={styles.formContainer}>
              <Form />
            </div>
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
          </div>
          <div className={styles.container}>
            <Team />
          </div>
        </div>

        <BgIcon />
      </main>
    </>
  );
}

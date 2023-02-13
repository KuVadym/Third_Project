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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="scrollElement">
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <h2>Carpe Diem</h2>
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

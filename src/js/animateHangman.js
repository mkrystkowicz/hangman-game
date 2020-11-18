import gsap from "gsap/gsap-core";

export default function animateHangman(currentLife) {
  const gallowLegs = document.querySelector("#gallows-legs");
  const stem = document.querySelector("#stem");
  const pillar = document.querySelector("#pillar");
  const crossbeam = document.querySelector("#crossbeam");
  const line = document.querySelector("#line");
  const hangmanHead = document.querySelector("#hangman-head");
  const hangmanTorso = document.querySelector("#hangman-torso");
  const hangmanLeftArm = document.querySelector("#hangman-left-arm");
  const hangmanRightArm = document.querySelector("#hangman-right-arm");
  const hangmanLegs = document.querySelector("#hangman-legs");

  switch (currentLife) {
    case 10:
      entranceAnimation(
        gallowLegs,
        stem,
        pillar,
        crossbeam,
        line,
        hangmanHead,
        hangmanTorso,
        hangmanLeftArm,
        hangmanRightArm,
        hangmanLegs
      );
      break;
    case 9:
      gallowLegsAnimation(gallowLegs);
      break;
    case 8:
      stemAnimation(stem, crossbeam);
      break;
    case 7:
      crossbeamAnimation(crossbeam);
      break;
    case 6:
      pillarAnimation(pillar);
      break;
    case 5:
      lineAnimation(line);
      break;
    case 4:
      headAnimation(hangmanHead);
      break;
    case 3:
      torsoAnimation(hangmanTorso);
      break;
    case 2:
      leftArmAnimation(hangmanLeftArm);
      break;
    case 1:
      rightArmAnimation(hangmanRightArm);
      break;
    case 0:
      legsAnimation(hangmanLegs);
      break;
  }
}

function entranceAnimation(...elements) {
  gsap.fromTo(
    elements,
    { opacity: 1, scale: 1 },
    { duration: 1, opacity: 0, delay: 0.6, ease: "bounce.out" }
  );

  // const tl = gsap.timeline()
  // gsap.to(opacity:1)
}

function gallowLegsAnimation(element) {
  gsap.fromTo(
    element,
    { opacity: 0, y: "+100" },
    { duration: 0.3, opacity: 1, y: 0 }
  );
}

function stemAnimation(mainElement, secondaryElement) {
  gsap.set(secondaryElement, {
    rotate: "90deg",
    y: "100",
    transformOrigin: "left bottom",
  });
  gsap.set(mainElement, { opacity: 0, y: "+100" });

  const tl = gsap.timeline();
  tl.to(mainElement, { duration: 0.8, opacity: 1, y: 0 });
  tl.to(secondaryElement, { duration: 0.8, opacity: 1, y: "-20" }, "<");
}

function pillarAnimation(element) {
  gsap.set(element, {
    rotate: "-45deg",
    x: "-10",
    y: "-25",
    transformOrigin: "50% 100%",
  }),
    gsap.fromTo(
      element,
      { rotate: "-45deg", transformOrigin: "50% 100%" },
      {
        opacity: 1,
        duration: 1,
        rotate: "0deg",
        transformOrigin: "left bottom",
      }
    );
}

function crossbeamAnimation(element) {
  gsap.to(element, { rotate: "0deg", transformOrigin: "7% 50%" });
}

function lineAnimation(element) {
  gsap.fromTo(element, { scaleY: 0 }, { opacity: 1, scaleY: 1 });
}

function headAnimation(element) {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, zIndex: 2 }
  );
}

function torsoAnimation(element) {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0, transformOrigin: "50% 50%" },
    { opacity: 1, scale: 1 }
  );
}

function leftArmAnimation(element) {
  gsap.fromTo(element, { opacity: 0, x: "-10" }, { opacity: 1, x: 0 });
}

function rightArmAnimation(element) {
  gsap.fromTo(element, { opacity: 0, x: "10" }, { opacity: 1, x: 0 });
}

function legsAnimation(element) {
  gsap.fromTo(element, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1 });
}

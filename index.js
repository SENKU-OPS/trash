gsap.registerPlugin("ScrollTrigger");
const animL1 = document.querySelectorAll(".animL1");
const animL2 = document.querySelectorAll(".animL2");
const animL3 = document.querySelectorAll(".animL3");

const animR1 = document.querySelectorAll(".animR1");
const animR2 = document.querySelectorAll(".animR2");
const animR3 = document.querySelectorAll(".animR3");


const animU1 = document.querySelectorAll(".animU1");
const animU2 = document.querySelectorAll(".animU2");
const animU3 = document.querySelectorAll(".animU3");
const animU4 = document.querySelectorAll(".animU4");
const animU5 = document.querySelectorAll(".animU5");
const animU6 = document.querySelectorAll(".animU6");





function animR(name) {
    gsap.from(name, {
        scrollTrigger: {
            trigger: name,
            start: "top 90%",
            end: "top 2%",

            toggleActions: "play reverse play reverse"
        },
        x: "100%",
        opacity: 0,
        duration: .5


    });
}


function animL(name) {
    gsap.from(name, {
        scrollTrigger: {
            trigger: name,
            start: "top 90%",
            end: "top 2%",

            toggleActions: "play reverse play reverse"
        },
        x: "-100%",
        opacity: 0,
        duration: .5


    });
}



function animU(name) {
    gsap.from(name, {
        scrollTrigger: {
            trigger: name,
            start: "top bottom",
            end: "top top",

            toggleActions: "play reverse play reverse",

        },
        y: "150%",
        opacity: 0,
        duration: .5


    });
}

animL(animL1);
animL(animL2);
animL(animL3);


animR(animR1);
animR(animR2);
animR(animR3);


animU(animU1);
animU(animU2);
animU(animU3);
animU(animU4);
animU(animU5);
animU(animU6);


  gsap.to(".name h2", {
    scrambleText: {
      text: "Erkenaz Zhanabay", 
      chars: "アカサタナハマヤラワガザダバパ",       
      speed: 0.4,
      revealDelay: 0.3
    },
    duration: 1.5,
    ease: "none"
  });

  ScrollTrigger.create({
    trigger: ".description h1",
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.to(".description h1", {
        scrambleText: {
          text: "Hi there",
          chars: "アカサタナハマヤラワガザダバパ",
          speed: 0.4,
          revealDelay: 0.3
        },
        opacity: 1,
        duration: 1.5,
        ease: "none"
      });
    }
  });

  ScrollTrigger.create({
    trigger: ".contact h1",
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.to(".contact h1", {
        scrambleText: {
          text: "Contact Me",
          chars: "アカサタナハマヤラワガザダバパ",
          speed: 0.4,
          revealDelay: 0.3
        },
        opacity: 1,
        duration: 1.5,
        ease: "none"
      });
    }
  });

  const blocks = document.querySelectorAll(".reveal-block");
  const texts = document.querySelectorAll(".reveal-text");

  blocks.forEach((block, i) => {
    const tl = gsap.timeline({ delay: i * 0.4 }); // delay for stagger effect

    tl.to(block, {
      x: '0%',
      duration: 0.5,
      ease: 'power2.out',
    })
    .to(block, {
      x: '100%',
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        block.style.display = 'none'; // remove the block after it's gone
      }
    })
    .to(texts[i], {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.5');
  });

  gsap.from(".bg", {
    opacity: 0,
    duration: 3,
    ease: "power2.out"
  });

  gsap.from(".description p", {
    scrollTrigger: {
      trigger: ".details img",   
      start: "top 80%",         
      toggleActions: "play none none none" 
    },
    opacity: 0,
    duration: 2,
    ease: "power2.out"
  });


gsap.registerPlugin(ScrollTrigger);

gsap.from(".details img", {
  scrollTrigger: {
    trigger: ".details img",   
    start: "top 80%",         
    toggleActions: "play none none none" 
  },
  opacity: 0,
  y: 25,
  x: 25,
  duration: 2,
  ease: "power2.out"
});

const split = new SplitText(".title h2", { type: "chars" });
const chars = split.chars;

gsap.from(chars, {
  scrollTrigger: {
    trigger: ".title h2",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 40,
  stagger: 0.03,
  ease: "power3.out",
  duration: 0.1,
});

gsap.from(".projects a", {
  scrollTrigger: {
    trigger: ".projects img",   
    start: "top 80%",         
    toggleActions: "play none none none" 
  },
  opacity: 0,
  duration: 2,
  ease: "power2.out"
});

gsap.from("form", {
  scrollTrigger: {
    trigger: "form",   
    start: "top 80%",         
    toggleActions: "play none none none" 
  },
  opacity: 0,
  duration: 2,
  ease: "power2.out"
});

const form = document. querySelector ("form")
form. addEventListener('submit', e => {
if (!form.checkValidity()) {
e.preventDefault()
}
form.classList.add ('was-validated')
});


function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}
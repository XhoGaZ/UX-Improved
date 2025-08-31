let currentSlide = 0;
const slides = document.querySelectorAll(".slide-content");
const navBoxes = document.querySelectorAll(".nav-box");

function changeSlide(index) {
    slides[currentSlide].classList.remove("active");
    navBoxes[currentSlide].classList.remove("disabled");

    slides[index].classList.add("active");
    navBoxes[index].classList.add("disabled");

    currentSlide = index;
}

function openBigBox(type) {
  let bigBox = document.getElementById(type + "bigbox");
  bigBox.classList.add("active"); 
  setTimeout(() => {
    bigBox.classList.add("fade-in"); 
  }, 10);

  window.scrollTo(0, 0);
}

// Toggles a panel (open/close) and scrolls back to the section on close
function toggleBox(button) {
  const targetId = button.getAttribute("data-target"); // e.g. "new-elektrik"
  const panel = document.getElementById(targetId);
  if (!panel) return;

  const isHidden = panel.classList.contains("hidden");

  if (isHidden) {
    // OPEN
    panel.classList.remove("hidden");
    button.style.display = "none";

    const yOffset = -100; 
    const y = panel.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

  } else {
    // CLOSE
    panel.classList.add("hidden");

    const  showMoreButton = document.querySelector(`[data-target="${targetId}"]`);
    if (showMoreButton) {
      showMoreButton.style.display = "flex";
    }


    const sectionId = targetId.replace(/^new-/, "");
    const section = document.getElementById(sectionId) || document.querySelector("." + sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

const hamburger = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   offScreenMenu.classList.toggle("active");
})

document.getElementById("scroll-box").addEventListener("click", function(){
    document.querySelector(".services").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.getElementById("scroll-box1").addEventListener("click", function() {
    document.querySelector(".title-box").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
  


 document.getElementById("scroll-box2").addEventListener("click", function() {
  document.querySelector(".title-box2").scrollIntoView({
    behavior: "smooth",
    block: "start"  
  });
});

  document.getElementById("scroll-box3").addEventListener("click", function() {
  document.querySelector(".about-me").scrollIntoView({
    behavior: "smooth",
    block: "start" 
  });
});

      document.getElementById("scroll-box4").addEventListener("click", function() {
  document.querySelector(".footer").scrollIntoView({
    behavior: "smooth",
    block: "start"  
  });
});

                   
   
const icons = document.querySelectorAll(".feature-small0");

gsap.from(icons, {
  x:-600, 
  duration: 1, 
  stagger: {
    amount:1.5, 
    
  }
});

 

  
   let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".title-box",
        start: "top +100px",

    }
   });

  tl2.from(".elektrik h3", { 
     opacity: 0,              
    duration: 1,         
  })

 
  tl2.from(".elektrik p", { 
    opacity: 0,             
    duration: 1,         
  })

 
  .from(".elektrik .small-button", { 
      opacity: 0,              
    duration: 1,         
  });

  document.getElementById("desktop1").addEventListener("click", function() {
  document.querySelector(".title-box2").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
 document.getElementById("desktop2").addEventListener("click", function() {
  document.querySelector(".about-me").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
 document.querySelector(".feature-final").addEventListener("click", function() {
  document.querySelector(".title-box").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
 document.querySelector(".feature .feature-final ").addEventListener("click", function() {
  document.querySelector(".title-box").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
 document.querySelector(".header1-box").addEventListener("click", function() {
  document.querySelector(".feature").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});










 
          
              
          
      





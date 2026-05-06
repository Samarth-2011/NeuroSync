// LOADER REMOVE
window.addEventListener("load", function() {
  let loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

// TYPING EFFECT
let text = "Smart School 2040";
let i = 0;

function type() {
  let typingElement = document.getElementById("typing");

  if (typingElement && i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

type();
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800
        }
      },

      color: {
        value: ["#00f7ff", "#8a2be2"]
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: 0.5
      },

      size: {
        value: 3
      },

      line_linked: {
        enable: true,
        distance: 150,
        color: "#00f7ff",
        opacity: 0.3,
        width: 1
      },

      move: {
        enable: true,
        speed: 2
      }
    },

    interactivity: {
      detect_on: "canvas",

      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },

        onclick: {
          enable: true,
          mode: "push"
        }
      },

      modes: {
        repulse: {
          distance: 100
        },

        push: {
          particles_nb: 4
        }
      }
    },

    retina_detect: true
  });
}
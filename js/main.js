document.addEventListener("DOMContentLoaded", () => {
    const icons = [
      "assets/django.svg",
      "assets/flutter.svg",
      "assets/mysql.svg",
      "assets/python.svg",
      "assets/tailwindcss.svg",
      "assets/git.svg",
      "assets/react.svg"
    ];
  
    const container = document.getElementById("bg-icons-container");
  
    for (let i = 0; i < 40; i++) {
      const img = document.createElement("img");
      img.src = icons[i % icons.length];
      img.className = "tech-bg-icon";
      img.style.left = `${Math.random() * 100}vw`;
      img.style.top = `${Math.random() * 100}vh`;
      img.style.width = img.style.height = `${25 + Math.random() * 25}px`;
      img.style.animationDuration = `${3 + Math.random() * 2}s`;
      container.appendChild(img);
    }
  
    // Typewriter effect
    const nameElement = document.getElementById("typed-name");
    const name = "Ababu Emmanuel Oturi";
    let i = 0, isDeleting = false;
  
    function typeEffect() {
      nameElement.textContent = name.substring(0, i);
      if (!isDeleting && i < name.length) {
        i++;
      } else if (isDeleting && i > 0) {
        i--;
      }
  
      if (i === name.length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (i === 0 && isDeleting) {
        isDeleting = false;
      }
  
      setTimeout(typeEffect, isDeleting ? 100 : 150);
    }
  
    typeEffect();
  });
  
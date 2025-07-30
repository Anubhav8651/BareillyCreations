// script.js

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  let target = 15360; // Example number of bottles displaced
  let count = 0;
  const increment = Math.ceil(target / 100); // smooth increment

  const updateCounter = () => {
    count += increment;
    if (count > target) {
      count = target;
    }
    counter.innerText = count.toLocaleString("en-IN");
    if (count < target) {
      requestAnimationFrame(updateCounter);
    }
  };

  if (counter) updateCounter();
});

// Mobile Nav Toggle (optional - add icon logic in HTML if needed)
const nav = document.querySelector(".nav-links");
const toggleNav = () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};

// Example: Add this to a hamburger icon if you implement one
// document.querySelector('.hamburger').addEventListener('click', toggleNav);


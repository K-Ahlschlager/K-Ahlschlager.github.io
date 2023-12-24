document.addEventListener("DOMContentLoaded", function() {
  const projectsContainer = document.querySelector(".projects-container");
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % projectsContainer.children.length;
    updateProjectsContainer();
  }, 3000); // Adjust the rotation interval (in milliseconds) as needed

  function updateProjectsContainer() {
    const transformValue = `translateX(-${currentIndex * 100}vw)`;
    projectsContainer.style.transform = transformValue;
  }
});

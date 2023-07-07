// toggleVisibility.js
export const toggleVisibility = () => {
  const jobsLabel = document.getElementById("jobs-label");
  const schoolsLabel = document.getElementById("schools-label");
  const skillsLabel = document.getElementById("skills-label");

  const jobsInfo = document.getElementById("jobs-info");
  const schoolsInfo = document.getElementById("schools-info");
  const skillsInfo = document.getElementById("skills-info");

  // Reset display properties for all elements
  jobsInfo.classList.add("show");
  schoolsInfo.classList.remove("show");
  skillsInfo.classList.remove("show");

  // Add click event listeners to labels
  jobsLabel.addEventListener("click", () => {
    // Toggle the 'show' class to trigger the fade transition
    jobsInfo.classList.add("show");
    schoolsInfo.classList.remove("show");
    skillsInfo.classList.remove("show");
  });

  schoolsLabel.addEventListener("click", () => {
    jobsInfo.classList.remove("show");
    // Toggle the 'show' class to trigger the fade transition
    schoolsInfo.classList.add("show");
    skillsInfo.classList.remove("show");
  });

  skillsLabel.addEventListener("click", () => {
    jobsInfo.classList.remove("show");
    schoolsInfo.classList.remove("show");
    // Toggle the 'show' class to trigger the fade transition
    skillsInfo.classList.add("show");
  });
};

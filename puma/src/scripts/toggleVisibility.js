// toggleVisibility.js
export const toggleVisibility = () => {
  const jobsLabel = document.getElementById("jobs-label");
  const schoolsLabel = document.getElementById("schools-label");
  const skillsLabel = document.getElementById("skills-label");

  const jobsInfo = document.getElementById("jobs-info");
  const schoolsInfo = document.getElementById("schools-info");
  const skillsInfo = document.getElementById("skills-info");

  // Reset display properties for all elements
    jobsInfo.classList.toggle("show");

  // Add click event listeners to labels
  jobsLabel.addEventListener("click", () => {

    // Trigger fade transition by adding the 'show' class
    jobsInfo.classList.toggle("show");
    schoolsInfo.classList.toggle("show");
    skillsInfo.classList.toggle("show");
  });
};

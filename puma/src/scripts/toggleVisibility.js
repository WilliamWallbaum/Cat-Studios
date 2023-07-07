// toggleVisibility.js
export const toggleVisibility = () => {
  const jobsLabel = document.getElementById("jobs-label");
  const schoolsLabel = document.getElementById("schools-label");
  const skillsLabel = document.getElementById("skills-label");

  const jobsInfo = document.getElementById("jobs-info");
  const schoolsInfo = document.getElementById("schools-info");
  const skillsInfo = document.getElementById("skills-info");

  // Show all title-cards in jobs-info by default
  const jobsTitleCards = jobsInfo.querySelectorAll(".title-card");
  jobsTitleCards.forEach((titleCard) => {
    titleCard.classList.add("show");
  });

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

    // Show all title-cards in jobs-info
    const allTitleCards = jobsInfo.querySelectorAll(".title-card");
    allTitleCards.forEach((titleCard) => {
      titleCard.classList.add("show");
    });

    // Hide all info-cards in jobs-info
    const allInfoCards = jobsInfo.querySelectorAll(".info-card");
    allInfoCards.forEach((infoCard) => {
      infoCard.classList.remove("show");
    });
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

  // Add click event listeners to icon links
  const iconLinks = document.querySelectorAll(".icon-link");
  iconLinks.forEach((iconLink) => {
    iconLink.addEventListener("click", () => {
      const linkId = iconLink.id.split("-")[0];
      const titleCard = document.getElementById(`${linkId}-title`);
      const infoCard = document.getElementById(`${linkId}-info`);

      // Hide all title-cards and info-cards
      const allTitleCards = document.querySelectorAll(".title-card");
      allTitleCards.forEach((card) => {
        card.classList.remove("show");
      });

      const allInfoCards = document.querySelectorAll(".info-card");
      allInfoCards.forEach((card) => {
        card.classList.remove("show");
      });

      // Show the clicked title-card and info-card
      if (titleCard) {
        titleCard.classList.add("show");
      }
      if (infoCard) {
        infoCard.classList.add("show");
      }
    });
  });

  // Add click event listeners to icon links in labels
  const iconLinksInLabels = document.querySelectorAll(
    "#jobs-label .icon-link, #schools-label .icon-link, #skills-label .icon-link"
  );
  iconLinksInLabels.forEach((iconLink) => {
    iconLink.addEventListener("click", () => {
      const linkId = iconLink.id.split("-")[0];
      const titleCard = document.getElementById(`${linkId}-title`);
      const infoCard = document.getElementById(`${linkId}-info`);

      // Hide all title-cards and info-cards
      const allTitleCards = document.querySelectorAll(".title-card");
      allTitleCards.forEach((card) => {
        card.classList.remove("show");
      });

      const allInfoCards = document.querySelectorAll(".info-card");
      allInfoCards.forEach((card) => {
        card.classList.remove("show");
      });

      // Show the clicked title-card and info-card
      if (titleCard) {
        titleCard.classList.add("show");
      }
      if (infoCard) {
        infoCard.classList.add("show");
      }
    });
  });
};

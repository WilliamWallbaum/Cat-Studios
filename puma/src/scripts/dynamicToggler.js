
  // JavaScript code to handle button clicks and show/hide content elements
const opacityChange = (
  containerSelector,
  activeContentSelector,
  activeSubContentSelector
) => {
  const containerCol = document.querySelector(containerSelector);
  const colContent = containerCol.querySelectorAll(".content, .sub-content");

  colContent.forEach((container) => {
    const isActiveContent =
      container.id === activeContentSelector ||
      container.id === activeSubContentSelector;

    container.classList.toggle("opacity-1", isActiveContent);
    container.classList.toggle("opacity-0", !isActiveContent);
  });
};

// Store references to the containers
const col1Container = document.querySelector(".col-1");
const col2Container = document.querySelector(".col-2");

// Function to handle button clicks
const handleButtonClick = (event, containerSelector) => {
  const targetButton = event.target.closest("button");

  if (targetButton) {
    const contentId = targetButton.getAttribute("data-content-id");
    const subContentId = targetButton.getAttribute("data-sub-content-id");

    opacityChange(containerSelector, contentId, subContentId || contentId);
  }
};
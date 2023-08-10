// dynamicToggler.js

export function initializeDynamicToggler(col1Container, col2Container) {
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

  const handleButtonClick = (event, containerSelector) => {
    const targetButton = event.target.closest("button");

    if (targetButton) {
      const contentId = targetButton.getAttribute("data-content-id");
      const subContentId = targetButton.getAttribute("data-sub-content-id");

      opacityChange(containerSelector, contentId, subContentId || contentId);
    }
  };

  col1Container.addEventListener("click", (event) => {
    handleButtonClick(event, ".col-2");
  });

  col2Container.addEventListener("click", (event) => {
    handleButtonClick(event, ".col-2");
  });
}

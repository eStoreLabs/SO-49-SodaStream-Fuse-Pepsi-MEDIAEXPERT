(() => {
  let button = document.querySelector(
    "#es-rc #es-rc-content .es-section__button"
  );

  button.addEventListener("click", () => {
    window.alert("button clicked");
  });
})();

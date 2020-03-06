export const Padding = () => {
  let main = document.querySelector("main");
  let sidebarWidth = document.querySelector(".main-header").offsetWidth;
  main.style.paddingRight = sidebarWidth + "px";
};

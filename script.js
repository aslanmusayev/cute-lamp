const lamp = document.querySelector(".lamp");
const light = document.querySelector(".lamp__light");

lamp.addEventListener("click", () => {
    light.style.opacity = light.style.opacity === "1" ? "0" : "1";
});

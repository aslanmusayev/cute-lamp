const lamp = document.querySelector(".lamp");
const light = document.querySelector(".lamp__light");

let lampOn = false;

lamp.addEventListener("click", () => {
    lampOn = !lampOn;

    if (lampOn) {
        light.style.opacity = "1";
        lamp.classList.add("on");
    } else {
        light.style.opacity = "0";
        lamp.classList.remove("on");
    }
});

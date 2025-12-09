const lamp = document.querySelector(".lamp");

let isOn = false;

lamp.addEventListener("click", () => {
    isOn = !isOn;

    if (isOn) {
        lamp.style.setProperty("--on", 1);
        lamp.style.setProperty("--cord", "yellow");
    } else {
        lamp.style.setProperty("--on", 0);
        lamp.style.setProperty("--cord", "#ccc");
    }
});

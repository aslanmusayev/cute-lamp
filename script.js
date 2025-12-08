// Sadə toggle skripti — kliklə --on dəyərini 0/1 edir
const wrapper = document.querySelector('.lamp-wrapper');
const root = document.documentElement;

let isOn = false;
function setOn(v){
  isOn = !!v;
  root.style.setProperty('--on', isOn ? '1' : '0');
}
wrapper.addEventListener('click', ()=> setOn(!isOn));

// Başlanğıc (sönük)
setOn(false);

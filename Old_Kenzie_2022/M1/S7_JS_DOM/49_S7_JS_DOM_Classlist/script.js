const space_lamp = document.getElementById("space_lamp");

function turnOn() {
  space_lamp.classList.add("on")
  space_lamp.classList.remove("off")
}
function turnOff() {
  space_lamp.classList.add("off")
  space_lamp.classList.remove("on")
}

document.addEventListener("click", (event) => {
  const lamp_id = space_lamp.id
  const id = event.target.id;  
  id == lamp_id ? 
  space_lamp.classList.contains("off") ? 
  turnOn() : turnOff()
  : 0
});
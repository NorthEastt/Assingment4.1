import {
  programButton,
  dropdownMenu1,
  dropdownMenu2,
  labs,
  informationPerson,
  informationPersonCopy,
  bar,
} from "./variable";
function setPosition(element1, element2) {
  element1.style.left = element2.offsetLeft + "px";
  element1.style.top = element2.offsetTop + element2.clientHeight + "px";
}
setPosition(dropdownMenu1, programButton);
setPosition(dropdownMenu2, labs);

window.addEventListener("resize", () => {
  setPosition(dropdownMenu1, programButton);
  setPosition(dropdownMenu2, labs);
});

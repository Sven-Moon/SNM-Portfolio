import { Interest, INTERESTS } from "../js/components/interest.js";
import activateFormVal from "./components/contact.js";
import activateDropdowns from "./components/dropdown.js"; // translateXMenuIn as x,

for (let interest in INTERESTS) {
  const interestNode = new Interest(interest, INTERESTS);
  document.getElementById(interest).appendChild(interestNode.getNode());
}

activateDropdowns();
activateFormVal();

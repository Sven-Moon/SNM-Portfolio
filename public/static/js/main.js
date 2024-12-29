import { Interest, INTERESTS } from "../js/components/interest.js";
// import { activateFormVal, addContactListeners } from "./components/contact.js";
import initializeContact from "./components/contact.js";
import activateDropdowns from "./components/dropdown.js";



for (let interest in INTERESTS) {
  const interestNode = new Interest(interest, INTERESTS);
  document.getElementById(interest).appendChild(interestNode.getNode());
}



activateDropdowns();
initializeContact();

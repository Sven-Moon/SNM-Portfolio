import { Interest, INTERESTS } from "../js/components/interest.js";
import activateDropdowns from "./components/dropdown.js"; // translateXMenuIn as x,
// import { translateXMenuIn } from "./components/dropdown.js";

for (let interest in INTERESTS) {
  const interestNode = new Interest(interest, INTERESTS);
  document.getElementById(interest).appendChild(interestNode.getNode());
}

// new Interest("development", INTERESTS);
// new Interest("tinkering", INTERESTS);
// new Interest("travel", INTERESTS);
// new Skills("skills", INTERESTS);
// new Skills("skills", INTERESTS);

activateDropdowns();
